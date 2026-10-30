import { getOrderById } from "../../../../../../lib/store";
import { getSession } from "../../../../../../lib/session";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request, { params }) {
  const { id } = await params;
  const user = await getSession();
  if (!user) return new Response("Unauthorized", { status: 401 });
  const order = getOrderById(id);
  if (!order || (order.userId !== user.id && user.role !== "staff")) {
    return new Response("Order not found", { status: 404 });
  }

  const encoder = new TextEncoder();
  let interval;
  const stream = new ReadableStream({
    start(controller) {
      const send = () => {
        const current = getOrderById(id);
        if (!current) {
          controller.close();
          clearInterval(interval);
          return;
        }
        const payload = JSON.stringify({ status: current.status, at: new Date().toISOString() });
        controller.enqueue(encoder.encode(`data: ${payload}\n\n`));
        if (["Completed", "Cancelled"].includes(current.status)) {
          clearInterval(interval);
          controller.close();
        }
      };
      send();
      interval = setInterval(send, 5000);
      request.signal.addEventListener("abort", () => {
        clearInterval(interval);
        try { controller.close(); } catch {}
      }, { once: true });
    },
    cancel() {
      clearInterval(interval);
    }
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream; charset=utf-8",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive"
    }
  });
}

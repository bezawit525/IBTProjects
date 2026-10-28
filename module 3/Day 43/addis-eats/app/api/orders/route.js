export async function POST(request) {
  let body;

  try {
    body = await request.json();
  } catch {
    return Response.json(
      { error: "Request body must be valid JSON." },
      { status: 400 },
    );
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";

  const phone = typeof body.phone === "string" ? body.phone.trim() : "";

  const errors = {};

  if (name.length < 2) {
    errors.name = "Name must contain at least 2 characters.";
  }

  if (!/^09\d{8}$/.test(phone)) {
    errors.phone = "Enter a valid Ethiopian phone number.";
  }

  if (Object.keys(errors).length > 0) {
    return Response.json(
      { error: "Validation failed.", errors },
      { status: 422 },
    );
  }

  // Demonstration only: the order is not saved to a database.
  console.log("API order received:", { name, phone });

  return Response.json(
    {
      message: "Order details accepted successfully.",
      order: { name, phone },
    },
    { status: 201 },
  );
}

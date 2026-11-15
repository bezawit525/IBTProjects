const AREAS = ["Bole", "Piassa", "Megenagna", "Kazanchis"] as const;
type Area = (typeof AREAS)[number];

type OrderStatus =
  | "pending"
  | "preparing"
  | "ready"
  | "out-for-delivery"
  | "delivered";

type Dish = {
  name: string;
  price: number;
};

type Order = {
  readonly id: number;
  customerName: string;
  area: Area;
  status: OrderStatus;
  dishes: Dish[];
  teleBirrPhone?: string;
  total: number;
};

const formatETB = (amountInSantim: number): string => {
  return new Intl.NumberFormat("en-ET", {
    style: "currency",
    currency: "ETB",
  }).format(amountInSantim / 100);
};

function deliveryFee(order: Order): number {
  if (order.total > 50000) {
    return 0;
  }

  if (order.area === "Bole") {
    return 4000;
  }

  return 6000;
}

function statusMessage(status: OrderStatus): string {
  switch (status) {
    case "pending":
      return "Order is pending";
    case "preparing":
      return "Order is being prepared";
    case "ready":
      return "Order is ready for pickup";
    case "out-for-delivery":
      return "Order is out for delivery";
    case "delivered":
      return "Order has been delivered";
    default: {
      const exhaustiveCheck: never = status;
      return exhaustiveCheck;
    }
  }
}

function receipt(order: Order): string {
  const dishList = order.dishes
    .map((dish) => `- ${dish.name}: ${formatETB(dish.price)}`)
    .join("\n");

  const fee = deliveryFee(order);
  return `
    order ID: ${order.id}
    Customer: ${order.customerName}
    Delivery Area: ${order.area}

    Dishes: ${dishList}
    subtotal: ${formatETB(order.total)}
    Delivery Fee: ${formatETB(fee)}
    Total Amount: ${formatETB(order.total + fee)}

    Status: ${statusMessage(order.status)}
    TeleBirr Phone:${order.teleBirrPhone ?? "Not Provided"}
    `;
}

const myOrder: Order = {
  id: 101,
  customerName: "Beza",
  area: "Bole",
  status: "preparing",
  dishes: [
    { name: "Kitfo", price: 35000 },
    { name: "Shiro", price: 25000 },
  ],
  teleBirrPhone: "0912345678",
  total: 60000,
};

console.log(receipt(myOrder));

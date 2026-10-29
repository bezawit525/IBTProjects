"use server";

export async function placeOrder(previousState, formData) {
  const name = String(formData.get("name") || "").trim();
  const phone = String(formData.get("phone") || "").trim();

  const errors = {};

  if (name.length < 2) {
    errors.name = "Name must contain at least 2 characters.";
  }

  if (!/^09\d{8}$/.test(phone)) {
    errors.phone = "Enter a valid Ethiopian phone number, e.g. 0912345678.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      errors,
    };
  }

  // Demonstration only: no database or payment is connected.
  console.log("Order received:", { name, phone });

  return {
    success: true,
    message: `Thank you, ${name}! Your order details were received.`,
  };
}

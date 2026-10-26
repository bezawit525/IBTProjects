"use client";

import { useActionState } from "react";
import { placeOrder } from "../app/actions.js";

const initialState = {
  success: false,
  errors: {},
  message: "",
};

export default function CheckoutForm() {
  const [state, formAction, pending] = useActionState(placeOrder, initialState);

  if (state.success) {
    return (
      <div className="success-message" role="status">
        <h2>Order Received!</h2>
        <p>{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="checkout-form">
      <div className="form-field">
        <label htmlFor="name">Full Name</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          minLength={2}
          autoComplete="name"
          placeholder="Enter your full name"
        />

        {state.errors?.name && (
          <p className="field-error">{state.errors.name}</p>
        )}
      </div>

      <div className="form-field">
        <label htmlFor="phone">Ethiopian Phone Number</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          pattern="09[0-9]{8}"
          title="Enter 10 digits starting with 09"
          autoComplete="tel"
          placeholder="0912345678"
        />

        {state.errors?.phone && (
          <p className="field-error">{state.errors.phone}</p>
        )}
      </div>

      <button className="button" type="submit" disabled={pending}>
        {pending ? "Placing Order..." : "Place Order"}
      </button>
    </form>
  );
}

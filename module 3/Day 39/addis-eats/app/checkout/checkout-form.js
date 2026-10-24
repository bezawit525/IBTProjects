"use client";

import { useActionState } from "react";
import { dishes } from "../../lib/dishes";
import { placeOrder } from "../app/actions";
import SubmitButton from "./submit-button";

const initialState = {
  success: false,
  error: "",
  fieldErrors: {},
};

export default function CheckoutForm() {
  const [state, formAction] = useActionState(placeOrder, initialState);

  return (
    <form action={formAction}>
      <div>
        <label htmlFor="name">Full name</label>
        <input id="name" name="name" type="text" minLength={2} required />

        {state.fieldErrors?.name && (
          <p role="alert">{state.fieldErrors.name[0]}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone">Phone number</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="0912345678"
          required
        />

        {state.fieldErrors?.phone && (
          <p role="alert">{state.fieldErrors.phone[0]}</p>
        )}
      </div>

      <div>
        <label htmlFor="dishId">Choose a dish</label>
        <select id="dishId" name="dishId" defaultValue="" required>
          <option value="" disabled>
            Select a dish
          </option>

          {dishes.map((dish) => (
            <option key={dish.id} value={dish.id}>
              {dish.name} — {dish.price} ETB
            </option>
          ))}
        </select>

        {state.fieldErrors?.dishId && (
          <p role="alert">{state.fieldErrors.dishId[0]}</p>
        )}
      </div>

      {state.error &&
        !state.fieldErrors?.name &&
        !state.fieldErrors?.phone &&
        !state.fieldErrors?.dishId && <p role="alert">{state.error}</p>}

      {state.success && (
        <p role="status">
          Order placed successfully! Order ID: {state.orderId}
        </p>
      )}

      <SubmitButton />
    </form>
  );
}

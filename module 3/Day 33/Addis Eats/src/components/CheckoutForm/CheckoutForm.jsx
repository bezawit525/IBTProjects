import { useRef, useState } from "react";
import PropTypes from "prop-types";

function validate(form) {
  const errors = {};

  if (!form.name.trim()) {
    errors.name = "Name is required.";
  }

  if (!/^09\d{8}$/.test(form.phone)) {
    errors.phone = "Enter a valid TeleBirr phone number.";
  }

  if (!form.area.trim()) {
    errors.area = "Delivery area is required.";
  }

  return errors;
}

function CheckoutForm({ total }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    area: "",
    notes: "",
  });

  const [touched, setTouched] = useState({});

  const [submitting, setSubmitting] = useState(false);

  const [submitError, setSubmitError] = useState("");

  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const areaRef = useRef(null);
  const notesRef = useRef(null);

  const errors = validate(form);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));

    setSubmitError("");
  }

  function handleBlur(event) {
    const { name } = event.target;

    setTouched((currentTouched) => ({
      ...currentTouched,
      [name]: true,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setSubmitError("");

    const validationErrors = validate(form);

    setTouched({
      name: true,
      phone: true,
      area: true,
      notes: true,
    });

    if (Object.keys(validationErrors).length > 0) {
      if (validationErrors.name) {
        nameRef.current?.focus();
      } else if (validationErrors.phone) {
        phoneRef.current?.focus();
      } else if (validationErrors.area) {
        areaRef.current?.focus();
      }

      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch("/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          total,
        }),
      });

      if (!response.ok) {
        throw new Error("Checkout request failed. Please try again.");
      }

      alert("Order submitted successfully!");

      setForm({
        name: "",
        phone: "",
        area: "",
        notes: "",
      });

      setTouched({});
    } catch (error) {
      setSubmitError(
        error.message || "Something went wrong. Please try again.",
      );

      if (validationErrors.name) {
        nameRef.current?.focus();
      } else if (validationErrors.phone) {
        phoneRef.current?.focus();
      } else if (validationErrors.area) {
        areaRef.current?.focus();
      }
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <h2>Checkout</h2>

      {submitError && <p role="alert">{submitError}</p>}

      {/* Name */}
      <div>
        <label htmlFor="name">Name</label>

        <input
          ref={nameRef}
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={touched.name && Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
        />

        {touched.name && errors.name && (
          <p id="name-error" role="alert">
            {errors.name}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone">TeleBirr Phone</label>

        <input
          ref={phoneRef}
          id="phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="09XXXXXXXX"
          aria-invalid={touched.phone && Boolean(errors.phone)}
          aria-describedby={errors.phone ? "phone-error" : undefined}
        />

        {touched.phone && errors.phone && (
          <p id="phone-error" role="alert">
            {errors.phone}
          </p>
        )}
      </div>

      {/* Delivery Area */}
      <div>
        <label htmlFor="area">Delivery Area</label>

        <input
          ref={areaRef}
          id="area"
          name="area"
          type="text"
          value={form.area}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={touched.area && Boolean(errors.area)}
          aria-describedby={errors.area ? "area-error" : undefined}
        />

        {touched.area && errors.area && (
          <p id="area-error" role="alert">
            {errors.area}
          </p>
        )}
      </div>

      {/* Notes */}
      <div>
        <label htmlFor="notes">Notes (optional)</label>

        <textarea
          ref={notesRef}
          id="notes"
          name="notes"
          value={form.notes}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-describedby="notes-help"
        />

        <p id="notes-help">Optional delivery instructions.</p>
      </div>

      <button type="submit" disabled={submitting}>
        {submitting ? "Submitting..." : `Place Order — ${total} ETB`}
      </button>
    </form>
  );
}

CheckoutForm.propTypes = {
  total: PropTypes.number.isRequired,
};

export default CheckoutForm;

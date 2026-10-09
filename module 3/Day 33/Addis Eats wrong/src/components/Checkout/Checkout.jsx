import { useRef, useState } from "react";

function validate(form) {
  const errors = {};

  if (!form.name.trim()) {
    errors.name = "Name is required";
  }

  if (!form.phone.trim()) {
    errors.phone = "TeleBirr phone number is required";
  } else if (!/^09\d{8}$/.test(form.phone)) {
    errors.phone = "Enter a valid 10-digit TeleBirr phone number";
  }

  if (!form.area.trim()) {
    errors.area = "Delivery area is required";
  }

  return errors;
}

function Checkout({ total }) {
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

    const validationErrors = validate(form);

    setTouched({
      name: true,
      phone: true,
      area: true,
      notes: true,
    });

    if (Object.keys(validationErrors).length > 0) {
      if (validationErrors.name) {
        nameRef.current.focus();
      } else if (validationErrors.phone) {
        phoneRef.current.focus();
      } else if (validationErrors.area) {
        areaRef.current.focus();
      }

      return;
    }

    setSubmitting(true);
    setSubmitError("");

    try {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          const requestFailed = false;

          if (requestFailed) {
            reject(new Error("The order could not be submitted."));
          } else {
            resolve();
          }
        }, 1500);
      });

      alert("Order submitted successfully!");
    } catch (error) {
      setSubmitError(
        error.message || "Something went wrong. Please try again."
      );

      if (nameRef.current) {
        nameRef.current.focus();
      }
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <h2>Checkout</h2>

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
          aria-invalid={touched.name && errors.name ? "true" : "false"}
          aria-describedby={errors.name ? "name-error" : undefined}
        />

        {touched.name && errors.name && (
          <p id="name-error" role="alert">
            {errors.name}
          </p>
        )}
      </div>

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
          aria-invalid={touched.phone && errors.phone ? "true" : "false"}
          aria-describedby={errors.phone ? "phone-error" : undefined}
        />

        {touched.phone && errors.phone && (
          <p id="phone-error" role="alert">
            {errors.phone}
          </p>
        )}
      </div>

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
          aria-invalid={touched.area && errors.area ? "true" : "false"}
          aria-describedby={errors.area ? "area-error" : undefined}
        />

        {touched.area && errors.area && (
          <p id="area-error" role="alert">
            {errors.area}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="notes">Notes (optional)</label>

        <textarea
          id="notes"
          name="notes"
          value={form.notes}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>

      {submitError && (
        <p role="alert">
          {submitError}
        </p>
      )}

      <button type="submit" disabled={submitting}>
        {submitting
          ? `Submitting... ETB ${total}`
          : `Place Order — ETB ${total}`}
      </button>
    </form>
  );
}

export default Checkout;
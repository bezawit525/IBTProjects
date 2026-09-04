import { useState } from "react";
import PropTypes from "prop-types";

function OrderForm({ total }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    area: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const phoneIsValid = /^(?:\+251|0)9\d{8}$/.test(form.phone);

  const formIsValid =
    form.name.trim() !== "" && form.area.trim() !== "" && phoneIsValid;

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Delivery order:", form);
    console.log("Total:", total);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>TeleBirr Delivery</h2>

      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your name"
        />
      </div>

      <div>
        <label>Phone</label>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="0912345678"
        />
      </div>

      {!phoneIsValid && form.phone !== "" && (
        <p>Enter a valid TeleBirr number.</p>
      )}

      <div>
        <label>Area</label>
        <input
          type="text"
          name="area"
          value={form.area}
          onChange={handleChange}
          placeholder="Bole"
        />
      </div>

      <button type="submit" disabled={!formIsValid}>
        Order for {total} ETB
      </button>
    </form>
  );
}

OrderForm.propTypes = {
  total: PropTypes.number.isRequired,
};

export default OrderForm;

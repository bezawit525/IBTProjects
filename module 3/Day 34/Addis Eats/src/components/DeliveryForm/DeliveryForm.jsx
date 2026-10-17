import { useState } from "react";

function DeliveryForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    area: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  }

  const isValidPhone = /^09\d{8}$/.test(form.phone);
  function handlesubmit(event) {
    event.preventDefault();

    if (!isValidPhone) {
      return;
    }
    alert("Delivery information submitted!");
  }

  return (
    <form onSubmit={handlesubmit}>
      <h2>TeleBirr Delivery</h2>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        TeleBirr Phone
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="09xxxxxxxx"
          required
        />
      </label>
      <label>
        Delivery Area
        <input
          type="text"
          name="area"
          value={form.area}
          onChange={handleChange}
          required
        />
      </label>
      <button
        type="submit"
        disabled={!form.name || !form.area || !isValidPhone}
      >
        Submit Delivery
      </button>
    </form>
  );
}
export default DeliveryForm;

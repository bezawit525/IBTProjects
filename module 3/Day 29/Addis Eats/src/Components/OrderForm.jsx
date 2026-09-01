import { useState } from "react";

function OrderForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    area: "Bole",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!validPhone) {
      return;
    }

    alert(`Order submitted for ${form.name}`);
  }

  const validPhone = /^(?:\+251|0)9\d{8}$/.test(form.phone);

  return (
    <section className="order-form-section">
      <h2>Delivery Information</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>

          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">TeleBirr Phone</label>

          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="09XXXXXXXX or +2519XXXXXXXX"
            required
          />

          {form.phone && !validPhone && (
            <p className="error">
              Use 09XXXXXXXX or +2519XXXXXXXX
            </p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="area">Delivery Area</label>

          <select
            id="area"
            name="area"
            value={form.area}
            onChange={handleChange}
          >
            <option value="Bole">Bole</option>
            <option value="Kazanchis">Kazanchis</option>
            <option value="Piassa">Piassa</option>
            <option value="4 Kilo">4 Kilo</option>
            <option value="CMC">CMC</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={!validPhone}
        >
          Pay with TeleBirr
        </button>
      </form>
    </section>
  );
}

export default OrderForm;
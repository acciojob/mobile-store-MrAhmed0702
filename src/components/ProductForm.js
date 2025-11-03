import React, { useState, useEffect } from "react";

const ProductForm = ({ onAdd, onSave, product }) => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    image: "",
    price: "",
  });

  useEffect(() => {
    if (product) setForm(product);
  }, [product]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSave) {
      onSave(form);
    } else {
      onAdd(form);
    }
    setForm({ name: "", description: "", image: "", price: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="form-control"
        name="name"
        placeholder="Product Name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        className="form-control"
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
        required
      />
      <input
        className="form-control"
        name="image"
        placeholder="Image URL"
        value={form.image}
        onChange={handleChange}
        required
      />
      <input
        className="form-control"
        name="price"
        placeholder="Price"
        value={form.price}
        onChange={handleChange}
        required
        type="number"
      />
      <button type="submit">{onSave ? "Save" : "Add"}</button>
    </form>
  );
};

export default ProductForm;

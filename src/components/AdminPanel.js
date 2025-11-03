import React, { useState } from "react";
import ProductForm from "./ProductForm";

const AdminPanel = ({ products, setProducts }) => {
  const [editingProduct, setEditingProduct] = useState(null);

  const handleAdd = (product) => {
    setProducts([...products, { ...product, id: Date.now() }]);
  };

  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const handleEdit = (id, updatedProduct) => {
    setProducts(products.map((p) => (p.id === id ? updatedProduct : p)));
    setEditingProduct(null);
  };

  return (
    <div className="admin">
      <h2>Admin Panel</h2>
      <ProductForm onAdd={handleAdd} />

      <h3>Product List</h3>
      {products.map((p) => (
        <div key={p.id} className="admin-item">
          <span>{p.name} - ${p.price}</span>
          <button className="float-right" onClick={() => handleDelete(p.id)}>
            Delete
          </button>
          <button className="float-right" onClick={() => setEditingProduct(p)}>
            Edit
          </button>
        </div>
      ))}

      {editingProduct && (
        <div className="edit-section">
          <h3>Edit Product</h3>
          <ProductForm
            product={editingProduct}
            onSave={(updated) => handleEdit(editingProduct.id, updated)}
          />
        </div>
      )}
    </div>
  );
};

export default AdminPanel;

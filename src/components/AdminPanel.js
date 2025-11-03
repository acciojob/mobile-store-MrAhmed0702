import React, { useState } from "react";
import { Link } from "react-router-dom";
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

      {/* Each product should be a direct <a> child for Cypress */}
      {products.map((p) => (
        <a key={p.id} href={`/products/${p.id}`}>
          <div className="row">
            <div className="col-md-8">
              <span>{p.name} - ${p.price}</span>
            </div>
            <div className="col-md-4">
              <button
                className="float-right"
                onClick={(e) => {
                  e.preventDefault(); // prevent link navigation
                  handleDelete(p.id);
                }}
              >
                Delete
              </button>
              <button
                className="float-right"
                onClick={(e) => {
                  e.preventDefault();
                  setEditingProduct(p);
                }}
              >
                Edit
              </button>
            </div>
          </div>
        </a>
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

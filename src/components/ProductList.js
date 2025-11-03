import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ products }) => {
  return (
    <div className="container">
      <h2>Available Mobiles</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-12" key={product.id}>
            <div>
              <Link to={`/products/${product.id}`}>
                <div className="row">
                  <div className="col-md-3">
                    <img src={product.image} alt={product.name} width="150" />
                  </div>
                  <div className="col-md-9">
                    <h3>{product.name}</h3>
                    <p>${product.price}</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

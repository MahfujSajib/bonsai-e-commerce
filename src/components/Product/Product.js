import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = (props) => {
  const element = <FontAwesomeIcon icon={faShoppingCart} />;
  const {
    name,
    img,
    wholePrice,
    priceFraction,
    stock,
    star,
    starCount,
    price,
    shipping,
  } = props.product;
  return (
    <div className="products">
      <div>
        <img img-fluid src={img} alt="" />
      </div>
      <div>
        <h4 className="product-name">{name}</h4>
        <h5>Price: ${price}</h5>
        <h6>Only {stock} left.Order Soon</h6>
        <button
          onClick={() => props.handleAddToCart(props.product)}
          className="cart-btn"
        >
          {element}add to cart{" "}
        </button>
      </div>
    </div>
  );
};

export default Product;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faCoins } from "@fortawesome/free-solid-svg-icons";
import "./ProductCard.css";

function ProductCard(props) {
  return (
    <div className="card">
      <img className="productImg" src={props.product.img.url} alt="" />
      <div className="hidden">
        <span className="textContainer">
          <b className="productName">{props.product.name}</b> -
          <em className="productCategory">{props.product.category}</em>
        </span>
      </div>
      <div className="control">
        <button className="btn">
          <span className="price">
            {props.product.cost}
            <FontAwesomeIcon style={{ marginLeft: 5 }} icon={faCoins} />
          </span>
          <span className="shopping-cart">
            <FontAwesomeIcon icon={faShoppingCart} />
          </span>
          <span className="buy">Buy Now</span>
        </button>
      </div>
    </div>
  );
}

export default ProductCard;

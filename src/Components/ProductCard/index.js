import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function ProductCard(props) {
  return (
    <div>
      <div className="product-image">
        <img alt="productImage" src={props.product.img.url}></img>
      </div>

      <div className="product-info-container">{props.product.name}</div>

      <div className="add-to-cart-container">
        <span className="product-price">${props.product.cost}</span>
        <button>
          <FontAwesomeIcon icon={faShoppingCart} />
          Redeem!
        </button>
      </div>
    </div>
  );
}

export default ProductCard;

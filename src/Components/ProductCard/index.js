import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faCoins } from "@fortawesome/free-solid-svg-icons";
import { useToasts } from "react-toast-notifications";
import { redeemProduct } from "./../../redux/reducers/user/actions";
import "./ProductCard.css";

function ProductCard(props) {
  const { addToast } = useToasts();

  const buyProduct = () => {
    if (window.confirm("Redeem Product?")) {
      props.redeemProduct(props.product);
      addToast("Product successfully redeemed!", {
        appearance: "success",
        autoDismiss: true,
      });
    }
  };

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
        <button
          className="btn"
          style={
            props.points > props.product.cost
              ? { backgroundColor: "#49c608" }
              : { backgroundColor: "#ff0000" }
          }
          onClick={
            props.points > props.product.cost
              ? () => {
                  buyProduct();
                }
              : () => {
                  alert(
                    `Not enough points! You need ${
                      props.product.cost - props.points
                    } more points.`
                  );
                }
          }
        >
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

const mapStateToProps = (state) => {
  return {
    points: state.user.points,
  };
};

export default connect(mapStateToProps, { redeemProduct })(ProductCard);

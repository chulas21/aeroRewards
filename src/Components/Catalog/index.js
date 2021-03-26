import React from "react";
import ProductCard from "../ProductCard";
import "./Catalog.css";
import { connect } from "react-redux";

function Catalog(props) {
  return (
    <div className="product_cards_container">
      <div className="songs_list">
        {props.productList.map((p) => (
          <ProductCard product={p} />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    productList: state.product.productList,
  };
};

export default connect(mapStateToProps)(Catalog);

import React from 'react';
import ProductCard from '../ProductCard';
import './Catalog.css';
import { connect } from 'react-redux';

function Catalog(props) {
  return (
    <div className="mainContainer">
      {props.productList?.length ? (
        <div>
          {props.productList.map((p) => (
            <ProductCard product={p} />
          ))}
        </div>
      ) : (
        <div>
          <h1>No hay productos.</h1>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    productList: state.product.productList,
  };
};

export default connect(mapStateToProps)(Catalog);

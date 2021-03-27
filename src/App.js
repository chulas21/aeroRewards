import { useEffect } from "react";
import NavBar from "./Components/NavBar";
import Catalog from "./Components/Catalog";
import { connect } from "react-redux";
import { getUserData } from "./redux/reducers/user/actions";
import { ToastProvider } from "react-toast-notifications";
import { getProductList } from "./redux/reducers/products/action";
import "./App.css";

function App({ getUserData, getProductList, redeemHistory }) {
  useEffect(() => {
    getUserData();
    getProductList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [redeemHistory]);

  return (
    <ToastProvider
      autoDismiss
      autoDismissTimeout={3000}
      placement="bottom-center"
    >
      <div className="App">
        <NavBar />
        <Catalog />
      </div>
    </ToastProvider>
  );
}

const mapStateToProps = (state) => {
  return {
    redeemHistory: state.user.redeemHistory,
  };
};

export default connect(mapStateToProps, { getUserData, getProductList })(App);

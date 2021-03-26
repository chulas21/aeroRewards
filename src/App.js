import { useEffect } from 'react';
import NavBar from './Components/NavBar';
import Catalog from './Components/Catalog';
import { connect } from 'react-redux';
import { getUserData } from './redux/reducers/user/actions';
import { getProductList } from './redux/reducers/products/action';
import './App.css';

function App({ getUserData, getProductList }) {
  useEffect(() => {
    getUserData();
    getProductList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Catalog />
    </div>
  );
}

export default connect(null, { getUserData, getProductList })(App);

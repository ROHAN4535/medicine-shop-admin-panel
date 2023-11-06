import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Header from "./components/Layout/Header";
import MedicineList from "./components/MedicineList/medicineList";
import CartProvider from "./components/Store/CartProvider";
import ListProvider from "./components/Store/ListProvider";
import Cart from "./components/Cart/Cart"

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <div className="App">
      <CartProvider>
        <ListProvider>
          {cartIsShown && <Cart onHideCart={hideCartHandler} />}
          <Header onShowCart={showCartHandler} />
          <Form />
          <MedicineList />
        </ListProvider>
      </CartProvider>
    </div>
  );
}

export default App;



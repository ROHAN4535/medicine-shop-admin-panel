import { useContext, useState } from "react";
import classes from './Form.module.css';
import CartContext from "../../Store/Cart-Context";

const Form = (props) => {
    const [enteredName, setEnteredName] = useState("");
    const [enteredDesc, setEnteredDesc] = useState("");
    const [enteredPrice, setEnteredPrice] = useState("");
    const [enteredQuantity,setEnteredQuantity] = useState("");
  
    const cartCntx = useContext(CartContext);
  
    const nameChangeHandler = (event) => {
      setEnteredName(event.target.value);
    };
    const descChangeHandler = (event) => {
      setEnteredDesc(event.target.value);
    };
    const priceChangeHandler = (event) => {
      setEnteredPrice(event.target.value);
    };
    const QuantityChangeHandler = (event) =>{
      setEnteredQuantity(event.target.value);
    };
  
    const submitHandler = (event) => {
      event.preventDefault();
      const medicineData = {
        id:Math.random().toString(),
        name: enteredName,
        desc: enteredDesc,
        price: enteredPrice,
        quantity: 0
        
      };
      cartCntx.addItem({...medicineData});
  
      setEnteredName("");
      setEnteredDesc("");
      setEnteredPrice("");
      setEnteredQuantity("");
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <label>Medicine Name:</label>
            <input type="text" value={enteredName} onChange={nameChangeHandler}/>
            <label>Description:</label>
            <input type="text" value={enteredDesc} onChange={descChangeHandler}/>
            <label>Price:</label>
            <input type="number" value={enteredPrice} onChange={priceChangeHandler}/>
            <label>Quantity Availlable:</label>
            <input type="number" value={enteredQuantity} onChange={QuantityChangeHandler}/>

            <button className={classes.button}type="submit">Add Product</button>
        </form>
    );    
};

export default Form;
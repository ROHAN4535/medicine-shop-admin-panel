import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";
import { Fragment } from "react";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Medicine Shop</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
    </Fragment>
  );
};

export default Header;
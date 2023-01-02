import styles from "./ProductForm.module.scss";
import OptionColor from "../OptionColor/OptionColor";
import Button from "../Button/Button";
import OptionSize from "../OptionSize/OptionSize";
import PropTypes from "prop-types";

const ProductForm = (props) => {

  const summary = (e) => {
    e.preventDefault();
    console.log("Summary: ", props.shoppingSummary);
    }

  return (
    <form>
      <OptionSize
        size={props.size}
        action={props.actionSize}
        currentSize={props.currentSize}
        price={props.price}
        actionPrice={props.actionPrice}
        sizes={props.sizes}
      />
      <OptionColor
        colors={props.colors}
        action={props.actionColor}
        currentColor={props.currentColor}
      />
      <Button type={"submit"} onClick={summary} className={styles.button}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  );
};

ProductForm.propTypes = {
  actionColor: PropTypes.func.isRequired,
  actionPrice: PropTypes.func.isRequired,
  actionSize: PropTypes.func.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
  shoppingSummary: PropTypes.object.isRequired,
  currentColor: PropTypes.string.isRequired,
  currentSize: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductForm;
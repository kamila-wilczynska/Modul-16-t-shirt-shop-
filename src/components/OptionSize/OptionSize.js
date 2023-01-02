import styles from "./OptionSize.module.scss";
import Button from "../Button/Button";
import PropTypes from "prop-types";

const OptionSize = (props) => {

	OptionSize.propTypes = {
		sizes: PropTypes.array.isRequired,
		action: PropTypes.func.isRequired,
		actionPrice: PropTypes.func.isRequired,
		currentSize: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
	  };

  return (
    <div className={styles.sizes}>
      <h3 className={styles.optionLabel}>Sizes</h3>
      <ul className={styles.choices}>
        {props.sizes.map((size, index) => (
          <li key={index}>
            <Button
              type={'button'}
              onClick={() => {
                props.action(size.name);
                props.actionPrice(size.additionalPrice);
              }}
              className={size.name === props.currentSize ? styles.active : null}
            >
              {size.name}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};



export default OptionSize;
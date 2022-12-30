import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import { useState } from 'react';
import PropTypes from 'prop-types';

const Product = props => {
	const [currentColor, setcurrentColor] = useState(props.colors[0]);
	//const [currentSize, setcurrentSize = useState(0);

	const ColorClassName = (color) => {
		return styles[
		  "color" + color[0].toUpperCase() + color.substr(1).toLowerCase()
		];
	  };

	Product.propTypes ={            //type checking
		colors: PropTypes.array,
		sizes: PropTypes.array,
	  }
  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt="Kodilla shirt"
          //src={`${process.env.PUBLIC_URL}/images/products/shirt-kodilla--black.jpg`} />
		  src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {props.basePrice}</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              <li><button type="button" className={styles.active}>S</button></li>
              <li><button type="button">M</button></li>
              <li><button type="button">L</button></li>
              <li><button type="button">XL</button></li>
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
			<ul className={styles.choices}>
              {props.colors.map((prod) => (
                <li key={prod}>
                  <button type="button" 
				  className={clsx(ColorClassName(prod), prod === currentColor && styles.active)} />
                </li>
              ))}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

export default Product;
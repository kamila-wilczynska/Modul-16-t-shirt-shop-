import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import { useState } from 'react';
import PropTypes from 'prop-types';

const Product = props => {
	const [currentColor, setCurrentColor] = useState(props.colors[0]);
	const [currentSize, setCurrentSize] = useState(props.sizes[0]);
	const [currentSizePrice, setCurrentSizePrice] = useState(
		props.sizes[0].additionalPrice
	  );

	const ColorClassName = (color) => {
		return styles[
		  "color" + color[0].toUpperCase() + color.substr(1).toLowerCase()
		];
	  };
	  console.log(ColorClassName);

	  Product.propTypes = {                //checking types
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		basePrice: PropTypes.number.isRequired,
		colors: PropTypes.array.isRequired,
		sizes: PropTypes.array.isRequired,
	  };

function getPrice() {
	return props.basePrice + currentSizePrice;
}

const shoppingSummary = {
    name: props.title,
    color: currentColor,
    size: currentSize,
    price: getPrice(),
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
          
		  <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
				{props.sizes.map((size)=>(
					<li>
					 <button 
					 type="button"  
					 onClick={() => {setCurrentSize(size.name); setCurrentSizePrice(size.additionalPrice)}}
					 className={size.name === currentSize ? styles.active : null}>
					{size.name}
					</button>
					</li>
				))}
              
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
			<ul className={styles.choices}>
              {props.colors.map((prod) => (
                <li key={prod}>
                   <button 
				   type="button" 
				   onClick={() => setCurrentColor(prod)} 
				   className={clsx(ColorClassName(prod), prod === currentColor && styles.active)} />
                </li>
              ))}
            </ul>
          </div>
          <Button  onClick={(event) => {event.preventDefault(); console.log('Summary: ', shoppingSummary)}} 
		  className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

export default Product;
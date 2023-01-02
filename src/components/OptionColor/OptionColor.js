import styles from "./OptionColor.module.scss";
import Button from "../Button/Button";
import clsx from "clsx";
import PropTypes from "prop-types";

/*Komponent ten musi otrzymać od rodzica informacje o wszystkich kolorach, aktualnie wybranym kolorze, a także referencję do funkcji, która ten kolor może zmienić. W widoku musi renderować po prostu listę kolorów, które reagują na kliknięcie. Wykrycie kliku powinno powodować zmianę stanu koloru w Product.
*/
const OptionColor = (props) => {
    const colorClassName = (color) => {
        return styles[
          "color" + color[0].toUpperCase() + color.substr(1).toLowerCase()
        ];
      };
    return (
        <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map((prod) => (
                <li key={prod}>
                  <Button
                    type={'button'}
                    onClick={() => props.action(prod)}
                    className={clsx(
                      colorClassName(prod),
                      prod === props.currentColor && styles.active
                    )}
                  />
                </li>
              ))}
            </ul>
        </div>
    )
}

OptionColor.propTypes = {
    colors: PropTypes.array.isRequired,
    action: PropTypes.func.isRequired,
    currentColor: PropTypes.string.isRequired,
  };

export default OptionColor;
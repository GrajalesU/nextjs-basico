import React, { useState } from "react";
import { useCartMutations } from "store/Cart";
import styles from "./styles.module.css";

type AddToCartProps = {
  product: TProduct;
};

const addToCartRequest = () =>
  new Promise((resolve, reject) => {
    window.setTimeout(resolve, 600);
  });

const validate = (quantity: number) => {
  let error = "";
  if (quantity < 1) error = "Cant't Be blank";

  return error;
};

export default function AddToCart({ product }: AddToCartProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [visible, setVisible] = useState(false);
  const { addToCart } = useCartMutations();

  const toggleMessage = () => {
    setTimeout(() => {
      setVisible(false);
    }, 1000);
  };

  const handleSubmit = async () => {
    const error = validate(quantity);
    setError(error);

    if (!error) {
      setLoading(true);
      addToCartRequest()
        .then(() => {
          addToCart(product, quantity);
          setLoading(false);
          setVisible(true);
          toggleMessage();
        })
        .catch((err: Error) => {
          setError(`Error ${err}` || "something went wrong");
          setLoading(false);
        });
    }
  };

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(parseInt(target.value, 10));
  };

  return (
    <>
      <div className={styles.flex}>
        <input
          className={styles.productInput}
          type="number"
          min={1}
          step={1}
          onChange={handleChange}
          value={quantity}
        />
        <button className={styles.productBtn} onClick={handleSubmit}>
          <img
            className={styles.productIcon}
            src="/images/cart.svg"
            alt="cart"
          />
          Add to Cart
        </button>
        {error && <div className={styles.error}>{error}</div>}
        {visible && <div className={styles.added}>Added to cart</div>}
      </div>
    </>
  );
}

import { useRef, useState } from 'react';

import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';
var number = 1;

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(number);
  };

  const addToCartHandler = (num) => {
    number = num;
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
       {/* <input id="size" type="text" className={classes.input} placeholder='Enter size: S/L/Z'/> */}
      <Input
        ref={amountInputRef}
        input={{
          id: 'amount_' + props.id,
          type: 'hidden',
        }}
      />
      <button onClick={() => addToCartHandler(1)}> 1 Add</button>
      <button onClick={() => addToCartHandler(2)}> 2 Add</button>
      <button onClick={() => addToCartHandler(3)}> 3 Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
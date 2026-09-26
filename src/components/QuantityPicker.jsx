import { useState } from 'react';
import './QuantityPicker.css';

function QuantityPicker(props) {
  // const [state, setState] = useState(initialValue)
  const [quantity, setQuantity] = useState(1);
  // quantity = quantity + 1;

  function onDecrease() {
    console.log('decreasing the quantity');
    let nextVal = quantity - 1;

    if (nextVal > 0) {
      setQuantity(nextVal)
      props.onChange(nextValue)
    }
  }

  function onIncrease() {
    console.log('increasing the quantity');
    let nextVal = quantity + 1;
    setQuantity(nextVal)
    props.onChange(nextVal)
  }

  return (
    <div className="quantity-picker">
      <button
        className="btn-minus"
        onClick={onDecrease}
        disabled={quantity === 1}
      >-</button>

      <label className="label-qty">{quantity}</label>

      <button className="btn-plus" onClick={onIncrease}>+</button>
    </div>
  );
}

export default QuantityPicker;
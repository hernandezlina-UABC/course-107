import './QuantityPicker.css';

function QuantityPicker() {
  return (
    <div className="quantity-picker">
      <button className="btn-minus">-</button>
      <label className="label-qty">1</label>
      <button className="btn-plus">+</button>
    </div>
  );
}

export default QuantityPicker;
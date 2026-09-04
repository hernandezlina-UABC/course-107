import './Button.css';

function Button(props) {
  return (
    <button className="btn">
      {props.label}
    </button>
  );
}

export default Button;
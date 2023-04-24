import '../assets/globalStyles.css';
import "./Button.css";

function Button(props) {
  function click(){
    props.clickHandler(props.point)
  }

  return <button type='button'
  onClick={click}
  className='circle stateColor'>{props.point}</button>;
}

export default Button;

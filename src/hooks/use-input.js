import {useState} from 'react'

const useInput = (validateFn) => {
  const [enteredValue, setEneteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const isValueValid = validateFn(enteredValue);
  const hasError = isTouched && !isValueValid;

  const inputChangeHandler = (event) => {
    setEneteredValue(event.target.value);
  }

  const inputBlurHandler = () => {
    setIsTouched(true);
  }

  const reset = () => {
    setEneteredValue('');
    setIsTouched(false);
  }
  return {
    value: enteredValue,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    reset
  }
}

export default useInput;

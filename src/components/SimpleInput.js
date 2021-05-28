import useInput from '../hooks/use-input';

const SimpleInput = (props) => {

  const nameValidCheck = (value) => value.trim() !== '';
  const emailValidCheck = (value) => value.trim().includes('@');

  const {
    value: nameVal,
    hasError: isNameInValid,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: onBlurChangeHandler,
    reset: nameReset
  } = useInput(nameValidCheck);

  const {
    value: emailVal,
    hasError: isEmailInValid,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: onBlurEmailChangeHandler,
    reset: emailReset
  } = useInput(emailValidCheck);

  let formValid = false;


  if(isNameInValid && isEmailInValid) {
    formValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if(isNameInValid || isEmailInValid) {
      return;
    }
    nameReset();
    emailReset();
    console.log('forms submitted');
  }

  const formClassName = `${'form-control'} ${isNameInValid ? 'invalid' : ''}`;
  const formClassEmail = `${'form-control'} ${isEmailInValid ? 'invalid' : ''}`

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={formClassName}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' value={nameVal} onBlur={onBlurChangeHandler} onChange={nameChangeHandler}id='name' />
        {isNameInValid && <p className="error-text">The name shouldn't be empty</p>}
      </div>
      <div className={formClassEmail}>
        <label htmlFor='email'>Email</label>
        <input type='email' value={emailVal} onBlur={onBlurEmailChangeHandler} onChange={emailChangeHandler}id='name' />
        {isEmailInValid && <p className="error-text">The email is not valid</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

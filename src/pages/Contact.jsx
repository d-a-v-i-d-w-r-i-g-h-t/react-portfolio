import { useState } from 'react';

import { validateEmail } from '../utils/helpers';



function Contact() {

  // state variables for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameErrorMessage, setNameErrorMessage] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [messageErrorMessage, setMessageErrorMessage] = useState('');
  const [isSubmitDisabled, setSubmitDisabled] = useState(true);

  const handleInputChange = (e) => {
    // get the value and name of input that was changed
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // set the state of changed input
    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleOnBlur = (e) => {
    const missingInputMessage = 'Field is required, please provide input';

    if ( !validateEmail(email) ) {
      console.log('validateEmail(email)');
      console.log(email);
      console.log(validateEmail(email));
      setEmailErrorMessage('Email is invalid. Please re-enter.');
      // add class for red text styling
    } else if (!email) {
      setEmailErrorMessage(missingInputMessage);
    } else {
      setEmailErrorMessage('');
      // remove class for red text styling
    }
    
    if ( !name ) {
      setNameErrorMessage(missingInputMessage);
    } else {
      setNameErrorMessage('');
    }

    if ( !message ) {
      setMessageErrorMessage(missingInputMessage);
    } else {
      setMessageErrorMessage('');
    }

    //update the disabled state based on validation conditions
    setSubmitDisabled(!(name && email && message && validateEmail(email)));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Submit button clicked');
    // clear form
    setName('');
    setEmail('');
    setMessage('');
    // disable the submit button after submission
    setSubmitDisabled(true);
  }
  
  return (
    <div>
      <p>Please provide your contact information:</p>

      <form className="form my-5" onSubmit={handleFormSubmit}>

        {/* split name and email input fields across single row until small breakpoint, then stack */}
        <div className="row">

          <div className="col-sm-6">
            <div className="mb-3">
              <label htmlFor="nameInput" className="form-label">Name</label>
              <input
                value={name}
                name="name"
                onChange={handleInputChange}
                onBlur={handleOnBlur}
                type="text"
                className="form-control"
                id="nameInput"
                aria-describedby="nameHelp"
              />
              <div id="nameHelp" className="form-text input-error">
                {nameErrorMessage}
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="mb-3">
              <label htmlFor="emailInput" className="form-label">Email address</label>
              <input
                value={email}
                name="email"
                onChange={handleInputChange}
                onBlur={handleOnBlur}
                type="email"
                className="form-control"
                id="emailInput"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text input-error">
                {emailErrorMessage}
              </div>
            </div>
          </div>

        </div>

        <div className="mb-3">
          <label htmlFor="messageInput" className="form-label">Message</label>
          <textarea
            value={message}
            name="message"
            onChange={handleInputChange}
            onBlur={handleOnBlur}
            className="form-control"
            id="messageInput"
            aria-describedby="messageHelp"
            rows={4}
          ></textarea>
          <div id="messageHelp" className="form-text input-error">
            {messageErrorMessage}
          </div>
        </div>
        
        <button type="submit" className="btn btn-primary" disabled={isSubmitDisabled} >
          Submit
        </button>
      </form>

      <p>Or contact me directly at <a className="link" href="mailto:d4v1dwr1gh7@gmail.com" className="link">d4v1dwr1gh7@gmail.com</a></p>
    </div>
  );
}

export default Contact;
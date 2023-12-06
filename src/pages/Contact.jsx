// useState to track multiple state variables
import { useState } from 'react';

// import helper function to validate email addresses
import { validateEmail } from '../utils/helpers';

function Contact() {

  // state variables for form fields, error messages, and disabled status of Submit button
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameErrorMessage, setNameErrorMessage] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [messageErrorMessage, setMessageErrorMessage] = useState('');
  const [isSubmitDisabled, setSubmitDisabled] = useState(true);

  // handle input change events (typing in the input fields)
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

  // handle blur events (input field losing focus by clicking or tabbing out, etc.)
  const handleOnBlur = (e) => {
    const { target } = e;
    const inputType = target.name;

    const missingInputMessage = 'Field is required, please provide input';

    if ( inputType === 'email' ) {

      // check for empty email input field
      if ( !email ) {
        setEmailErrorMessage(missingInputMessage);

      // if there is an email input, validate it
      } else if ( !validateEmail(email) ) {
        setEmailErrorMessage('Email is invalid. Please re-enter.');

      // if no issues remove email error message
      } else {
        setEmailErrorMessage('');
      }

    } else if ( inputType === 'name' ) {
      
      // check for empty name field
      if ( !name ) {
      setNameErrorMessage(missingInputMessage);

      // if not empty remove name error message
      } else {
        setNameErrorMessage('');
      }

    } else { // input type is 'message'

        // check for empty message field
      if ( !message ) {
        setMessageErrorMessage(missingInputMessage);

      // if not empty remove message error message
      } else {
        setMessageErrorMessage('');
      }

    }

    // update the disabled state based on validation conditions
    // submit button will be enabled if all three fields have input and the email address passes validation
    setSubmitDisabled(!(name && email && message && validateEmail(email)));
  };

  // handle form submit button click
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // no functionality yet, just log the click for now...
    console.log('Submit button clicked');

    // clear the form
    setName('');
    setEmail('');
    setMessage('');

    // disable the submit button after submission, default state is disabled
    setSubmitDisabled(true);
  }
  
  // finally render the form
  return (
    <div>
      <p>Please provide your contact information:</p>

      {/* submit button click event listener */}
      <form className="form my-5" onSubmit={handleFormSubmit}>

        {/* split name and email input fields across single row until small breakpoint, then stack */}
        <div className="row">

          <div className="col-sm-6">
            <div className="mb-3">
              <label htmlFor="nameInput" className="form-label">Name</label>
              {/* name value */}
              <input
                value={name}
                name="name"
                // input change event listener
                onChange={handleInputChange}
                // on blur event listener
                onBlur={handleOnBlur}
                type="text"
                className="form-control"
                id="nameInput"
                aria-describedby="nameHelp"
              />
              {/* error message if name is missing */}
              <div id="nameHelp" className="form-text input-error">
                {nameErrorMessage} 
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="mb-3">
              <label htmlFor="emailInput" className="form-label">Email address</label>
              {/* email value */}
              <input
                value={email}
                name="email"
                // input change event listener
                onChange={handleInputChange}
                // on blur event listener
                onBlur={handleOnBlur}
                type="email"
                className="form-control"
                id="emailInput"
                aria-describedby="emailHelp"
              />
              {/* error message if email is missing or invalid */}
              <div id="emailHelp" className="form-text input-error">
                {emailErrorMessage}
              </div>
            </div>
          </div>

        </div>

        <div className="mb-3">
          <label htmlFor="messageInput" className="form-label">Message</label>
          {/* message value */}
          <textarea
            value={message}
            name="message"
            // input change event listener
            onChange={handleInputChange}
            // on blur event listener
            onBlur={handleOnBlur}
            className="form-control"
            id="messageInput"
            aria-describedby="messageHelp"
            // number of rows for textarea
            rows={4}
          ></textarea>
          {/* error message if message is missing */}
          <div id="messageHelp" className="form-text input-error">
            {messageErrorMessage}
          </div>
        </div>
        {/* submit button with modifiable disabled state (default is disabled) */}
        <button type="submit" className="btn btn-primary" disabled={isSubmitDisabled} >
          Submit
        </button>
      </form>
      
      {/* email link */}
      <p>Or contact me directly at <a href="mailto:davidswright73@gmail.com" className="link">davidswright73@gmail.com</a></p>
    </div>
  );
}

export default Contact;
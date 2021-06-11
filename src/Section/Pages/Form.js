import React from 'react'

const initialFormData = Object.freeze({
    username: "",
    password: "",
    mobile:""
    
  });
const FooBarForm = () => {
    const [formData, updateFormData] = React.useState(initialFormData);
  
    const handleChange = (e) => {
      updateFormData({
        ...formData,
  
        // Trimming any whitespace
        [e.target.name]: e.target.value.trim()
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault()
      console.log(formData);
      // ... submit to API or something
    };
  
    return (
      <>
        <label>
          Username
          <input name="username" onChange={handleChange} />
        </label>
        <br />
        <label>
          Password
          <input name="password" onChange={handleChange} />
        </label>
        <label>
          Mobile
          <input name="mobile" onChange={handleChange} />
        </label>
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </>
    );
  };

  export default FooBarForm;
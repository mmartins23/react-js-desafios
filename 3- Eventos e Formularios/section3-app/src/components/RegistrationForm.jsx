import { useState } from "react";

const RegistrationForm = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <p>Name:</p>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <p>Email:</p>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <p>Password:</p>
        <input
          type="password"
          name="password"
          value={values.passwords}
          onChange={handleChange}
        />
      </div>

      <button>Send</button>
    </form>
  );
};

export default RegistrationForm;
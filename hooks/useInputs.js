import React, { useState } from 'react';

const useInputs = (initialValues, callback) => {
  // create state to hold the form values, using the initial values that are passed in
  const [values, setValues] = useState(initialValues);

  // whenever a field is updated, this is called and the state is updated, too
  const handleChange = (e) => {
    e.persist();
    // if the target name matches anything that already exists in values, it will update the value, otherwise it will get appended to the array of objects
    setValues((values) => {
      return { ...values, [e.target.name]: e.target.value };
    });
  };

  // eventually we should move handleSubmit in here, when we use an API for the database

  return { values, handleChange };
};

export default useInputs;

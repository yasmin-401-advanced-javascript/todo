import { useState } from 'react';
// cb => callback => function
const useForm = (cb) => {
  const [item, setItem] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset()
    cb(item);
  };
  const handleInputChange = (event) => {
    setItem({ ...item, [event.target.name]: event.target.value });
  };
  return [item, handleInputChange, handleSubmit];
};

export default useForm;
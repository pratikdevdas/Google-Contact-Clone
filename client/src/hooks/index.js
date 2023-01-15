import { useState } from "react";

// although we are using forms for
export const useField = (type, name) => {
  const [value, setValue] = useState("");

  const onChange = ({ target }) => {
    setValue(target.value);
  };

  return {
    name,
    value,
    type,
    onChange,
  };
};

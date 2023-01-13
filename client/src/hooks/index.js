import { useState } from "react";

export const useField = (type) => {
  const [value, setValue] = useState("");

  const onChange = ({ target }) => {
    setValue(target.value);
  };

  return {
    value,
    type,
    onChange,
  };
};

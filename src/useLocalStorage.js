import {useState, useEffect} from "react";

export const useLocalStorage = (keyName, initialValue) => {
  const getInitialState = () => {
    const localStorageState = localStorage.getItem(keyName);

    return localStorageState === null
      ? initialValue
      : JSON.parse(localStorageState);
  };

  const [state, setState] = useState(getInitialState);

  useEffect(() => {
    localStorage.setItem(keyName, JSON.stringify(state));
  }, [state]);

  return [state, setState];
};

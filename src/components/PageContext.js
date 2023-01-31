import { createContext, useState } from "react";

const PageContext = createContext();

export function PageProvider({ children }) {
  const [name, setName] = useState([]);

  const changeName = (name) => {
    setName((prevState) => [...prevState, { name }]);
  };
  return (
    <PageContext.Provider value={{ name, changeName }}>
      {children}{" "}
    </PageContext.Provider>
  );
}

export default PageContext;

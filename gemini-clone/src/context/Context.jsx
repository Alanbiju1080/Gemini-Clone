import { createContext } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {

  const onSent = async (prompt) => {
    const result = await runChat(prompt);
    console.log("Gemini response:", result);
  };

  onSent("Who is the Father of the nation of India");

  const contextValue = {
    onSent
  };

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;

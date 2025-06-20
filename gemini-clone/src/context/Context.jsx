import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {

  const [input,setInput] = useState("")
  const [recentPrompt,setRecentPrompt] = useState("")
  const [prevPrompts,setPrevPrompts] = useState([])
  const [ShowResults,setShowResults] = useState(false)
  const [loading,setLoading] = useState(false)
  const [resultData,setResultData] = useState("")

  const delayPara = (index,nextWord)=> {
    setTimeout(function (){
      setResultData(prev=>prev+nextWord);
    }, 75*index)
  }

  const onSent = async (prompt) => {

    setResultData("")
    setLoading(true)
    setShowResults(true)
    let response
    if(prompt !== undefined){
      response = await runChat(prompt)
      setRecentPrompt(prompt)
    }
    else{
      setPrevPrompts(prev=>[...prev,input])
      setRecentPrompt(input)
      response =await runChat(input)
    }
    setRecentPrompt(input)
    setPrevPrompts(prev=>[...prev,input])
    
    const result = await runChat(input);
    console.log("Gemini response:", result);
    let responseArray = result.split("**")
    let newResponse = "";
    for(let i = 0; i < responseArray.length; i++){
        if(i===0 || i%2 !== 1){
            newResponse += responseArray[i] 
        }
        else{
            newResponse += "<b>" + responseArray[i] + "</b>"
        }
    }
    let newResponse2 = newResponse.split("*").join("</br>")

    let newResponseArray = newResponse2.split(" ")
    for(let i =0; i < newResponseArray.length-1; i++){
        const nextWord = newResponseArray[i]
        delayPara(i,nextWord+" ")
    }
    setLoading(false)
    setInput("")
  };

  // onSent("Who is the Father of the nation of India");

  const contextValue = {
    onSent,
    prevPrompts,
    setPrevPrompts,
    setRecentPrompt,
    recentPrompt,
    ShowResults,
    loading,
    resultData,
    input,
    setInput
  };

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;

"use client"
import fetchLink from "@/Functions/fetchLink";
import axios from "axios";
import { createContext, useContext, useState } from "react";

const DataContext = createContext(undefined);

export const DataProvider = ({ children }) => {
  const [projects, setProject]= useState(undefined)
  const [snippets, setSnippets] = useState(undefined)
  function deleteSnippetC(id, idx){
    axios({url:fetchLink(`snippet/delete/${id}`),method:'DELETE'}).then(() => {
    const snips = [...snippets]
    const finalSnips = snips.filter((elt, indx) => indx !== idx)
    setSnippets(finalSnips)
    })
    .catch(err => {console.error(err); console.log('err')})
  }
  return (
    <DataContext.Provider
      value={{
        projects,
        snippets,
        loadSnippet:(value) => setSnippets(value),
        loadProject:(value) => setProject(value),
        addSnippet:(value) => setSnippets([...snippets, value]),
        addProject:(value) => setProject([...projects, value]),
        deleteSnippet:deleteSnippetC,
        deleteProject: (value) => setProject(value)
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData= () => useContext(DataContext)
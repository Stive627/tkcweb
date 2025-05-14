"use client"
import { createContext, useContext, useState } from "react";

const DataContext = createContext(undefined);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({snippets:undefined, projects:undefined});
  const [projects, setProject]= useState(undefined)
  const [snippets, setSnippets] = useState(undefined)

  return (
    <DataContext.Provider
      value={{
        projects,
        snippets,
        loadSnippet:(value) => setSnippets(value),
        loadProject:(value) => setProject(value),
        addSnippet:(value) => setSnippets([...snippets, value]),
        addProject:(value) => setProject([...projects, value]),
        deleteSnippet:(value) => setSnippets(value),
        deleteProject: (value) => setProject(value)
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData= () => useContext(DataContext)
import Project from "../Projects/Project";
import SnippetsTips from "../SnippetsTips/SnippetsTips";

export default function Content({section, snippets, setSnippets, projects, setProjects}){
    switch(section){
        case 1:
            return <Project projects={projects} setProjects={setProjects}/>
        default:
            return <SnippetsTips setSnippets={setSnippets} snippets={snippets}/>
    }
}
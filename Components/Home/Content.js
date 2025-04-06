import Project from "../Projects/Project";
import SnippetsTips from "../SnippetsTips/SnippetsTips";

export default function Content({section, snippets, setSnippets}){
    switch(section){
        case 1:
            return <Project/>
        default:
            return <SnippetsTips setSnippets={setSnippets} snippets={snippets}/>
    }
}
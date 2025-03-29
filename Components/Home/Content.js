import Project from "../Projects/Project";
import SnippetsTips from "../SnippetsTips/SnippetsTips";

export default function Content({section}){
    switch(section){
        case 1:
            return <Project/>
        default:
            return <SnippetsTips/>
    }
}
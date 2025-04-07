export default function getImgName(link){
    const lastindx = link.lastIndexOf('/') 
    return /[^.]*/.exec(link.slice(lastindx+1))[0]
}
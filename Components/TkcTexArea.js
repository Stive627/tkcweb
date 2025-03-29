export default function TkcTextArea({value, setvalue,}){
    return(
        <textarea rows={4} cols={50} className=" outline-blue-600" value={value} onChange={(e) => setvalue(e.target.value)}></textarea>
    )
}
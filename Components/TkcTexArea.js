export default function TkcTextArea({value, setvalue, placeholder}){
    return(
        <textarea style={{borderColor:'rgba(0, 0, 0, 0.3)', resize:'none'}} placeholder={placeholder} rows={4} cols={50} className=" outline-blue-600 border rounded-md p-2" value={value} onChange={(e) => setvalue(e.target.value)}></textarea>
    )
}
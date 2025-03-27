export default function TkcInput({value, placeholder, handleChange, className}){
    return(
        <input value={value} onChange={(e) => handleChange(e.target.value)} className={`outline-blue-500 border px-3 py-2 rounded-md ${className}`} style={{borderColor:'rgba(0, 0, 0, 0.58)'}} placeholder={placeholder}/>
    )
}
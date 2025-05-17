export default function TkcInput({value, placeholder, handleChange, className, borderColor=undefined, name='', type='', autocomplete=''}){
    return(
        <input value={value} name={name} type={type} autoComplete={autocomplete} onChange={(e) => handleChange(e.target.value)} className={`outline-blue-500 border  px-3 py-2 rounded-md ${className}`} style={{borderColor:borderColor? borderColor : 'rgba(0, 0, 0, 0.58)'}} placeholder={placeholder}/>
    )
}
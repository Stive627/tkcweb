export default function validUsername(email){
    return /@(uiux|webdev|mobdev|ai)$/.test(email)
}
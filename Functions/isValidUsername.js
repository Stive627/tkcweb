export default function isValidUsername(email){
    return /@(uiux|webdev|mobdev|ai)$/.test(email)
}
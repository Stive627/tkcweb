export default function validatePassword(password){
    return password.length > 5 && /[A-Z]/.test(password)
}
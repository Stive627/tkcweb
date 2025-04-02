export default function isValidatePassword(password){
    return password.length > 5 && /[A-Z]/.test(password)
}
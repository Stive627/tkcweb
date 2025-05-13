export default function getDepartment(username){
    const department = /@[^ ]*/.exec(username)
    if(department){
        return department[0].slice(1)
    }
    return undefined
}
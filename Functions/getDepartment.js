export default function getDepartment(username){
    return /@[^ ]*/.exec(username)[0]
}
import api from "../axios.js"

function authRepository(){
    return api.get("/auth/check")
        .then(result => result.data)
        .catch(error =>{
            console.log(error)
            return null
        })
}
export default authRepository
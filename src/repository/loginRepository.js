import api from "../axios.js";

function loginRepository(object) {
    return api.post("/login", object)
        .then(loginResponse => {
            return api.get("/auth/getId")
                .then(idResponse => {
                    return loginResponse.data;
                });
        });
}
export default loginRepository;

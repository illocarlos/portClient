import axios from 'axios'

class UsersService {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}`
        })
        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })

    }


    getUserDetails(user_id) {
        return this.api.get(`/user/${user_id}`);
    }

    editUser(user_id, userData) {
        return this.api.post(`/user/edit/${user_id}`, { userData })
    }


    addUserToWork(idWork, idUser) {
        return this.api.post("/user/addUserToWork", { idWork, idUser })
    }

    removeUserToWork(idWork, idUser) {
        return this.api.post("/user/removeUserToWork", { idWork, idUser })
    }


}

const usersService = new UsersService()

export default usersService
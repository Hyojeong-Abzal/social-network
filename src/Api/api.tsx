import axios from "axios";

const instance = axios.create( {
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "5c3d7df5-b9a4-40af-905c-224c75d0849c"
    }
})



export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 1) {
        return  instance.get (`users?page=${currentPage}&count=${pageSize}`)
        .then(responce => responce.data);
    },
    getLogin () {
        return instance.get ( 'auth/me')
        .then( responce => responce.data)
    },
    unFollow (id = 1) {
        return instance.delete (`follow/${id}`)
        .then (response => response.data)
    },
    
}

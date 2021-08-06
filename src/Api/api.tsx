import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "e63f5bfc-9e87-4bfe-bfb0-c2fdad6af5c9"
    }
})

//process.env.REACT_APP_API_KEY

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(responce => responce.data);
    },
    authUser() {
        return instance.get('auth/me')
            .then(responce => responce.data)
    },
    unFollow(userId: number) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`, {})
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post(`auth/login`, { email, password, rememberMe })
    },
    logout() {
        return instance.delete(`auth/login`)
    }

}

export const profileAPI = {
    getProfile(userId: number | string) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },
    getStatus(userId: number | string) {
        return instance.get(`profile/status/${userId}`)
            .then(res => res.data)
    },
    updateStatus(status: string) {
        return instance.put('profile/status', { status })
    },
    savePhoto(photo: any) {
        const formData = new FormData();
        formData.append("image", photo)
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}


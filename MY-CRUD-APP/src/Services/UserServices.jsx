import axios from 'axios'

const USER_BASE_REST_API_URL = 'https://reqres.in/api/users';

class UserServices {

    getAllUsers() {
        return axios.get(USER_BASE_REST_API_URL)
    }

    createUser(users) {
        return axios.post(USER_BASE_REST_API_URL, users)
    }

    getUserById(usersId) {
        return axios.get(USER_BASE_REST_API_URL + '/' + usersId);
    }

    updateUser(usersId, users) {
        return axios.put(USER_BASE_REST_API_URL + '/' + usersId, users);
    }

    deleteUser(usersId) {
        return axios.delete(USER_BASE_REST_API_URL + '/' + usersId);
    }
}

export default new UserServices();
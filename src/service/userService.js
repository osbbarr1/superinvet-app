import axios from "axios";

export class UserServices{
    baseUrl= "http://localhost:8080/api/v1/usuario/all/v1";

    getAll(){
        return axios.get(this.baseUrl+ 'all').then(res => res.data);
    }
}
import axios from "axios";

export class UserServices{
    baseUrl= "http://localhost:8080";

    getAll(){
        return axios.get(this.baseUrl+ 'all').then(res => res.data);
    }
}
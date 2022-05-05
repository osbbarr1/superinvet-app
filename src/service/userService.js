import axios from "axios";

export class UserServices{
    baseUrl= "http://localhost:8080/api/v1/usuario/";

    usuarioAll(){
        return axios.get(this.baseUrl+ 'all/v1').then(res => res.data);
    }
}
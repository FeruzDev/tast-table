import axios from "axios";
import {API_PATH, TOKEN_NAME} from "../../tools/constants";
import {toast} from "react-toastify";
import {LOGIN} from "../actionTypes/authType";


export function loginUser(data, history) {
   return function (dispatch){
       dispatch({
           type: LOGIN
       });




       let data2 = new FormData();
       data2.append("_username", data._username);
       data2.append("_subdomain", data._subdomain);
       data2.append("_password", data._password);
       axios.post("https://" + (data._subdomain) + ".ox-sys.com/" + "security/auth_check", data2)
           .then((res) => {
               console.log(res)
               localStorage.setItem(TOKEN_NAME,  res.data.token);
               dispatch({type: LOGIN});
               history.push("/admin");
           })
           .catch((error) => {
               console.log(error);
               toast.error("Xatolik!");
               dispatch({type: LOGIN});
           })
   }

}
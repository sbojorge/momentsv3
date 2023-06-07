import axios from "axios";

axios.defaults.baseURL = "https://localdrfapi.herokuapp.com/";
axios.defaults.headers.post["Content-type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

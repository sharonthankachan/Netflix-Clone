import { baseURL} from "./URL";
import axios from "axios";

const instance = axios.create({
    baseURL: baseURL,
  });

  export default instance
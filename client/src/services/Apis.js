import { commonRequest } from "./ApiCall";
import { BACKEND_URL } from "./helper";

export const registerfunction = async(data)=>{
    return await commonRequest("POST",`${BACKEND_URL}/user/register`,data)
}
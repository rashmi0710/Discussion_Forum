import { commonRequest } from "./ApiCall";
import { BACKEND_URL } from "./helper";

export const RegisterFunction = async(data)=>{
    return await commonRequest("POST",`${BACKEND_URL}/user/register`,data)
}

export const sentOtpFunction = async(data)=>{
    return await commonRequest("POST",`${BACKEND_URL}/user/sendotp`,data)
}
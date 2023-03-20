import { setUserData } from "../util";
import { post } from "./api.js";

export async function login(email, password) {
    const { _id, email: resultEmail, accessToken} = await post('users/login', {email, password});

    setUserData({
        _id, 
        email: resultEmail, 
        accessToken
    })
}
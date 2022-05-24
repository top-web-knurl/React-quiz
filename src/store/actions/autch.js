import axios from "axios";
import { AUTCH_LOGOUT, AUTCH_SUCCESS } from "./actionTypes";

export function autch(email, password, isLogin) {
    return async dispatch => {
        const authData = {
            email, password, returnSecureToken: true
        }

        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC5ntFtzrgbJEKHlNg3WIcuKdgjLFrYmeg';
        if (isLogin) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC5ntFtzrgbJEKHlNg3WIcuKdgjLFrYmeg';
        }
        try {
            const response = await axios.post(url, authData);
            const { idToken, localId, expiresIn } = response.data;
            const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
            console.log(expirationDate);
            localStorage.setItem('token', idToken);//токены который мы получаем с бд
            localStorage.setItem('userId', localId);
            localStorage.setItem('expirationDate', expirationDate);// время хранения токенов для авторизации
            dispatch(auchSuccess(idToken))
            dispatch(autoLogout(idToken))
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }
}

export function auchSuccess(token) {
    return {
        type: AUTCH_SUCCESS, token
    }
}

export function autoLogout(time) {
    return async dispatch => {
        setTimeout(logout(), time * 1000)
    }
}

export function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('expirationDate');
    return {
        type: AUTCH_LOGOUT
    }
}
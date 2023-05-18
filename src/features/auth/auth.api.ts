import { instance } from "common/api/common.api";
import {useParams} from "react-router-dom";



export const authApi = {

    register: (arg:ArgRegisterType) => {
        return instance.post<RegisterResponseType>('auth/register', arg)
    },
	login: (arg:ArgLoginType) => {
		return instance.post<any>('auth/login',arg)
	},
    forgotPass: (arg:ArgForgotPass) => {
		// TODO
		return instance.post<any>('auth/forgot',arg)
	},
    setNewPass: (arg:ArgSetNewPass) => {
		// TODO
		return instance.post<ArgSetNewPassResponseType>('auth/set-new-password',arg)
	}
}

//types
export type ArgSetNewPassResponseType  = {
	info: string
	error: string
}
export type ArgSetNewPass  = {
	password: string
	resetPasswordToken?: string
}

export type ArgForgotPass  = {
    email: string
}
export type ArgLoginType  = {
    email: string,
    password: string,
	rememberMe: boolean
}
export type ArgRegisterType = Omit<ArgLoginType, 'rememberMe'>

export type RegisterResponseType = {
	addedUser: ProfileType;
}
 export type ProfileType = {
	_id: string;
	email: string;
	rememberMe: boolean;
	isAdmin: boolean;
	name: string;
	verified: boolean;
	publicCardPacksCount: number;
	created: string;
	updated: string;
	__v: number;
}

export type LoginResponseType = ProfileType & {
	token: string;
	tokenDeathTime: number;
}
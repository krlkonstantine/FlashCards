import { instance } from "common/api/common.api";



export const authApi = {
    register: (arg:ArgRegisterType) => {
        return instance.post<RegisterResponseType>('auth/register', arg)
    },
	login: (arg:ArgLoginType) => {
		// TODO
		return instance.post<any>('auth/login',arg)
	}
}

//types
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
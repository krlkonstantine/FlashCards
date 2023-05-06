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
export type ArgRegisterType = {
    email: string,
    password: string
}
export type ArgLoginType = ArgRegisterType & {
	rememberMe: boolean
}

export type RegisterResponseType = {
	addedUser: UserType;
}
 type UserType = {
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

export type LoginResponseType = UserType & {
	token: string;
	tokenDeathTime: number;
}
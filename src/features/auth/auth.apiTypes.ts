



//types

export type ArgChangeUserNameResponseType  = {
	updatedUser: ProfileType
	error?: string
}
export type ArgChangeUserName  = {
	name?: string,
	avatar?: string
}

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
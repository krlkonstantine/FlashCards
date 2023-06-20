import { instance } from "common/api/common.api";
import {
	ArgChangeUserName,
	ArgChangeUserNameResponseType, ArgForgotPass, ArgLoginType, ArgRegisterType, ArgSetNewPass,
	ArgSetNewPassResponseType,
	ProfileType, RegisterResponseType
} from "features/auth/auth.apiTypes";



export const authApi = {

    register: (arg:ArgRegisterType) => {
        return instance.post<RegisterResponseType>('auth/register', arg)
    },
	login: (arg:ArgLoginType) => {
		return instance.post<any>('auth/login',arg)
	},
	me: (arg: {}) => {
		return instance.post<any>('auth/login',arg)
	},
    forgotPass: (arg:ArgForgotPass) => {
		// TODO
		return instance.post<any>('auth/forgot',arg)
	},
    setNewPass: (arg:ArgSetNewPass) => {
		// TODO
		return instance.post<ArgSetNewPassResponseType>('auth/set-new-password',arg)
	},
	logOut: () => {
		// TODO
		return instance.delete<any>('auth/me')
	},
	changeUserName: (arg:ArgChangeUserName) => {
		// TODO
		return instance.put<ArgChangeUserNameResponseType>('auth/me',arg)
	}
}


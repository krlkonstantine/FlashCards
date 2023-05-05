import { instance } from "common/api/common.api";



export const authApi = {
    register: (payload:any) => {
        return instance.post('auth/register', payload)
    }
}
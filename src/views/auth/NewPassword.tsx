import NewPasswordToken from '@/components/auth/NewPasswordToken';
import NewPasswordForm from '@/components/auth/NewPasswordForm';
import { useState } from 'react';
import { confirmToken } from '@/types/index';

export default function NewPassword() {
    const [token, setToken] = useState<confirmToken["token"]>("")

    const [isValidToken, setIsValidToken] = useState(false)

    return (
        <>
            <h1 className="text-4xl font-black text-white">Restablecer Password</h1>
            <p className="text-lg font-light text-white mt-5">
                Ingresa el codigo que recibistes {''}
                <span className=" text-fuchsia-500 font-bold"> por email</span>
            </p>

            {!isValidToken ?
                <NewPasswordToken token={token} setToken={setToken} setIsValidToken={setIsValidToken} /> :
                <NewPasswordForm token={token} />}
        </>

    )
}

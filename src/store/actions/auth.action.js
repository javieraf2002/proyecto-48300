import { SIGN_UP_URL } from '../../constants/database/'
export const SIGN_UP = 'SIGN_UP'

export const signUp = (email, password) => {
    return async dispatch => {
        try {
            dispatch({
                type: 'SIGN_UP_START',
            })
            const response = await fetch(SIGN_UP_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password,
                    returnSecureToken: true
                }),
            });

            if (!response.ok) {
                const errorRes = await response.json();
                const errorId = errorRes.error.message;
                let message = 'No se pudo registrar';
                console.log(errorId);
                switch (errorId) {
                    case 'EMAIL_EXISTS':
                        message = 'El email ya existe';
                        break;
                    case 'INVALID_EMAIL':
                        message = 'Email invalido';
                        break;
                    case 'WEAK_PASSWORD':
                        message = 'La contraseña debe tener al menos 6 caracteres';
                        break;
                    default:
                        break;
                }

                throw new Error(message);
            }

            const data = await response.json();
            console.log(data);

            dispatch({
                type: SIGN_UP,
                token: data.idToken,
                userId: data.localId,
            })
        } catch (error) {
            dispatch({
                type: 'SIGN_UP_FAIL',
            })
            alert(error);
        }
    }
} 
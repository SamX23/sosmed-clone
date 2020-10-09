import { Button } from '@material-ui/core'
import React from 'react'
import { auth, provider } from '../firebase'
import { useStateValue } from '../components/StateProvider'
import { actionTypes } from '../components/reducer'

function Login() {
    const [state, dispatch] = useStateValue()
    
    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then(result => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/600px-Facebook_f_logo_%282019%29.svg.png" alt="facebook"/>
                <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt="facebook"/>
            </div>
            <Button type='submit' onClick={signIn} >Sign In Using Google</Button>
        </div>
    )
}

export default Login

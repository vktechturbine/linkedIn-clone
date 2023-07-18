import React, { useState } from 'react';
import { auth } from './Firebase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import './Login.css';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
function Login() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const loginToApp = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth,email,password).then(userAuth => {
            dispatch(login({
                email:userAuth.user.email,
                uid:userAuth.user.uid,
                displayName:userAuth.user.displayName,
                profileUrl:userAuth.user.profileURL

            }))
        }).catch(error => alert(error.message));
    };
    const register = () => {
        if (!name) {
            return alert("please enter Full Name");
        }
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            updateProfile(userCredential.user, {
                displayName: name,
                photoURL: profilePic
            }).then(() => {
                
                dispatch(login({
                    email: userCredential.user.email,
                    uid: userCredential.user.uid,
                    displayName: name,
                    photoUrl: profilePic
                }))
            })
        }).catch(error =>  alert(error.message));
    }
    return (
        <div className='login'>
            <img src='https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg' />
            <form>
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder='Full Name (if required registering)' type='text' />
                <input value={profilePic} onChange={(e) => setProfilePic(e.target.value)} placeholder='Profile Pic Url (Optional)' type='text' />
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' type='email' />
                <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' type='password' />
                <button onClick={loginToApp}>Sign In</button>
                <p>Not a Member ? <span className='login__register' onClick={register}>Register Now</span></p>
            </form>
        </div>
    );
}

export default Login;

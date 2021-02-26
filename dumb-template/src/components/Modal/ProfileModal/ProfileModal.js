import React, {useEffect} from 'react';
import ReactModal from 'react-modal';

import './profileModal.scss'
import {LogoutButton} from "../../LogoutButton/AuthButton";
import {useAuth0} from "@auth0/auth0-react";

export const ProfileModal = ({isOpen, close}) => {

    const {user, isAuthenticated, isLoading} = useAuth0();

    const content = () => {
        return (
            <div>
                <img src={user.picture} alt={user.name}/>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
            </div>
        )
    }

    const loadingContent = (
        <div>
            <img src="https://i.imgflip.com/2fw0fb.jpg" alt="placeholder loading image"/>
            <h2>Loading...</h2>
            <p>Loading...</p>
        </div>
    )

    if (!isAuthenticated || !user) {
        return (
            <ReactModal className="loginModal" isOpen={isOpen} onRequestClose={close} contentLabel="Login Modal">
                <button className="closeButton" onClick={close}>X</button>
                <div className="loginModalContent">
                    <h2>You are not logged in!</h2>
                    <div>:(</div>
                </div>
            </ReactModal>
        )
    }

    return (
        <ReactModal className="loginModal" isOpen={isOpen} onRequestClose={close} contentLabel="Login Modal">
            <button className="closeButton" onClick={close}>X</button>
            <div className="loginModalContent">
                <h2>PROFILE INFO</h2>
                <div>AAAAAAAAAAAAAAAAAAAAA memes!</div>
                {isLoading ? loadingContent : content}
                <LogoutButton onLogout={close}/>
            </div>
        </ReactModal>
    )
}
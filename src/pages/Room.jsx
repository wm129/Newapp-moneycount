import React from 'react';
import {auth} from "../config/firebase"

import List from '../components/List';
import Form from '../components/Form';
import {Button} from "@material-ui/core";

import '../App.css';
const Room = () => {
const signout = () => {
    auth.signOut();
};

return (
    <>
    <div className="container">
        <div className="app-wrapper">
        <h1>Room</h1>
            <List />
            <Form />
        <Button onClick={signout} variant='contained'>Logout</Button>
        </div>
    </div>
    </>
    );
};
export default Room;
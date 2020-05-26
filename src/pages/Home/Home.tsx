import React from 'react';
import io from 'socket.io-client';

import NavBar from '../../components/NavBar/NavBar';

export default function() {
    io();
    return (
        <>
            <NavBar></NavBar>
            <h3>Jarts</h3>
        </>
    )
}
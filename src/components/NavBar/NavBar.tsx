import React from 'react';
import styles from './NavBar.module.css';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const NewGameModal = withReactContent(Swal);

const showModal = () => NewGameModal.fire({
    title: 'Testing',
    html: '<b>Content</b>',
    showCancelButton: true
})

export default function() {
    return (
        <div className={styles.nav}>
            <h1>It's Jarts</h1>
            <div className={styles.controls}>
                <button className={styles.button} onClick={showModal}>Start Game</button>
            </div>
        </div>
    )
}
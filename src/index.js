import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Modal from './lib/Modal';

function HandleModal() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <h2>A full-width input field</h2>

            <form>
                <label for="fname">First Name</label>
                <input type="text" id="fname" name="fname"/>
                <label for="fname">First Name</label>
                <input type="text" id="fname" name="fname"/>
                <label for="fname">First Name</label>
                <input type="text" id="fname" name="fname"/>
                <label for="fname">First Name</label>
                <input type="text" id="fname" name="fname"/>
                <label for="fname">First Name</label>
                <input type="text" id="fname" name="fname"/>
                <label for="fname">First Name</label>
                <input type="text" id="fname" name="fname"/>
                <label for="fname">First Name</label>
                <input type="text" id="fname" name="fname"/>
                <label for="fname">First Name</label>
                <input type="text" id="fname" name="fname"/>
            </form>
            <button onClick={() => setIsOpen(true)}>Ouvrir Modal</button>
            {isOpen && (
                <Modal
                    title='Creation employee'
                    content='Bo erikher rtozerjt zer tzer tze rt ert zert'
                    handleModal={setIsOpen}
                />
            )}
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <HandleModal />
    </React.StrictMode>
);

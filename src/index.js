import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Modal from './lib/Modal';

function HandleModal() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
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

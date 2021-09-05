import React from 'react'

const Modal = ({ handleClose, show, jokes }) => {
    const showHideClassName = show ? "d-block fade-in" : "d-none";
    const handleAlert = () => {
        alert("No");
        window.location.href = 'https://youtu.be/dQw4w9WgXcQ';
    };
    return (
        <div className={`${showHideClassName} modal`}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{`${jokes.error === false ? 'Here some joke for you' : 'Something went wrong...'}`}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClose} />
                    </div>
                    <div className="modal-body">
                        {jokes.error === false ? jokes.type === 'single' ? <><p>{jokes.joke}</p></> : <><p>{jokes.setup}</p>
                            <p>{jokes.delivery}</p></> : <><p>{jokes.error}</p></>}
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-primary" onClick={handleAlert}>I want more jokes!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal

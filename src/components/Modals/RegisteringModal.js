import React from "react";

const RegisteringModal = ({open, onClose}) => {
    if (!open) return null;
    return (
        <div className='overlay'>
            <div className='modalContainer'>
            <div className='modalRight'>
                <p onClick={onClose} className="closeBtn">X</p>
            </div>
            <form className="modalForm">
                    <label>
                       Username
                       <input type='text' username="username" />
                    </label>
                    <br/>
                    <label>
                       Password
                       <input type="text" password="password" />
                    </label>
                    <br/>
                    <label>
                       Confirm Password
                    <input type="text" />
                    <br/>
                    <button className="primaryBtn">Create Account</button>
                    </label>
            </form>
            </div>
        </div>
    )
};

export default RegisteringModal
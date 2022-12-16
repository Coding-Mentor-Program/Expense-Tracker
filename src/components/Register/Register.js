//Signup, Register page: username, email, password inputs and signup button
import React from "react";

const RegisteringModal = ({open, onClose}) => {
    if (!open) return null;
    return (
        <div className='overlay'>
            <div className='modalContainer'>
            <div className='modalLeft'>
                <p onClick={onClose} className="closeBtn">X</p>
            </div>
            <form className="modalForm">
                    <label>
                       Email
                       <input type='text' email="email" />
                    </label>
                    <br/>
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
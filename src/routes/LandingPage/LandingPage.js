import React, { useState } from 'react';
import RegisteringModal from '../../components/Modals/RegisteringModal';

export default function LandingPage () {
    //username/password inputs, login and signup buttons
        const [openModal, setOpenModal] = useState(false)

        return (
            <main className="LandingPage-main">
                <form>
                    <label>
                    Username:
                    <input type="text" username="username" />
                    </label>
                    <br/>
                    <label>
                    Password:
                    <input type="text" password="password" />
                    </label>
                    <br/>
                    <input type="submit" value="Login" />
                </form>
                <br/>
                Don't have an account?
                <button className='modalBtn' onClick={() => setOpenModal(true)}>Register</button>
                  <RegisteringModal open={openModal} onClose={()=> setOpenModal(false)}/>
            </main>    
        );
    }
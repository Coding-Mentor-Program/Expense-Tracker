//Display username, add account button, logout link

export default function AccountProfile ({open, onClose}) {
    if (!open) return null;
    return (
        <div className='overlay'>
            <div className='modalContainer'>
                <div className="modalLeft">
                   <p onClick={onClose} className="closeBtn">X</p>
                </div>
                <button>Add Account</button>
                <button className="logaoutBtn"  onClick={() => console.log('logged out')}>Logout</button>
            </div>
        </div>
    )
}
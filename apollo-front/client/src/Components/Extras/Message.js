import React from 'react';
import { Link } from 'react-router-dom';

const Message = () => {
    return (
        <div id='msg' className='message'>
            <p>Your item has been added</p>
            <Link to='/inquiry-list'>See full list</Link>
        </div>
    );
};

export default Message;

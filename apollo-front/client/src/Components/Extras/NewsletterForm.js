import React from 'react';
import TextField from '@material-ui/core/TextField';

const NewsletterForm = () => {
    return (
        <form>
            <div className='text-field-group'>
                <div className='tfg-icon'>
                    <i className='fas fa-user'></i>
                </div>
                <div className='tfg-input'>
                    <TextField id='name' label='Full Name' fullWidth />
                </div>
            </div>
            <div className='text-field-group'>
                <div className='tfg-icon'>
                    <i className='fas fa-envelope'></i>
                </div>
                <div className='tfg-input'>
                    <TextField id='email' label='Email' fullWidth />
                </div>
            </div>
            <div className='submission-container'>
                <div className='recaptcha'></div>
                <div className='button'>
                    <button className='apollo-button'>Subscribe</button>
                </div>
            </div>
        </form>
    );
};

export default NewsletterForm;

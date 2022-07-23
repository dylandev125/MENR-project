import React from 'react';
import TextField from '@material-ui/core/TextField';

const InquiryForm = ({ formData, onChange }) => {
    const { fullname, useremail, userphone, message } = formData;

    return (
        <div>
            <div className='text-field-group'>
                <div className='tfg-icon'>
                    <i className='fas fa-user'></i>
                </div>
                <div className='tfg-input'>
                    <TextField
                        id='fullname'
                        name='fullname'
                        value={fullname}
                        onChange={(e) => onChange(e)}
                        label='Full Name'
                        fullWidth
                    />
                </div>
            </div>
            <div className='text-field-group'>
                <div className='tfg-icon'>
                    <i className='fas fa-envelope'></i>
                </div>
                <div className='tfg-input'>
                    <TextField
                        id='useremail'
                        name='useremail'
                        value={useremail}
                        onChange={(e) => onChange(e)}
                        label='Email'
                        fullWidth
                    />
                </div>
            </div>
            <div className='text-field-group'>
                <div className='tfg-icon'>
                    <i className='fas fa-phone'></i>
                </div>
                <div className='tfg-input'>
                    <TextField
                        id='userphone'
                        name='userphone'
                        value={userphone}
                        onChange={(e) => onChange(e)}
                        label='Phone'
                        fullWidth
                    />
                </div>
            </div>
            <div className='text-field-group'>
                <div className='tfg-icon'>
                    <i className='fas fa-comment-alt-lines'></i>
                </div>
                <div className='tfg-input'>
                    <TextField
                        id='message'
                        label='Message'
                        name='message'
                        value={message}
                        onChange={(e) => onChange(e)}
                        fullWidth
                        multiline
                        minRows={4}
                    />
                </div>
            </div>
            <div className='submission-container'>
                <div className='recaptcha'></div>
                <div className='button'>
                    <button className='apollo-button'>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default InquiryForm;

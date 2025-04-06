import React from 'react';
import './FormContainer.css';

const FormContainer = () => {
    return (
        <>
            <form>
                <h1>Contact Us</h1>
                <div className='fname'>
                    <label htmlFor="fname">First Name</label>
                    <input type="text" id='fname' />
                </div>
                <div className='lname'>
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" id='lname' />
                </div>
                <div>
                    <label htmlFor="Email">Email Address</label>
                    <input type="text" id='Email' />
                </div>
                <div>
                    <label htmlFor="qType">Query Type</label>
                    <input type="radio" id='qType' name='qType' />
                    <input type="radio" id='qType' name='qType' />
                </div>
                <div>
                    <label htmlFor="msg">Message</label>
                    <textarea name="msg" id="msg"></textarea>
                </div>
                <div>
                    <input type="radio" id='consent' />
                    <label htmlFor="consent">I consent to being contacted by team</label>
                </div>
                <button>Submit</button>
            </form>
        </>

    );
}

export default FormContainer;

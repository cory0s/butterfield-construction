import React from 'react';
import './contact.scss';
import Email from '../../../content/images/email.png'
import Phone from '../../../content/images/phone.png'
import Facebook from '../../../content/images/facebook.png'


const Contact = () => {

    return(
        <div class="contact-wrapper">
            <div class="contact">
                <h3>We'd love to hear from you! Give us a call to get an estimate on your upcoming projects.</h3>
                <div class="contact-card">
                    <p><img src={Email}/>  spencer@gmail.com</p>
                    <p><img src={Phone}/>  (509) 528-3725</p>
                    <p><img src={Facebook}/>  1234 Onyx Ave, Richland, WA 99352</p>
                </div>
            </div>
        </div>
    )
}

export default Contact;
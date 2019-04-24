import React from 'react'

const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            <section>
            <form name="contact" method="post" data-netlify="true" >
                
                <input type="hidden" name="form-name" value="contact" />
                    <div className="field half first">
                        <label htmlFor="name">Nom</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div className="field">
                        <label htmlFor="message"> Parlez nous de votre projet</label>
                        <textarea name="message" id="message" rows="6"></textarea>
                    </div>
                    <div data-netlify-recaptcha="true"></div>
                    <ul className="actions">
                        <li><input type="submit" value="Send Message" className="special" /></li>
                        <li><input type="reset" value="Clear" /></li>
                    </ul>
                </form>
            </section>
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <h3>Email</h3>
                        <a href="#">gatsby@crackthesky.fr</a>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-phone"></span>
                        <h3>Telephone</h3>
                        <span>06.11.33.44.55</span>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-home"></span>
                        <h3>Adresse</h3>
                        <span>42 avenue des limousines<br />
                        Limoges, 87 000<br />
                        France</span>
                    </div>
                </section>
            </section>
        </div>
    </section>
)

export default Contact

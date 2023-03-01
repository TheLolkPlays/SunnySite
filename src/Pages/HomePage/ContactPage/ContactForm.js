import './ContactForm.css'
import Line from "../../../Universalcomponents/Line"

export default function ContactForm() {
    return (
        <div className="w3-padding-large" id="contact">
            <h2 className="w3-text-light-grey">Contact Me</h2>
            <Line/>

            <div className="w3-row-padding" style={{ marginTop: '48px' }}>
                <div className="w3-col m6">
                    <form action="/submit-form" method="POST">
                        <div className="w3-row-padding">
                            <div className="w3-col s12">
                                <label className="w3-text-grey">Name</label>
                                <input className="input w3-input  w3-border" type="text" name="name" required />
                            </div>
                        </div>
                        <div className="w3-row-padding">
                            <div className="w3-col s12">
                                <label className="w3-text-grey">Email</label>
                                <input className="input w3-input w3-border" type="email" name="email" required />
                            </div>
                        </div>
                        <div className="w3-row-padding">
                            <div className="w3-col s12">
                                <label className="w3-text-grey">Message</label>
                                <textarea className="input w3-input w3-border" name="message" rows="8" required></textarea>
                            </div>
                        </div>
                        <div className="w3-row-padding">
                            <div className="w3-col s12">
                                <button className="w3-button w3-black w3-right w3-section" type="submit">
                                    <i className="fa fa-paper-plane"></i> Send Message
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="w3-col m6">
                    <div className="w3-container w3-padding-16 w3-black w3-opacity w3-hover-opacity-off w3-center">
                        <i className="fa fa-map-marker w3-xxlarge"></i>
                        <p>My Address</p>
                    </div>
                    <div className="w3-container w3-padding-16 w3-black w3-opacity w3-hover-opacity-off w3-center">
                        <i className="fa fa-phone w3-xxlarge"></i>
                        <p>Phone: +00 123456789</p>
                    </div>
                    <div className="w3-container w3-padding-16 w3-black w3-opacity w3-hover-opacity-off w3-center">
                        <i className="fa fa-envelope-o w3-xxlarge"></i>
                        <p>Email: mail@example.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
}


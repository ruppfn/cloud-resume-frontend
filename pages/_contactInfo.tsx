import {ContactInfo} from "./_types";
import {FunctionComponent} from "react";

interface Props {
    contactInfo: ContactInfo
}

const ContactInfoComponent: FunctionComponent<Props> = ({ contactInfo }) => (
    <>
        <div className="contact-info">
            {contactInfo.location}
        </div>
        <div className="contact-info">
            {contactInfo.phone}
        </div>
        <div className="contact-info">
            <a href={`mailto:${contactInfo.mail}`} className="contact-info">{contactInfo.mail}</a>
        </div>
        <div className="contact-info">
            <a href={contactInfo.linkedIn} className="contact-info">{contactInfo.linkedIn}</a>
        </div>
        <div className="contact-info">
            <a href={contactInfo.github} className="contact-info">{contactInfo.github}</a>
        </div>
    </>
);

export default ContactInfoComponent;

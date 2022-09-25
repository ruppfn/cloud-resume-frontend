import styles from "../styles/ContactInfo.module.css";
import {ContactInfo} from "./_types";
import {FunctionComponent} from "react";

interface Props {
    contactInfo: ContactInfo
}

const ContactInfoComponent: FunctionComponent<Props> = ({ contactInfo }) => (
    <>
        <div className={styles.contactInfo}>
            {contactInfo.location}
        </div>
        <div className={styles.contactInfo}>
            {contactInfo.phone}
        </div>
        <div className={styles.contactInfo}>
            <a href={`mailto:${contactInfo.mail}`}>{contactInfo.mail}</a>
        </div>
        <div className={styles.contactInfo}>
            <a href={contactInfo.linkedIn}>{contactInfo.linkedIn}</a>
        </div>
        <div className={styles.contactInfo}>
            <a href={contactInfo.github}>{contactInfo.github}</a>
        </div>
    </>
);

export default ContactInfoComponent;

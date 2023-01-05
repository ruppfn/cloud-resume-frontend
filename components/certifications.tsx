import {FunctionComponent} from "react";
import styles from "../styles/Certifications.module.css";
import {Certification} from "../types/cvData";

interface Props {
    certifications: Array<Certification>;
}

const CertificationsComponent: FunctionComponent<Props> = ({ certifications }) => (
    <div className={styles.certificationContainer}>
        <h2>CERTIFICATIONS</h2>
        {
            certifications.map((certification) => (
              <div key={certification.name} className={styles.certification}>
                  <h3>
                      <a href={certification.url}>
                          {certification.name}
                      </a>
                  </h3>
                  <span>&nbsp;&mdash; {certification.dateObtained}</span>
              </div>
            ))
        }
    </div>
);

export default CertificationsComponent;

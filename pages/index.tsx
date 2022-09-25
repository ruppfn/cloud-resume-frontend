import type {NextPage} from 'next'
import styles from '../styles/Home.module.css'
import {CvData} from "./_types";
import ContactInfoComponent from "./_contactInfo";

interface Props {
    cvData: CvData
}

const Home: NextPage<Props> = ({cvData}) => {
    return (
        <div className={styles.container}>
            <div className={styles.topContainer}>
                <div className={styles.leftContainer}>
                    <h1>{cvData.name}</h1>
                    <h3>{cvData.role}</h3>
                </div>
                <div className={styles.rightContainer}>
                    <ContactInfoComponent contactInfo={cvData.contactInfo}/>
                </div>
            </div>
            <div className={styles.aboutMe}>
                {cvData.aboutMe}
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const URL = process.env.CV_API_URL!
    const response = await fetch(URL);
    const cvData: CvData = await response.json();

    return {
        props: {
            cvData
        }
    }
}

export default Home;

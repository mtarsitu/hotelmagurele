import Image from 'next/image';
import { useState } from 'react';
import styles from './styles.module.scss';

export default function LoadingComp() {

    const [dots, setDots] = useState("");

    setTimeout(() => {
        if (dots.length > 4) {
            setDots("");
        } else {
            setDots(dots + " .");
        }
    }, 200);

    return (
        <>
            <div className={styles.loading_component}>
                <div className={styles.loading_spinner}>
                    <Image
                        src={"/images/logo-magurele.jpeg"}
                        alt={"logo"}
                        width={100}
                        height={100}
                    />
                </div>
                <span className={styles.spinner_text}>Loading {dots}</span>
            </div>
        </>
    );
};
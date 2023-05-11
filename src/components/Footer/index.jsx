import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

function Footer() {
    return (
        <>
            <footer>
                <div className={styles.footer_content}>
                    <div className={styles.first}>
                        <div className={styles.footer_headers} >Companie</div>
                        <hr />
                        <div className={styles.footer_text}>
                            HOTEL MAGURELE <br></br>
                            MAGURELE ILFOV <br></br>
                            STRADA ATOMISTILOR NR 250A <br></br>
                            REGISTRUL COMERTULUI: HOTEL <br></br>
                            COD DE INREGISTRARE FISCALA: MAGURELE <br></br>
                            <Link href="tel:0773364191">
                                <a target="_blank" rel="noreferrer">
                                    0773 364 191
                                </a>
                            </Link>
                            {/* TEL: 0773364191 <br></br> */}

                        </div>
                    </div>
                    
                    <div className={styles.third}>
                        <div className={styles.footer_headers}>Links:</div>
                        <hr />
                        <div className={styles.footer_link_section}>
                            <Link href="/despre-noi">Despre noi</Link>
                            <Link href="/termene-si-conditii">Termene si conditii</Link>
                            <Link href="/politica-de-confidentialitate">Politica de confidențialitate</Link>
                            <Link href="/politica-de-cookieuri">Politica de cookieuri</Link>
                        </div>
                    </div>
                </div>
                <div className={styles.copy_right}>©2023 - HOTEL MAGURELE || TECHAINE GROUP.
                </div>
            </footer >
        </>
    );
};

export default Footer;
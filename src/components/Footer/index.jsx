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
                            <Link href="tel:0786533556">
                                <a target="_blank" rel="noreferrer">
                                    0786 533 556
                                </a>
                            </Link>
                            {/* TEL: 0786533556 <br></br> */}

                        </div>
                    </div>
                    <div className={styles.second}>
                        <div className={styles.footer_headers}>Parteneri</div>
                        <hr />
                        <div className={styles.footer_image}>
                            <div>
                                <Link href="https://umfcd.ro/">
                                    <a target="_blank" rel="noreferrer">
                                        <Image
                                            src="/images/logoUMFCD.jpg"
                                            alt="logo"
                                            width={50}
                                            height={50}
                                        />
                                    </a>
                                </Link>
                                <Link href="https://www.sri.ro/" target="_blank" rel="noreferrer">
                                    <a target="_blank" rel="noreferrer">
                                        <Image
                                            src="/images/logo-sri.png"
                                            alt="logo"
                                            width={50}
                                            height={50}
                                        />
                                    </a>
                                </Link>
                                <Link href="https://www.tmucb.com/" target="_blank" rel="noreferrer">
                                    <a target="_blank" rel="noreferrer">
                                        <Image
                                            src="/images/tmucb.png"
                                            alt="logo"
                                            width={60}
                                            height={50}
                                        />
                                    </a>
                                </Link>
                            </div>
                            <div>
                                <Link href="https://www.pv.ro/" target="_blank" rel="noreferrer">
                                    <a target="_blank" rel="noreferrer">
                                        <Image
                                            src="/images/prefabricate-vest.png"
                                            alt="logo"
                                            width={200}
                                            height={40}
                                        />
                                    </a>
                                </Link>
                            </div>
                            <div>
                                <Link href="https://www.anaf.ro/" target="_blank" rel="noreferrer">
                                    <a target="_blank" rel="noreferrer">
                                        <Image
                                            src="/images/anaf_ro.png"
                                            alt="logo"
                                            height={40}
                                            width={150}
                                        />
                                    </a>
                                </Link>
                            </div>
                            <div>
                                <Link href="https://utcb.ro/" target="_blank" rel="noreferrer">
                                    <a target="_blank" rel="noreferrer">
                                        <Image
                                            src="/images/utcb.png"
                                            alt="logo"
                                            width={50}
                                            height={40}
                                        />
                                    </a>
                                </Link>
                                <Link href="https://electromontaj.ro/" target="_blank" rel="noreferrer">
                                    <a target="_blank" rel="noreferrer">
                                        <Image
                                            src="/images/electromontaj.png"
                                            alt="logo"
                                            width={50}
                                            height={30}
                                        />
                                    </a>
                                </Link>
                            </div>
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
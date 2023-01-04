import styles from "./styles.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";

export default function SliderParteneri() {

    const settings = {
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 6000,
        autoplay: true,
        pauseOnDotsHover: true,
        pauseOnFocus: true,
        pauseOnHover: true,
        swipe: true,
        arrows: false,
        draggable: true,
    };

    return (
        <>
            <div className={styles.slider_title}>Partenerii nostri:</div>
            <Slider className={styles.slider_parteneri} {...settings}>
                <div className={styles.round_div}>
                    <Link href="https://umfcd.ro/">
                        <a target="_blank" rel="noreferrer">
                            <div className={styles.image1}>
                                <Image
                                    width={200}
                                    height="200%"
                                    src="/images/logoUMFCD.jpg"
                                    alt="logo"
                                />
                            </div>
                        </a>
                    </Link>
                </div>
                <div className={styles.round_div}>
                    <Link href="https://www.sri.ro/">
                        <a target="_blank" rel="noreferrer">
                            <div className={styles.image1}>
                                <Image
                                    className={styles.round_img}
                                    width={200}
                                    height="200%"
                                    src="/images/logo-sri.png"
                                    alt="logo"
                                />
                            </div>
                        </a>
                    </Link>
                </div>
                <div className={styles.round_div}>
                    <Link href="https://www.tmucb.com/" >
                        <a target="_blank" rel="noreferrer">
                            <div className={styles.image1}>
                                <Image
                                    src="/images/tmucb.png"
                                    width={200}
                                    height="200%"
                                    alt="logo"
                                />
                            </div>
                        </a>
                    </Link>
                </div>
                <div className={styles.rectangle_div}>
                    <Link href="https://www.pv.ro/">
                        <a target="_blank" rel="noreferrer">
                            <div className={styles.image2}>
                                <Image
                                    width={300}
                                    height="50%"
                                    src="/images/prefabricate-vest.png"
                                    alt="logo"
                                />
                            </div>
                        </a>
                    </Link>
                </div>
                <div className={styles.rectangle_div}>
                    <Link href="https://www.anaf.ro/" >
                        <a target="_blank" rel="noreferrer">
                            <div className={styles.image3}>
                                <Image
                                    width={300}
                                    height="100%"
                                    src="/images/anaf_ro.png"
                                    alt="logo"
                                />
                            </div>
                        </a>
                    </Link>
                </div>
                <div className={styles.rectangle_div}>
                    <Link href="https://utcb.ro/">
                        <a target="_blank" rel="noreferrer">
                            <div className={styles.image3}>
                                <Image
                                    width={100}
                                    height="100%"
                                    src="/images/utcb.png"
                                    alt="logo"
                                />
                            </div>
                        </a>
                    </Link>
                </div>
                <div className={styles.rectangle_div}>
                    <Link href="https://electromontaj.ro/">
                        <a target="_blank" rel="noreferrer">
                            <div className={styles.image3}>
                                <Image
                                    width={200}
                                    height="100%"
                                    src="/images/electromontaj.png"
                                    alt="logo"
                                />
                            </div>
                        </a>
                    </Link>
                </div>
            </Slider >
        </>
    );
};
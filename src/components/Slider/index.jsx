import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import useWindowSize from "../../hooks/useWindowSize";

export default function DespreNoiSlider() {

    const [displaySubtitle, setDisplaySubtitle] = useState(false);
    const [displayButton, setDisplayButton] = useState(false);

    const { width, height } = useWindowSize();

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

    useEffect(() => {
        displayContent();
    }, []);


    const displayContent = () => {
        setTimeout(() => { setDisplaySubtitle(true) }, 1000);
        setTimeout(() => { setDisplayButton(true) }, 2000);
    };

    return (
        <div>
            <Slider {...settings}>
                <div className={styles.slide}>
                    <div className={styles.slide_cover}>
                        <div className={styles.slide_title}>Hotel Magurele</div>
                        {displaySubtitle && (<div className={styles.slide_subtitle}>Facilitati Hotel</div>)}
                        {displayButton && (
                            <div>
                                <button className={styles.slide_btn} onClick={() => window.location.replace("#despre-noi")}>Vezi mai multe</button>
                            </div>
                        )}
                    </div>
                    {height && width && (
                        <Image
                            objectFit="cover"
                            objectPosition="center"
                            src="/images/about-us-header2.jpg"
                            alt='waste1'
                            width={width}
                            height={height}
                        />
                    )}
                </div>
                <div className={styles.slide}>
                    <div className={styles.slide_cover}>
                        <div className={styles.slide_title}>Te poti caza fara griji!</div>
                        {displaySubtitle && (<div className={styles.slide_subtitle}>Calculeaza-ti cazarea</div>)}
                        {displayButton && (
                            <div>
                                <button className={styles.slide_btn} onClick={() => window.location.replace("/calculator")}>Calculator de pret</button>
                            </div>
                        )}
                    </div>
                    {height && width && (
                        <Image
                            objectFit="cover"
                            objectPosition="center"
                            src="/images/about-us-header.jpg"
                            width={width}
                            height={height}
                            alt='waste2'
                        />
                    )}
                </div>
                <div className={styles.slide}>
                    <div className={styles.slide_cover}>
                        <div className={styles.slide_title}>Ne poti contacta oricand</div>
                        {displaySubtitle && (<div className={styles.slide_subtitle}>Hotel Magurele, sau acasa in Magurele</div>)}
                        {displayButton && (
                            <div>
                                <button className={styles.slide_btn} onClick={() => window.location.replace("/contact")}>Contact</button>
                            </div>
                        )}
                    </div>
                    {height && width && (
                        <Image
                            objectFit="cover"
                            objectPosition="center"
                            src="/images/about-us-header3.png"
                            width={width}
                            height={height}
                            alt='waste3'
                        />
                    )}
                </div>
            </Slider >
        </div >
    );
};
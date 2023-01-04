import styles from "./styles.module.scss";
import { BsArrowUpShort } from 'react-icons/bs';
import Link from "next/link";
import { useEffect, useState } from "react";

export default function BackToTopBtn() {

    const [scrollPosition, setScrollPosition] = useState(0);
    const [scrollButton, setScrollButton] = useState(styles.back_to_top_in);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
        if (position > 300 && scrollButton !== styles.back_to_top_in) {
            setScrollButton(styles.back_to_top_in);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    });

    return (
        <>
            {scrollPosition > 300 && (
                <div className={scrollButton}>
                    <Link href="#top">
                        <button className={styles.back_to_top_button}> <BsArrowUpShort /> </button>
                    </Link>
                </div>
            )}
        </>
    );
};
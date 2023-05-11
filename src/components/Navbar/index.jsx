import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";
import useWindowDimensions from "../../hooks/useWindowSize";
import { useState, useEffect, useRef } from "react";
import Hamburger from "hamburger-react";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import useOnClickOutside from "../../hooks/useOnClickOutside";

export default function Navbar() {
  const { width } = useWindowDimensions();
  const [isClicked, setIsClicked] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const selectBoxRef = useRef(null);
  useOnClickOutside(selectBoxRef, () => setIsClicked(false));

  const changeBackground = () => {
    if(width > 1099){
      if (window.scrollY >= 66) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <div>
      {width && width > 1100 ? (
         <div className={navbar ? styles.navbar_color : styles.navbarcontainer}>
         <Link href="/" prefetch={false}>
           <button className={styles.logo}>
             <Image
               src={"/images/logo-magurele.jpeg"}
               alt="logo"
               width={25}
               height={25}
             />
             <span className={styles.logotext}>Hotel Magurele</span>
           </button>
         </Link>
         <ul className={styles.navbar}>
           <li>
             <Link href="/" prefetch={false}>
               <div>Acasa</div>
             </Link>
           </li>
           <li>
             <Link href="/despre-noi" prefetch={false}>
               <div>Despre noi</div>
             </Link>
           </li>
           <li>
             <Link href="/camere" prefetch={false}>
               <div>Camere</div>
             </Link>
           </li>
           <li>
             <Link href="/contact" prefetch={false}>
               <div>Contact</div>
             </Link>
           </li>
         </ul>
       </div>
      ) : (
        <div className={styles.mobilenav} ref={selectBoxRef}>
        <div className={styles.hamburger}>
          <div className={styles.mobile_nav}>
            <Link href="/" prefetch={false}>
              <button className={styles.logo}>
                {/* <Image
                  src={"/images/logosite.png"}
                  alt="logo"
                  width={25}
                  height={25}
                /> */}
                <span className={styles.logotext}>Hotel Magurele</span>
              </button>
            </Link>
            <Hamburger
              toggled={isClicked}
              toggle={setIsClicked}
              className={styles.hamburger_icon}
            />
          </div>
        </div>
        {isClicked && (
          <div className={styles.mobile_navbar}>
            <ul className={styles.navbar}>
              <li>
                <Link href="/" prefetch={false}>
                  <div onClick={() => setIsClicked(false)}>Acasa</div>
                </Link>
              </li>
              <li>
                <Link href="/despre-noi" prefetch={false}>
                  <div onClick={() => setIsClicked(false)}>Despre noi</div>
                </Link>
              </li>
              <li>
                <Link href="/camere" prefetch={false}>
                  <div onClick={() => setIsClicked(false)}>
                    Camere
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/contact" prefetch={false}>
                  <div onClick={() => setIsClicked(false)}>Contact</div>
                </Link>
              </li>
              <li className={styles.mobile_link_btn}>
                <Link href="/camere" prefetch={false}>
                  <div onClick={() => setIsClicked(false)}>Calculeaza !</div>
                </Link>
              </li>

            </ul>
            <div className={styles.mobile_icons}>
                <Link href="https://www.facebook.com/hotelmagurele.ro" prefetch={false}>
                  <a target="_blank" rel="noreferrer">
                    <FacebookIcon />
                  </a>
                </Link>
                <Link href="whatsapp://send?phone=+40773364191" prefetch={false}>
                  <a target="_blank" rel="noreferrer">
                    <WhatsAppIcon />
                  </a>
                </Link>
                <Link href="tel:0773364191" prefetch={false}>
                  <PhoneCallbackIcon />
                </Link>
              </div>
          </div>
        )}
      </div>
      )}
    </div>
  );
}

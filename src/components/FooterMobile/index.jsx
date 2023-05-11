import PhoneIcon from "@mui/icons-material/Phone";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailIcon from "@mui/icons-material/Mail";
import styles from "./styles.module.scss";

export default function FooterMobile() {
  return (
    <>
      <div className={styles.footer_mobile_container}>
        <button className={styles.footer_btn}>
          <Link href="tel:0773364191" prefetch={false}>
            <a>
              <PhoneIcon />
            </a>
          </Link>
        </button>
        <button className={styles.footer_btn}>
          <Link href="mailto:receptie@hotelmagurele.ro" prefetch={false}>
            <a>
              <MailIcon />
            </a>
          </Link>
        </button>
        <button className={styles.footer_btn}>
          <Link href="https://www.facebook.com/hotelmagurele.ro" prefetch={false}>
            <a>
              <FacebookIcon />
            </a>
          </Link>
        </button>
        <button className={styles.footer_btn}>
          <Link href="whatsapp://send?phone=+40773364191" prefetch={false}>
            <a>
              <WhatsAppIcon />
            </a>
          </Link>
        </button>
      </div>
    </>
  );
}

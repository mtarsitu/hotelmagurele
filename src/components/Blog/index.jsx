import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Blog() {
  return (
    <div className={styles.blog_container}>
      <h1>INFORMATII UTILE</h1>
      <p>
        Fii intotdeuna la curent cu cele mai noi informatii ale Hotelului Magurele!
      </p>
      <div className={styles.blog_article_container}>
      <div className={styles.blog_article}>
      <div className={styles.image_container}>
        <Image
          src={"/images/apartament-superior/apartament-superior-dormitor2.jpeg"}
          objectFit="cover"
          objectPosition="center"
          alt="logo"
          layout='responsive'
          width={300}
          height={200}
          className={styles.image_logo_calculator}
        />
        </div>
        <span>01 Ianuarie 2023</span>
        <h4>Apartamentul Superior</h4>
        <p>
            {/* Cele mai importante materiale reciclabile, sunt cele feroase, neferoase si cele
            electronice. Gandeste-te la bateria masinii tale electrice, netratata in mod corespunzator
            poate dauna grav ecosistemului in care traim, bineinteles nu o singura baterie poate provoca asta,
            dar contribuind toti putem ajuta. */}
        </p>
        <Link href='/' prefetch={false}>
            <a>Afla detalii <ArrowForwardIcon/></a>
        </Link>
      </div>
      <div className={styles.blog_article}>
        <div className={styles.image_container}>
        <Image
          src={"/images/apartament-superior/apartament-superior-dormitor2.jpeg"}
          objectFit="cover"
          objectPosition="center"
          alt="logo"
          layout='responsive'
          width={300}
          height={200}
          className={styles.image_logo_calculator}
        />
        </div>
        <span>01 Ianuarie 2023</span>
        <h4>Apartamentul Superior</h4>
        <p>
            {/* Cu siguranță te intrebi de ce este necesare reciclarea produselor
            electronice. In primul rand din cauza materialelor periculoase pe care 
            le detin produsele electronice. Ce pot dauna grav daca sunt aruncate in natura.
            Al doile cel mai important aspect este reutilizarea lor in productia noilor tehnologii. */}
        </p>
        <Link href='/' prefetch={false}>
            <a>Afla detalii <ArrowForwardIcon/></a>
        </Link>
      </div>
      <div className={styles.blog_article}>
      <div className={styles.image_container}>
        <Image
          src={"/images/apartament-superior/apartament-superior-dormitor2.jpeg"}
          objectFit="cover"
          objectPosition="center"
          alt="logo"
          layout='responsive'
          width={300}
          height={200}
          className={styles.image_logo_calculator}
        />
        </div>
        <span>01 Ianuarie 2023</span>
        <h4>Apartament superior</h4>
        <p>
            {/* Echipa DEEE-uri.ro valorifica, sorteaza si trateaza
            sunt cele de origine electronica in princpiu, calculatoare, masini de spalat, frigidere
            aparate electronice, televizoare, camere foto, placi cu circuite electrice, 
            telefone si de altfel materiale reciclabile precum cele feroase si neferoase. */}
        </p>
        <Link href='/' prefetch={false}>
            <a>Afla detalii <ArrowForwardIcon/></a>
        </Link>
      </div>
      </div>
     
    </div>
  );
}

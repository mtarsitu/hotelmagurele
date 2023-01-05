import React, { Component } from "react";
import Slider from "react-slick";
import styles from "./styles.module.scss";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AnimateBtn from "../Buttons";

export default class MultipleItems extends Component {
  render() {
    const settings = {
      responsive: [
        {
          breakpoint: 1600,
          settings: {
            speed: 9000,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplaySpeed: 20000,
          },
        },
        {
          breakpoint: 890,
          settings: {
            speed: 4000,
            slidesToShow: 2,
            slidesToScroll: 2,
            autoplaySpeed: 10000,
          },
        },
        {
          breakpoint: 600,
          settings: {
            speed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplaySpeed: 6000,
          },
        },
      ],
      dots: true,
      infinite: true,
      speed: 14000,
      slidesToShow: 5,
      slidesToScroll: 5,
      autoplaySpeed: 30000,
      autoplay: true,
    };
    return (
      <div className={styles.slider_container}>
        <h1 style={{ textAlign: "left", marginLeft: "10%", marginTop: "30px" }}>
          Facilitati
        </h1>
        <div className={styles.info_hr_slider_homepage}></div>
        <Slider {...settings} className={styles.slider2}>
          <div className={styles.slider_div_container}>
            <Image
              className={styles.slide_image_div}
              src="/images/mic-dejun.jpeg"
              alt="logo"
              width="275"
              height="150"
            />
            <div>
              <h3>Mic dejun inclus</h3>
              <span>Cazare Hotel Magurele</span>
            </div>
            <div>
              <p>
                Micul dejun, secretul energiei. Micul dejun te ajuta sa ai
                energie in prima parte a zilei, momentul in care organismul este
                odihnit dupa somnul de noapte si ai cele mai mari sanse sa dai
                randament ridicat la…orice ti-ai propune. Masa de dimineata
                stimuleaza activitatea cerebrala. Incepe si tu ziua cu un mic
                dejun consistent.
              </p>
              <div className={styles.slide_btn_container}>
                <AnimateBtn icon={<PhoneIcon />} text={"Telefon"} />
                <AnimateBtn icon={<MailOutlineIcon />} text={"Mail"} />
              </div>
            </div>
          </div>
          <div className={styles.slider_div_container}>
            <Image
              className={styles.slide_image_div}
              src="/images/pastrare-bagaje.jpeg"
              alt="pastrare-bagaje.jpeg"
              width="275"
              height="150"
            />
            <h3>Pastrare Bagaje</h3>
            <span>Cazare Hotel Magurele</span>
            <p>
              Noi stim ca in ziua in care trebuie sa iti faci check-out probabil
              vei dori sa te mai plimbi prin preajma. Pentru ca lucrul acesta sa
              fie posibil, noi iti oferim o camera pentru bagaje. Astfel, nu
              conteaza ca ai eliberat camera, lucrurile tale vor fi in siguranta
              la noi. Tu vei putea sa mai hoinaresti cateva ore, fara sa ai
              grija bagajelor.
            </p>
            <div className={styles.slide_btn_container}>
              <AnimateBtn icon={<PhoneIcon />} text={"Telefon"} />
              <AnimateBtn icon={<MailOutlineIcon />} text={"Mail"} />
            </div>
          </div>
          <div className={styles.slider_div_container}>
            <Image
              className={styles.slide_image_div}
              src="/images/lift.jpeg"
              alt="lift.jpeg"
              width="275"
              height="150"
            />
            <h3>Ascensor pentru persoane</h3>
            <span>Cazare Hotel Magurele</span>
            <p>
              Aproape 90% dintre oameni depind de lift. Liftul este important
              pentru oaspeti, parinti, copii mici, vizitatori, batrani si
              persoane cu dizabilitati. Liftul este cel care ne usureaza viata
              si ne permite sa lucram si sa mergem mai rapid la etaje diferite,
              ne permite sa transportam cu usurinta obiecte grele.
            </p>
            <div className={styles.slide_btn_container}>
              <AnimateBtn icon={<PhoneIcon />} text={"Telefon"} />
              <AnimateBtn icon={<MailOutlineIcon />} text={"Mail"} />
            </div>
          </div>
          <div className={styles.slider_div_container}>
            <Image
              className={styles.slide_image_div}
              src="/images/apel-trezire.jpeg"
              alt="logo"
              width="275"
              height="150"
            />
            <h3>Apel trezire</h3>
            <span>Cazare Hotel Magurele</span>
            <p>
              Iti oferim serviciul gratuit numit Apel de trezire. Consideram ca
              un simplu apel robotic este impersoanal. De aceea receptionera
              noastra te va intampina cu un apel si un calduros mesaj de Buna
              dimineata. Micul dejun va fi deja pregatit pentru tine pentru a
              incepe ziua cat mai sanatos posibil.
            </p>
            <div className={styles.slide_btn_container}>
              <AnimateBtn icon={<PhoneIcon />} text={"Telefon"} />
              <AnimateBtn icon={<MailOutlineIcon />} text={"Mail"} />
            </div>
          </div>
          <div className={styles.slider_div_container}>
            <Image
              className={styles.slide_image_div}
              src="/images/fax-serviciu.png"
              alt="fax-serviciu.png"
              width="275"
              height="150"
            />
            <h3>Receptionare si transmitere fax</h3>
            <span>Cazare Hotel Magurele</span>
            <p>
              Ai nevoie de fax? Sa primesti sau sa transmiti documente? Suntem
              aici pentru tine. De asemenea acest serviciu este inclus in pretul
              cazarii. Nu trebuie sa iti faci griji pentru nimic, doar ne
              inmanezi documentele pe care trebuie sa le transmiti si noi vom
              face totul pentru tine. La fel si pentru receptionarea
              documentelor.
            </p>
            <div className={styles.slide_btn_container}>
              <AnimateBtn icon={<PhoneIcon />} text={"Telefon"} />
              <AnimateBtn icon={<MailOutlineIcon />} text={"Mail"} />
            </div>
          </div>
          <div className={styles.slider_div_container}>
            <Image
              className={styles.slide_image_div}
              src="/images/hotel-taxi-serviciu.jpeg"
              alt="logo"
              width="275"
              height="150"
            />
            <h3>Comenzi Taxi</h3>
            <span>Cazare Hotel Magurele</span>
            <p>
              Suntem aici sa iti oferim o sedere cat mai placuta asa ca ne
              ocupam de gasirea transportului preferat de tine. De la taxi-urile
              clasice, Uber sau Bolt pana la limuzinele oferite de cei de la
              Black Cab. Te vom anunta cand masina comandata de tine a ajuns in
              fata hotelului pentru nu te incarca cu nici un fel de detaliu.
            </p>
            <div className={styles.slide_btn_container}>
              <AnimateBtn icon={<PhoneIcon />} text={"Telefon"} />
              <AnimateBtn icon={<MailOutlineIcon />} text={"Mail"} />
            </div>
          </div>
          <div className={styles.slider_div_container}>
            <Image
              className={styles.slide_image_div}
              src="/images/parcare-hotel-magurele.jpeg"
              alt="logo"
              width="275"
              height="150"
            />
            <h3>Parcare Gratuita</h3>
            <span>Cazare Hotel Magurele</span>
            <p>
              Te intrebi unde vei parca masina? Nu trebuie sa iti faci griji
              unde parchezi masina. Avem parcare supravegheta video si nu
              necesita nici un cost suplimentar. Poti parca masina linistit fara
              nici o grija ca va patii ceva cat te bucuri de sederea in hotelul
              nostru din Magurele sau de imprejurimile hotelului. Detaliile
              conteaza!
            </p>
            <div className={styles.slide_btn_container}>
              <AnimateBtn icon={<PhoneIcon />} text={"Telefon"} />
              <AnimateBtn icon={<MailOutlineIcon />} text={"Mail"} />
            </div>
          </div>
          <div className={styles.slider_div_container}>
            <Image
              className={styles.slide_image_div}
              src="/images/apartament-superior/apartament-superior-baie2.jpeg"
              alt="apartament-superior-baie2.jpeg"
              width="275"
              height="150"
            />
            <h3>Grupuri sanitare propri</h3>
            <span>Cazare Hotel Magurele</span>
            <p>
              Toate camerele dispun de grupuri sanitare propri. Curatatea si
              dezinfectarea se efectueaza in fiecare zi pentru o sedere cat mai
              linistita si placuta. Cabina de dus, lavoar si vas WC. Prosoape si
              toate produsele necesare ingrijirii corporale zilnice sunt incluse
              in pret!
            </p>
            <div className={styles.slide_btn_container}>
              <AnimateBtn icon={<PhoneIcon />} text={"Telefon"} />
              <AnimateBtn icon={<MailOutlineIcon />} text={"Mail"} />
            </div>
          </div>
          <div className={styles.slider_div_container}>
            <Image
              className={styles.slide_image_div}
              src="/images/apartament-superior/cartela-camera.jpeg"
              alt="cartela-camera.jpeg"
              width="275"
              height="150"
            />
            <h3>Acces internet WI-FI</h3>
            <span>Cazare Hotel Magurele</span>
            <p>
              Consideram ca internetul este o necesitatea in anul 2023. De aceea
              noi il oferim ca si serviciu gratuit inclus in pretul cazarii.
              Internet de mare viteza si stabil pentru o sedere cat mai
              relaxanta posibil. Te asteptam la Hotel Magurele pentru a incerca
              internetul nostru.
            </p>
            <div className={styles.slide_btn_container}>
              <AnimateBtn icon={<PhoneIcon />} text={"Telefon"} />
              <AnimateBtn icon={<MailOutlineIcon />} text={"Mail"} />
            </div>
          </div>
          <div className={styles.slider_div_container}>
            <Image
              className={styles.slide_image_div}
              src="/images/apartament-superior/apartament-superior-tv.jpeg"
              alt="apartament-superior-tv.jpeg"
              width="275"
              height="150"
            />
            <h3>Televiziune prin cablu</h3>
            <span>Cazare Hotel Magurele</span>
            <p>
              Nu iti lipseste nici un program TV. Te simtit ca si cum nu ai fi
              plecat de acasa. Gratuit, in pretul cazarii, ai inclus si
              televiziunea prin cablu. Poti viziona un film sau sa urmaresti
              ultimile stiri nationale sau internationale. Incercam sa te simtit
              ca acasa. Asta este moto-ul nostru.
            </p>
            <div className={styles.slide_btn_container}>
              <AnimateBtn icon={<PhoneIcon />} text={"Telefon"} />
              <AnimateBtn icon={<MailOutlineIcon />} text={"Mail"} />
            </div>
          </div>
          <div className={styles.slider_div_container}>
            <Image
              className={styles.slide_image_div}
              src="/images/animale-companie-3.jpeg"
              alt="animale-companie-3.jpeg"
              width="275"
              height="150"
            />
            <h3>Animale companie</h3>
            <span>Cazare Hotel Magurele</span>
            <p>
              Iti faci griji unde iti lasi catelul sau pisica cand ai treaba in
              Orasul Magurele sau Bucuresti? Nu iti mai face, noi iti oferim
              posibilitatea de a lua animalul de companie cu tine in deplasari.
              Asa iti poti face sederea cat mai comfortabila. Dispunem de
              castroane pentru apa sau mancare.
            </p>
            <div className={styles.slide_btn_container}>
              <AnimateBtn icon={<PhoneIcon />} text={"Telefon"} />
              <AnimateBtn icon={<MailOutlineIcon />} text={"Mail"} />
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

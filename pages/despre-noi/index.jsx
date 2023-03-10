import DespreNoiSlider from "../../src/components/Slider";
import styles from "./styles.module.scss";
import { GiReceiveMoney, GiMeltingMetal, GiHandTruck } from "react-icons/gi";
import { useEffect, useState } from "react";
import TabIcon from "../../src/components/TabIcon";
import StepPreview from "../../src/components/StepPreview";
import Image from "next/image";
import useWindowSize from "../../src/hooks/useWindowSize";
import LoadingComp from "../../src/components/Loading";
import BackToTopBtn from "../../src/components/BackToTopBtn";
import {
  removeCursorLoading,
  cursorLoading,
} from "../../src/hooks/handleCursor";

function DespreNoi() {
  const { width } = useWindowSize();
  const [loading, setLoading] = useState(true);

  const feroase = 55;
  const neferoase = 50;
  const hartieCarton = 45;
  const compost = 15;

  const [tabSection, setTabSection] = useState({
    tab1: styles.servicii_tab_open,
    tab2: styles.servicii_tab_close,
    tab3: styles.servicii_tab_close,
  });

  const [tabSpan, setTabSpan] = useState({
    tab1: true,
    tab2: false,
    tab3: false,
  });

  const tabPreview = (name) => {
    setTabSection({
      tab1: styles.servicii_tab_close,
      tab2: styles.servicii_tab_close,
      tab3: styles.servicii_tab_close,
    });
    setTabSpan({
      tab1: false,
      tab2: false,
      tab3: false,
    });

    if (tabSection[name] === styles.servicii_tab_open) {
      setTabSpan((values) => ({
        ...values,
        [name]: false,
      }));
      setTabSection((values) => ({
        ...values,
        [name]: styles.servicii_tab_close,
      }));
    } else {
      setTabSpan((values) => ({
        ...values,
        [name]: true,
      }));
      setTabSection((values) => ({
        ...values,
        [name]: styles.servicii_tab_open,
      }));
    }
  };

  useEffect(() => {
    cursorLoading();
    setTimeout(() => {
      setLoading(false);
      removeCursorLoading();
    }, 1000);
  }, []);

  return (
    <>
      {loading && <LoadingComp />}
      <BackToTopBtn />
      <div id="top" style={{ overflow: "hidden" }}>
        <div className={styles.despre_noi_header}>
          <DespreNoiSlider />
        </div>
        <div className={styles.despre_noi_subheader}>
          <div className={styles.despre_noi_subheader_subtitle} id="despre-noi">
            Despre noi
          </div>
          <div className={styles.despre_noi_subheader_title}>
            In continua dezvoltare, pentru servicii ireprosabile!
          </div>
          <div className={styles.despre_noi_subheader_text}>
            Orasul Magurele se afla asezat in partea de sud-vest al Municipiului
            Bucuresti. Orasul are unitati cu activitati de cercetare, invatamant
            si industriale de interes national si international ca: Institutul
            de Fizica Atomica, o sectie a Inteprinderii Electromagnetica si
            Societatea Cooperativa de Consum, cu activitati diversificate,
            cuprinzand si un Complex Hotel-Restaurant deosebit care este
            amplasat in centrul localitatii cu acelasi nume,pe vestita
            ???Platforma Magurele???.
          </div>
          <div className={styles.despre_noi_subheader_text}>
            Complexul Hotel-Restaurant este destinat pt servicii de cazare,
            alimentatie publica si frizerie-coafura. Hotelul dispune de 64 de
            camere dispuse pe patru nivele dotate cu 2 si 3 paturi cu grup
            sanitar propriu, incalzire centrala, cablu TV??? si parcare gratuita.
            Restaurantul Hotelului dispune de 2 saloane cu o capacitate de 240
            locuri si va ofera specialitati ale bucatariei traditionale
            romanesti cat si internationale. Aici se pot organiza in conditii
            deosebite, mese festive, aniversari si mese de protocol.
          </div>
        </div>
        <div className={styles.servici_gif_section}>
          <div className={styles.serviciile_noastre}>
            <div className={styles.servicii_title}>Serviciile Noastre</div>
            <div className={tabSection.tab1}>
              <div
                id="tab1"
                className={styles.tab_title}
                onClick={() => {
                  tabPreview("tab1");
                }}
              >
                <div>
                  <GiReceiveMoney className={styles.servicii_icon} />
                  Pastrare Bagaje
                </div>
                <TabIcon className={styles.tab_span} icon={tabSpan.tab1} />
              </div>
              <div className={styles.tab_text}>
                Noi stim ca in ziua in care trebuie sa iti faci check-out
                probabil vei dori sa te mai plimbi prin preajma. Pentru ca
                lucrul acesta sa fie posibil, noi iti oferim o camera pentru
                bagaje. Astfel, nu conteaza ca ai eliberat camera, lucrurile
                tale vor fi in siguranta la noi. Tu vei putea sa mai hoinaresti
                cateva ore, fara sa ai grija bagajelor.
              </div>
            </div>
            <div className={tabSection.tab2}>
              <div
                id="tab2"
                className={styles.tab_title}
                onClick={() => {
                  tabPreview("tab2");
                }}
              >
                <div>
                  <GiMeltingMetal className={styles.servicii_icon} />
                  Mic dejun inclus
                </div>
                <TabIcon className={styles.tab_span} icon={tabSpan.tab2} />
              </div>
              <div className={styles.tab_text}>
                Micul dejun, secretul energiei. Micul dejun te ajuta sa ai
                energie in prima parte a zilei, momentul in care organismul este
                odihnit dupa somnul de noapte si ai cele mai mari sanse sa dai
                randament ridicat la???orice ti-ai propune. Masa de dimineata
                stimuleaza activitatea cerebrala. Incepe si tu ziua cu un mic
                dejun consistent.Dezmembrare ??i Dezafectare gratuit?? pentru
                de??euri electronice, materiale feroase ??i materiale neferoase.
                De asemenea, lu??m echipamente informatice ??i orice alte metale
                neferoase. Avem un personal complet instruit ??i certificat
                pentru a ??ndeplini toate aspectele muncii. Vom colabora cu dvs.
                pentru a dezvolta un plan care s?? r??spund?? nevoilor
                dumneavoastr?? specifice ??i apoi vom executa acel plan ??ntr-un
                mod sigur ??i eficient.
              </div>
            </div>
            <div className={tabSection.tab3}>
              <div
                id="tab3"
                className={styles.tab_title}
                onClick={() => {
                  tabPreview("tab3");
                }}
              >
                <div>
                  <GiHandTruck className={styles.servicii_icon} />
                  Grupuri sanitare propri
                </div>
                <TabIcon className={styles.tab_span} icon={tabSpan.tab3} />
              </div>
              <div className={styles.tab_text}>
                Toate camerele dispun de grupuri sanitare propri. Curatatea si
                dezinfectarea se efectueaza in fiecare zi pentru o sedere cat
                mai linistita si placuta. Cabina de dus, lavoar si vas WC.
                Prosoape si toate produsele necesare ingrijirii corporale
                zilnice sunt incluse in pret!
              </div>
            </div>
          </div>
          
        </div>
        <div className={styles.romania_status}>
          <div className={styles.romania_status_cover}>
            <div className={styles.romania_status_title}>Orasul Magurele</div>
            <div className={styles.romania_status_subtitle}>
              ??n 1595, ??naintea b??t??liei de la C??lug??reni, Mihai Viteazul ??i-a
              a??ezat tab??ra la M??gurele. Dup?? luptele de la C??lug??reni, turcii
              au pr??dat ??i satul M??gurele, locuitorii risipindu-se ??n p??durile
              din jur ??i ??n alte sate. La sf??r??itul secolului al XIX-lea, comuna
              rural?? M??gurele f??cea parte din plasa Sabarul a jude??ului Ilfov,
              ??i era format?? din satele Dumitrana, Filipescu, Ghermani ??i
              Oteteli??anu, totaliz??nd 1351 de locuitori care tr??iau ??n 285 de
              case. ??n comun?? func??ionau o moar?? cu ap??, dou?? ??coli mixte ??i
              trei biserici ??? la Dumitrana, Ghermani ??i Oteteli??anu. ??n plus
              fa???? de acestea, acolo exista ??i un institutut de fete, o ??coal??
              special?? care, pe l??ng?? curricula din ??colile de stat, preg??tea
              elevele ??n croitorie, gospod??rie casnic?? ??i alte astfel de
              discipline. Institutul era finan??at din mo??tenirea l??sat?? de
              boierul I. Oteteli??anu, decedat ??n 1876 ??i ??n 1900 ajunsese s??
              aib?? 80 de eleve (c??te 16 ??n fiecare an). Tot atunci, pe
              teritoriul actual al ora??ului exista ??i comuna V??rteju-Nefliu,
              format?? din satele V??rteju, Pruni, Nefliu ??i Chirca, cu 1191 de
              locuitori. ??n comuna V??rteju-Nefliu func??ionau dou?? mori de ap??, o
              ??coal?? mixt?? la V??rteju ??i dou?? biserici la Nefliu ??i V??rteju. ??n
              1925, cele dou?? comune figurau cu acelea??i compozi??ii ??n plasa
              Domne??ti a jude??ului Ilfov. ??n 1950, comunele M??gurelele ??i
              V??rteju Nefliu au trecut ??n raionul V.I. Lenin al ora??ului
              republican Bucure??ti. ??n 1981, comuna a trecut la Sectorul Agricol
              Ilfov din subordinea municipiului Bucure??ti, sector devenit ??n
              1997 jude??ul Ilfov. ??n anul 1957, ??n cadrul Institutului de Fizic??
              Atomic?? (IFA), la M??gurele s-a inaugurat primul reactor nuclear
              VVRS, un reactor de fisiune, ??i primul ciclotron U120 din Europa
              de est, de fabrica??ie sovietic??, instalate ??n afara Uniunii
              Sovietice. Continuatorul s??u este IFIN ??? Institutul de Fizic?? ??i
              Inginerie Nuclear?? ???Horia Hulubei???. Prin Hot??r??rea nr. 418 din 25
              aprilie 2002 s-a decis oprirea definitiv?? ??n vederea dezafect??rii
              a Reactorului nuclear (RN) VVR-S de cercetare ??i produc??ie de
              radioizotopi din cadrul Institutului Na??ional de
              Cercetare-Dezvoltare pentru Fizic?? ??i Inginerie Nuclear?? ???Horia
              Hulubei??? (IFIN-HH), Bucure??ti-M??gurele. Ca urmare, s-a hot??r??t ??i
              dezafectarea reactorului nuclear de cercetare VVR-S M??gurele (care
              func??iona dup?? o tehnologie sovietic??) ??i repatrierea ??n Federa??ia
              Rus?? a combustibilului nuclear ars de tip S-36 utilizat ??n
              reactorul VVR-S M??gurele. La Institutul de Fizic?? Atomic?? de la
              M??gurele va fi g??zduit?? o parte din proiectul Extreme Light
              Infrastructure (ELI), care are ca scop construirea unui laser de
              1.000 de ori mai puternic dec??t cel mai mare laser existent ??n
              prezent ??n lume.
            </div>
            {/* <div className={styles.romania_status_chart}>
              <div className={styles.status_preview}>
                Metale Feroase
                <div className={styles.status_100}>
                  <div className={styles.status_metale_feroase}></div>
                </div>
                {feroase} %
              </div>
              <div className={styles.status_preview}>
                Metale Neferoase
                <div className={styles.status_100}>
                  <div className={styles.status_metale_neferoase}></div>
                </div>
                {neferoase} %
              </div>
              <div className={styles.status_preview}>
                Hartie-Carton
                <div className={styles.status_100}>
                  <div className={styles.status_hartie_carton}></div>
                </div>
                {hartieCarton} %
              </div>
              <div className={styles.status_preview}>
                Materie Organica
                <div className={styles.status_100}>
                  <div className={styles.status_materie_organica}></div>
                </div>
                {compost} %
              </div>
            </div> */}
          </div>
        </div>
        <div className={styles.info_section}>
          <div className={styles.big_height_picture}>
            {width && width <= 1000 ? (
              <Image
                width={500}
                height={500}
                src="/images/about-us-illustration.jpg"
                alt="Descriptive"
              />
            ) : (
              <Image
                width={1000}
                height={1000}
                src="/images/about-us-illustration.jpg"
                alt="Descriptive"
              />
            )}
          </div>
          <div className={styles.info_text_section}>
            <div className={styles.info_text_title}>Hotel Magurele</div>
            <div className={styles.info_hr}></div>
            <div className={styles.info_text}>
              Hotel ??? mic dejun inclus, pastrare bagaje, ascensor pt persoane,
              apel trezire, comenzi taxi, parcare gratuita. Toate camerele sunt
              dotate cu balcon, mobila perfecta de lemn in stil clasic, dusuri
              si grupuri sanitare propri, televiziune prin cablu, internet
              wireless. Pentru grupuri intre 10 si 30 de persoane cu un sejur de
              cel putin 3 zile tarifele sant negociabile cu acordarea unui
              discount de 5-15%
            </div>
            <div className={styles.info_text}>
            Iti faci griji unde iti lasi catelul sau pisica cand ai treaba in
              Orasul Magurele sau Bucuresti? Nu iti mai face, noi iti oferim
              posibilitatea de a lua animalul de companie cu tine in deplasari.
              Asa iti poti face sederea cat mai comfortabila. Dispunem de
              castroane pentru apa sau mancare.
            </div>
            <div className={styles.info_text}>
              Consideram ca internetul este o necesitatea in anul 2023. De aceea
              noi il oferim ca si serviciu gratuit inclus in pretul cazarii.
              Internet de mare viteza si stabil pentru o sedere cat mai
              relaxanta posibil. Te asteptam la Hotel Magurele pentru a incerca
              internetul nostru.
            </div>
          </div>
        </div>
        <StepPreview />
      </div>
    </>
  );
}

export default DespreNoi;

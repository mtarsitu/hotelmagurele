import DespreNoiSlider from "../../src/components/Slider";
import styles from "./styles.module.scss";
import { GiReceiveMoney, GiMeltingMetal, GiHandTruck } from "react-icons/gi";
import { useEffect, useState } from "react";
import TabIcon from "../../src/components/TabIcon";
import StepPreview from "../../src/components/StepPreview";
import SliderParteneri from "../../src/components/SliderParteneri/slider-parteneri";
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
            In continua dezvoltare, pentru clientii nostri!
          </div>
          <div className={styles.despre_noi_subheader_text}>
            DeseuriElectronice este o companie specializată în colectarea și
            valorificarea de deșeuri electronice si nu numai. Colectarea
            materialelor feroase sau neferoase face parte din activitatea
            noastra de zi cu zi.
          </div>
          <div className={styles.despre_noi_subheader_text}>
            Principalele materiale cu care lucram sunt cele electrice sau
            electronice si baterii uzate. De asemnea, colectam si valorificam si
            materiale precum fierul vechi, cupru, inoxul, alama,
            plumblul,baterii
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
                  Recuperarea si Valorificarea
                </div>
                <TabIcon className={styles.tab_span} icon={tabSpan.tab1} />
              </div>
              <div className={styles.tab_text}>
                La centrul nostru de reciclare DEEE-uri.ro sau compania Spending
                Elements Best Solution SRL, principiul nostru este sa ne angajăm
                să gestionăm responsabil deșeurile electronice. Oferim servicii
                gratuite de colectare a deșeurilor electronice și putem oferi
                plata în avans pentru recuperare și reciclare. Credem că ne
                facem partea pentru a proteja mediul înconjurător, iar scopul
                nostru este să menținem deșeurile electronice dăunătoare departe
                de gropile de gunoi și departe de pericole.
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
                  Dezmembrari si Dezafectari
                </div>
                <TabIcon className={styles.tab_span} icon={tabSpan.tab2} />
              </div>
              <div className={styles.tab_text}>
                Dezmembrare și Dezafectare gratuită pentru deșeuri electronice,
                materiale feroase și materiale neferoase. De asemenea, luăm
                echipamente informatice și orice alte metale neferoase. Avem un
                personal complet instruit și certificat pentru a îndeplini toate
                aspectele muncii. Vom colabora cu dvs. pentru a dezvolta un plan
                care să răspundă nevoilor dumneavoastră specifice și apoi vom
                executa acel plan într-un mod sigur și eficient.
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
                  Transport si Cantarire
                </div>
                <TabIcon className={styles.tab_span} icon={tabSpan.tab3} />
              </div>
              <div className={styles.tab_text}>
                Oferim controlul greutății și transportul gratuit pentru fiecare
                deșeu feros sau neferoas. Acest lucru ne permite să oferim
                clienților noștri cele mai precise și actualizate informații
                despre nevoile lor de reciclare. Avem, de asemenea, o mare
                varietate de opțiuni de transport din care să alegeți, astfel
                încât să puteți găsi cea mai eficientă și mai rentabilă soluție
                pentru afacerea dvs.
              </div>
            </div>
          </div>
          <div className={styles.gif_info}>
            <SliderParteneri />
          </div>
        </div>
        <div className={styles.romania_status}>
          <div className={styles.romania_status_cover}>
            <div className={styles.romania_status_title}>
              CÂT RECICLEAZĂ ROMÂNIA
            </div>
            <div className={styles.romania_status_subtitle}>
              România produce 5,8 milioane de tone de deşeuri pe an, cu o medie
              de 272 de kilograme pe an pe cap de locuitor şi cu o rată de
              colectare de doar 82,3%, arată studiul Waste Atlas, publicat de
              organizaţia D-Waste. Din acest total, România reciclează doar 3%,
              fiind al doilea cel mai scăzut nivel din Uniunea Europeană. Cel
              mai scăzut nivel îl înregistrează Bulgaria, care are o rată de
              reciclare de sub 1%. Impreuna putem pastra Romania mai curata, cu
              responsabilitate si atentie.
            </div>
            <div className={styles.romania_status_chart}>
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
            </div>
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
            <div className={styles.info_text_title}>De ce DEE-uri.ro?</div>
            <div className={styles.info_hr}></div>
            <div className={styles.info_text}>
              Compania noastra, Spending Elements Best Solution SRL, are o vasta
              istorie in colectarea si valorificarea deseurilor electronice,
              deseurilor feroase sau neferoase. Tratam orice client cu aceeasi
              seriozitate indiferent de cantitatea detinuta de aceasta. Putem
              colecta orice cantitate de deseuri efectuand plata pe loc. Detinem
              un parc auto specializat pentru ridicarea deseurilor electrice sau
              electronice cat si masini dotate special pentru ridicarea
              deseurilor feroase sau neferoase intr-un timp scurt pentru a nu
              incurca activitatiile clientilor nostri. De asemenea participam in
              mod frecvent la licitatii publice, unde societatea noastra trebuie
              sa fie impecabila din toate punctele de vedere si unde este
              necesar sa achitam contractul integral in avans.
            </div>
            <div className={styles.info_text}>
              Centrul de colectare DEEE-uri are ca si obiectiv pe termen lung
              dezvolatarea reciclarii intr-un mod demn de Uniunea Europeană. Ne
              axam sa fim un partener de incredere pentru toate societatiile
              comerciale ce au nevoie de serviciile noastre.
            </div>
            <div className={styles.info_text}>
              DEEE-uri sau Spending Elements Best Solution SRL este o companie
              de reciclare a tehnologiei, cu accent pe electronice și deșeuri
              electrice. Oferim o varietate de servicii pentru persoane fizice
              și companii, inclusiv colectare, valorificare, reciclare și
              eliminare. Echipa noastră este pasionată de menținerea planetei
              noastre sănătoase și a oceanelor curate. Ne angajăm în gestionarea
              responsabilă a deșeurilor.
            </div>
          </div>
        </div>
        <StepPreview />
      </div>
    </>
  );
}

export default DespreNoi;

import Image from "next/image";
import Link from "next/link";
import { db } from "../src/firebase";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import useWindowSize from "../src/hooks/useWindowSize";
import { removeCursorLoading, cursorLoading } from "../src/hooks/handleCursor";
import styles from "../pages/Homepage/styles.module.scss";
import "animate.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import StepPreview from "../src/components/StepPreview";
import Modal from "./Homepage/modal";
import Contact from "../src/components/Contact";
import SliderHomepage from "../src/components/SliderHomepage";
import LoadingComp from "../src/components/Loading";
import BackToTopBtn from "../src/components/BackToTopBtn";
import CookieConsent from "react-cookie-consent";

export default function Homepage() {
  const [calculatorInfo, setCalculatorInfo] = useState([]);
  const [inputList, setInputList] = useState([
    { material: "", quantity: "", value: 0 },
  ]);
  const [total, setTotal] = useState(0);
  const [isModal, setIsModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const { width, height } = useWindowSize();

  async function getData() {
    const querySnapshot = await getDocs(collection(db, "camere"));
    const results = [];
    querySnapshot.forEach((doc) => {
      results.push(doc.data());
      setCalculatorInfo(results);
    });
    console.log(results);
  }

  //Logic for inputs at the calculator part
  const handleFormChange = (index, event) => {
    let data = [...inputList];
    data[index][event.currentTarget.name] = event.currentTarget.value;
    setInputList(data);
    addValuesToItems();
    calculateTotal();
  };

  const addFields = () => {
    let newfield = { material: "", quantity: "", value: 0 };
    setInputList([...inputList, newfield]);
  };

  const removeFields = (index) => {
    let data = [...inputList];
    let newList = [];
    for (let i = 0; i < data.length; i++) {
      if (i != index) {
        newList.push(data[i]);
      }
    }
    setInputList(newList);
  };

  function addValuesToItems() {
    for (let i = 0; i < calculatorInfo.length; i++) {
      for (let k = 0; k < inputList.length; k++) {
        if (inputList[k].material === calculatorInfo[i].name) {
          inputList[k].value = calculatorInfo[i].price;
        }
      }
    }
  }

  function calculateTotal() {
    let totalCalculation = 0;
    for (let j = 0; j < inputList.length; j++) {
      if (inputList[j].quantity && inputList[j].material) {
        totalCalculation +=
          parseInt(inputList[j].quantity) * inputList[j].value;
      }
    }
    setTotal(totalCalculation.toFixed(2));
  }

  useEffect(() => {
    cursorLoading();
    setTimeout(() => {
      setLoading(false);
      removeCursorLoading();
    }, 500);
  }, []);

  if (loading) {
    getData();
  }

  function addMoreFields() {
    return (
      <div className={styles.arrange}>
        <h1 style={{ textAlign: "left", marginBottom: "30px" }}>
          Calculator cazare Hotel Magurele
        </h1>
        {inputList.map((input, index) => (
          <div
            key={"dropdown-item" + index}
            className={styles.dropdowns_container}
          >
            <label className={styles.labels}>
              Alege Camera
              <select
                index={index}
                className={styles.dropdown}
                onChange={(event) => handleFormChange(index, event)}
                name="material"
              >
                <option value={input.material} selected disabled hidden>
                  Alege Camera
                </option>
                {calculatorInfo.map((info, key) => (
                  <option key={key} value={info.name} name="material">
                    {info.name}
                  </option>
                ))}
              </select>
            </label>
            <label className={styles.labels}>
              Numar de nopti cazare
              <input
                type="number"
                name="quantity"
                value={input.quantity}
                className={styles.numberinput}
                placeholder="Numar de nopti cazare"
                onChange={(event) => handleFormChange(index, event)}
              />
            </label>
            {inputList.length <= calculatorInfo.length - 1 ? (
              <AddCircleOutlineIcon
                style={{ cursor: "pointer" }}
                onClick={addFields}
              />
            ) : (
              ""
            )}

            {index > 0 && index === inputList.length - 1 ? (
              <RemoveCircleIcon
                style={{ cursor: "pointer" }}
                onClick={() => {
                  removeFields(index);
                  setTotal((total - input.quantity * input.value).toFixed(2));
                }}
              />
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      {loading && <LoadingComp />}
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        enableDeclineButton
        hideOnAccept
        cookieName="cookie"
        style={{ background: "rgba(0, 128, 0, 0.6509803922)" }}
        buttonStyle={{
          color: "white",
          fontSize: "18px",
          borderRadius: "10px",
          padding: "10px 25px",
          background: "rgb(95 246 81)",
        }}
        declineButtonStyle={{
          color: "white",
          fontSize: "18px",
          borderRadius: "10px",
          padding: "10px 25px",
          background: "rgb(232 46 46)",
        }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.{" "}
      </CookieConsent>
      <BackToTopBtn />
      {isModal && <Modal showModal={setIsModal} />}
      <div style={{ overflow: "hidden" }}>
        <div id="top" className={styles.video_overlay}>
          {width &&
            width !== "undefined" &&
            width !== null &&
            width !== undefined && (
              <video
                width={width}
                height={height}
                autoPlay
                loop
                muted
                playsInline
                defaultmuted="true"
                preload="metadata"
                className={styles.homepage_video}
              >
                <source
                  src="../images/AdobeStock_234925848.mov"
                  type="video/mp4"
                />
              </video>
            )}

          <div className={styles.overlay}></div>

          <div className={styles.text_overlay}>
            {/* <h1 className="animate__animated animate__fadeInDown animate__slower" >COLECTARE DESEURI ELECTRONICE</h1> */}
            <div className={styles.subtitle_container}>
              <span className="welcomespan animate__animated animate__fadeInDown animate__slower animate__delay-1s " id="welcomespan">
                Bine ati venit!
              </span>
              {/* <span className="animate__animated animate__fadeInDown animate__slower animate__delay-1s">
                 ati venit!
              </span> */}
              <span className="animate__animated animate__fadeInDown animate__slower animate__delay-2s">
                Hotel Magurele
              </span>
              
            </div>
            <br />
            <div
              className="animate__animated animate__fadeInDown animate__slower animate__delay-5s"
              style={{ margin: "auto", textAlign: "center" }}
            >
              <Link href="#calculator" prefetch={false}>
                <button>
                  Costuri cazare 2023!
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.main_container}>
          <h1 className={styles.subtitle}>
            Hotelul Magurele ureaza oaspetilor sai BINE ATI VENIT!
          </h1>
          <div className={styles.info_hr_index}></div>
          <div className={styles.paragraphs}>
            <p>
             Intr-o atmosfera placuta si relaxanta, puteti afla mai multe despre hotel, camere si 
             despre serviciile oferite printr-un simplu click si se vor afisa informatii legate de tarife
             si rezervari. Cu 3 tipuri de camere si un tip de apartament cu siguranta veti gasii o
             optiune de cazare pe placul dumneavoastra.
             Camera single, camera dubla, camera tripla si Apartamentul Superior.
            </p>
            <p>
            Orasul Magurele se afla asezat in partea de sud-vest al Municipiului Bucuresti. Orasul are unitati cu activitati de cercetare,
             invatamant si industriale de interes national si international ca: Institutul de Fizica Atomica, o sectie a Inteprinderii Electromagnetica 
             si Societatea Cooperativa de Consum, cu activitati diversificate, cuprinzand si un Complex Hotel-Restaurant deosebit care este amplasat in 
             centrul localitatii cu acelasi nume,pe vestita Platforma Magurele.
            </p>
            <p>
            Complexul Hotel-Restaurant este destinat pt servicii de cazare, alimentatie publica si frizerie-coafura. 
            Hotelul dispune de 64 de camere dispuse pe patru nivele dotate cu 2 si 3 paturi cu grup sanitar propriu, incalzire centrala, cablu TV... 
            si parcare gratuita. Restaurantul Hotelului dispune de 2 saloane cu o capacitate de 240 locuri si va ofera specialitati ale bucatariei traditionale 
            romanesti cat si internationale. Aici se pot organiza in conditii deosebite, mese festive, aniversari si mese de protocol
            </p>
          </div>
          <Link href="/despre-noi" prefetch={false}>
            <button>Descopera mai mult</button>
          </Link>
        </div>
        <div
          style={{ background: "#80808029", paddingBottom: "40px" }}
          id={"calculator"}
        >
          <div className={styles.calculator_div}>
            <div>
              <div className={styles.table}>
                <div>
                  {width &&
                    width !== "undefined" &&
                    width !== null &&
                    width !== undefined &&
                    width &&
                    width < 775 && (
                      <div className={styles.calculator_logo_image}>
                        <Image
                          src={"/images/logosite.png"}
                          objectFit="cover"
                          objectPosition="center"
                          alt="logo"
                          width={300}
                          height={300}
                          className={styles.image_logo_calculator}
                        />
                      </div>
                    )}
                  <h1>Preturi Camere</h1>
                  <h3>Actualizate zilnic</h3>

                  <table className={styles.table_container}>
                    <tbody>
                      {calculatorInfo &&
                        calculatorInfo.map((item, key) => (
                          <tr key={key}>
                            <td>{key + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.per}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
                {addMoreFields()}
              </div>
            </div>
            <div className={styles.calculator_logo_image}>
              {width &&
                width !== "undefined" &&
                width !== null &&
                width !== undefined &&
                width &&
                width > 775 && (
                  <>
                    <Image
                      src={"/images/logosite.png"}
                      objectFit="cover"
                      objectPosition="center"
                      alt="logo"
                      width={300}
                      height={300}
                      className={styles.image_logo_calculator}
                    />
                  </>
                )}
              <div className={styles.result}>
                <h1>Total cost camere:</h1>
                <span style={{ fontWeight: "bold", fontSize: "30px" }}>
                  RON: {total}
                </span>
                <button
                  className={styles.send_button}
                  onClick={() => setIsModal(!isModal)}
                >
                  TRIMITE MESAJ
                </button>
              </div>
            </div>
          </div>
          <p style={{ marginTop: "50px", textAlign: "center" }}>
            Pretul cazarii este cu Micul Dejun inclus.
          </p>
        </div>
        <div style={{ height: "900px" }}>
          <SliderHomepage />
        </div>
        <StepPreview />
        <Contact />
      </div>
    </>
  );
}

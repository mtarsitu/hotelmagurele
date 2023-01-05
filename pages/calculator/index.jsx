import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../src/firebase";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Modal from "../Homepage/modal";
import Image from "next/image";
import useWindowSize from "../../src/hooks/useWindowSize";
import LoadingComp from "../../src/components/Loading";
import BackToTopBtn from "../../src/components/BackToTopBtn";
import Blog from "../../src/components/Blog";
import {
  removeCursorLoading,
  cursorLoading,
} from "../../src/hooks/handleCursor";

export default function CalculatorPage() {
  const [calculatorInfo, setCalculatorInfo] = useState([]);
  const [inputList, setInputList] = useState([{ material: "", quantity: "" }]);
  const [total, setTotal] = useState(0);
  const [isModal, setIsModal] = useState(false);
  const { width, height } = useWindowSize();
  const [loading, setLoading] = useState(true);

  async function getData() {
    const querySnapshot = await getDocs(collection(db, "camere"));
    const results = [];
    querySnapshot.forEach((doc) => {
      results.push(doc.data());
      setCalculatorInfo(results);
    });
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
          CALCULATOR CAZARE HOTEL MAGURELE
        </h1>
        {inputList.map((input, index) => (
          <div
            key={"dropdown-item" + index}
            className={styles.dropdowns_container}>
            <label className={styles.labels}>
              Alege camera
              <select
                index={index}
                className={styles.dropdown}
                onChange={(event) => handleFormChange(index, event)}
                name="camera">
                <option value={input.material} selected disabled hidden>
                  Alege camera
                </option>
                {calculatorInfo.map((info, key) => (
                  <option key={key} value={info.name} name="camera">
                    {info.name}
                  </option>
                ))}
              </select>
            </label>
            <label className={styles.labels}>
              Perioada cazare
              <input
                type="number"
                name="quantity"
                value={input.quantity}
                className={styles.numberinput}
                placeholder="Alege numarul de zile"
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
      <BackToTopBtn />
      {isModal && <Modal showModal={setIsModal} />}
      <div id="top" className={styles.contactToptContent}>
        {width && width && height && height && (
          <Image
            src={"images/calculate2.jpg"}
            alt={"calculator"}
            objectFit="cover"
            width={width}
            height={height}
          />
        )}

        <div className={styles.topCover}>
          <div className={styles.topTitle}>Calculator cazare</div>
          <div className={styles.topSubTitle}>
            Poti verifica costurile totale de cazare in timp real!
          </div>
          <div>
            <button
              className={styles.topButton}
              onClick={() => window.location.replace("#calculator2")}>
              Calculeaza
            </button>
          </div>
        </div>
      </div>
      <div
        style={{ background: "#80808029", paddingBottom: "40px" }}
        id={"calculator2"}>
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
                <h1>Hotel Magurele</h1>
                <h3>Preturi cazare 2023 - actualizate zilnic</h3>

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
              <h1>Total cazare</h1>
              <span style={{ fontWeight: "bold", fontSize: "30px" }}>
                RON: {total}
              </span>
              <button
                className={styles.send_button}
                onClick={() => setIsModal(!isModal)}>
                TRIMITE MESAJ
              </button>
            </div>
          </div>
        </div>
        <p style={{ marginTop: "50px", textAlign: "center" }}>
          Pretul include Micul Dejun!
        </p>
      </div>
      <Blog />
    </>
  );
}

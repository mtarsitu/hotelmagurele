import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { db } from "../../src/firebase";
import styles from "./styles.module.scss";
import LoadingComp from "../../src/components/Loading";
import Link from "next/link";
import {
  removeCursorLoading,
  cursorLoading,
} from "../../src/hooks/handleCursor";

function Dashboard() {
  let router = useRouter();
  const [calculatorInfo, setCalculatorInfo] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [target, setTarget] = useState();
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!localStorage.getItem("logged")) {
      router.push("/");
    } else {
      cursorLoading();
      setTimeout(() => {
        setLoading(false);
        removeCursorLoading();
      }, 1000);
    }
  }, []);

  if (loading) {
    getData();
  }

  async function getData() {
    const querySnapshot = await getDocs(collection(db, "camere"));
    const results = [];
    querySnapshot.forEach((doc) => {
      results.push(doc.data());
      setCalculatorInfo(results);
    });
  }

  function handleChange(e) {
    let newArr = [...calculatorInfo];
    newArr.map((element) =>
      element.id == e.target.id
        ? (element[e.target.name] = e.target.value)
        : element
    );
    setCalculatorInfo(newArr);
  }

  async function submitData(e) {
    e.preventDefault();
    const querySnapshot = await getDocs(collection(db, "camere"));
    querySnapshot.forEach((document) => {
      deleteDoc(doc(db, "camere", document.data().name));
    });
    calculatorInfo.map((info) =>
      setDoc(doc(db, "camere", info.name), info, { merge: true })
    );
    setSaved(true);
  }

  function deleteRow(e) {
    let newArr = [...calculatorInfo];
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i].id == e.target.id) {
        newArr.splice(i, 1);
      }
    }
    setCalculatorInfo(newArr);
  }

  function addRow() {
    let ber = 0;
    let newArr = [...calculatorInfo];
    newArr.map((element) => (element.id > ber ? (ber = element.id) : ""));
    newArr.push({ id: ber + 1, name: "Coloana Noua", price: 0, per: "RON/KG" });
    setCalculatorInfo(newArr);
  }

  return (
    <>
      {loading && <LoadingComp />}
      <div className={styles.dashboard_content}>
        {isModal && (
          <>
            <div className={styles.dashboard_modal}>
              Esti sigur ca vrei sa stergi randul asta ?
              <div className={styles.modal_buttons}>
                <input
                  type="submit"
                  value="Nu"
                  onClick={() => {
                    setIsModal(!isModal);
                  }}
                />
                <input
                  id={target}
                  type="submit"
                  value="Da"
                  onClick={(e) => {
                    setIsModal(!isModal);
                    deleteRow(e);
                  }}
                />
              </div>
            </div>
          </>
        )}
        <div className={styles.dashboard}>
          {calculatorInfo.map((info, key) => (
            <div key={key}>
              <input
                name="name"
                id={info.id}
                className={styles.text_input}
                type="text"
                value={info.name}
                onChange={handleChange}
              />
              <input
                name="price"
                id={info.id}
                type="number"
                value={info.price}
                onChange={handleChange}
              />
              <input
                name="per"
                id={info.id}
                className={styles.text_input}
                type="text"
                value={info.per}
                onChange={handleChange}
              />
              <input
                id={info.id}
                className={styles.input_delete}
                type="submit"
                value="Sterge Item"
                onClick={(e) => {
                  setTarget(e.target.id);
                  setIsModal(!isModal);
                }}
              />
            </div>
          ))}
          <input
            className={styles.input_add_row}
            type="submit"
            value="Adauga Rand"
            onClick={addRow}
          />
          {saved && <div> SALVAT! </div>}
          <input
            className={styles.input_save}
            type="submit"
            value="Salveaza"
            onClick={submitData}
          />
        </div>
        <div className={styles.back_button}>
          <button>
            <Link href="/">
              <a style={{ textDecoration: "none", color: "black" }}>Back</a>
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default Dashboard;

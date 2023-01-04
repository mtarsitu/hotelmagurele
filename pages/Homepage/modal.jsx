import styles from "./styles.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import ErrorIcon from "@mui/icons-material/Error";
import { useState } from "react";
import { toast } from "react-toastify";
import { sendEmail } from "../../src/hooks/emailjs";

export default function Modal({ showModal }) {
  const [data] = useState({
    name: "",
    prenume: "",
    societate: "",
    telefon: "",
    strada: "",
    numar: "",
    localitate: "",
    judet: "",
  });
  const [isSucces, setIsSucces] = useState(false);
  const [isError, setIsError] = useState(false);
  const [disabled, setDisabled] = useState(false);

  function handleChange(e) {
    data[e.currentTarget.name] = e.currentTarget.value;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (
      data.name === "" ||
      data.prenume === "" ||
      data.telefon === "" ||
      data.strada === "" ||
      data.numar === "" ||
      data.localitate === ""
    ) {
      setIsError(true);
      setIsSucces(false);
      toast.error("Toate campurile sunt obligatorii!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      let templateParams = {
        subject: "Nou mail de la calculatorul de deseuri !",
        content: "O persoana a folosit calculatorul de deseuri:",
        name: data.name,
        prenume: data.prenume,
        societate: data.societate,
        telefon: data.telefon,
        strada: data.strada,
        numar: data.numar,
        localitate: data.localitate,
        judet: data.judet,
      };
      sendEmail(templateParams, false);
      console.log(isSucces);
      setIsError(false);
      setIsSucces(true);
      console.log(data);
      setDisabled(true);
    }
  }

  return (
    <div className={styles.modal_container}>
      <div className={styles.modal_text_container}>
        <h3 className={styles.modal_title}>
          DATELE TALE SI ADRESA DE RIDICARE
          <CloseIcon
            style={{ float: "right", cursor: "pointer" }}
            onClick={() => showModal(false)}
          />
        </h3>
        <form className={styles.modal_form} onSubmit={handleSubmit}>
          <div className={styles.modal_inputs}>
            <label className={styles.modal_labels}>
              {isError && data.name === "" && (
                <span className={styles.error}>
                  <ErrorIcon />
                  Acest camp este obligatoriu!
                </span>
              )}
              Nume*:
              <input
                type="text"
                name="name"
                placeholder="Nume"
                onChange={(e) => handleChange(e)}
              />
            </label>
            <label className={styles.modal_labels}>
              {isError && data.prenume === "" && (
                <span className={styles.error}>
                  <ErrorIcon />
                  Acest camp este obligatoriu!
                </span>
              )}
              Prenume*:
              <input
                type="text"
                name="prenume"
                placeholder="Prenume"
                onChange={(e) => handleChange(e)}
              />
            </label>
          </div>

          <div className={styles.modal_inputs}>
            <label className={styles.modal_labels}>
              Denumire Societate:
              <input
                type="text"
                name="societate"
                placeholder="Doar daca este cazul"
                onChange={(e) => handleChange(e)}
              />
            </label>
            <label className={styles.modal_labels}>
              {isError && data.telefon === "" && (
                <span className={styles.error}>
                  <ErrorIcon />
                  Acest camp este obligatoriu!
                </span>
              )}
              Numar de telefon*:
              <input
                type="text"
                name="telefon"
                placeholder="Numarul de telefon"
                onChange={(e) => handleChange(e)}
              />
            </label>
          </div>

          <div className={styles.modal_inputs}>
            <label className={styles.modal_labels}>
              {isError && data.strada === "" && (
                <span className={styles.error}>
                  <ErrorIcon />
                  Acest camp este obligatoriu!
                </span>
              )}
              Strada*:
              <input
                type="text"
                name="strada"
                placeholder="Adresa de ridicare"
                onChange={(e) => handleChange(e)}
              />
            </label>
            <label className={styles.modal_labels}>
              {isError && data.numar === "" && (
                <span className={styles.error}>
                  <ErrorIcon />
                  Acest camp este obligatoriu!
                </span>
              )}
              Numar/ Bloc/ Etc*:
              <input
                type="text"
                name="numar"
                placeholder="Etaj/ Bloc/ Etc."
                onChange={(e) => handleChange(e)}
              />
            </label>
          </div>

          <div className={styles.modal_inputs}>
            <label className={styles.modal_labels}>
              {isError && data.localitate === "" && (
                <span className={styles.error}>
                  <ErrorIcon />
                  Acest camp este obligatoriu!
                </span>
              )}
              Localitate*:
              <input
                type="text"
                name="localitate"
                placeholder="Localitate"
                onChange={(e) => handleChange(e)}
              />
            </label>
            <label className={styles.modal_labels}>
              {isError && data.judet === "" && (
                <span className={styles.error}>
                  <ErrorIcon />
                  Acest camp este obligatoriu!
                </span>
              )}
              Judet*:
              <input
                type="text"
                name="judet"
                placeholder="Judet"
                onChange={(e) => handleChange(e)}
              />
            </label>
          </div>
          <div className={styles.modal_checkbox}>
            <label>
              <input type="checkbox" />
              Sunt de acord cu{" "}
              <a href="/politica-de-confidentialitate">
                Politica de confidențialitate
              </a>
              .
            </label>
            <label>
              <input type="checkbox" />
              Sunt de acord cu{" "}
              <a href="/termeni-conditii">
                Termenele si Conditiile Deseurielectronice.ro
              </a>{" "}
              .
            </label>
          </div>
          <input
            disabled={disabled}
            type="submit"
            value="Trimite mesaj"
            className={styles.submit_button}
          />
        </form>
      </div>
    </div>
  );
}

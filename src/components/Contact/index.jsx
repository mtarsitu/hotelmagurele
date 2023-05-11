import Link from "next/link";
import styles from "./styles.module.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import { useState } from "react";
import { toast } from "react-toastify";
import { sendEmail } from "../../hooks/emailjs";

function Contact() {
  const [contactData] = useState({
    name: "",
    prenume: "",
    telefon: "",
    serviciu: "Informatii generale",
    mesaj: "",
  });
  const [disabled, setDisabled] = useState(false);

  function handleChange(e) {
    contactData[e.currentTarget.name] = e.currentTarget.value;
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      contactData.name === "" ||
      contactData.prenume === "" ||
      contactData.telefon === "" ||
      contactData.serviciu === "" ||
      contactData.mesaj === ""
    ) {
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
      setDisabled(true);
      let templateParams = {
        subject: "Nou mail tip contact !",
        content: "O persoana doreste sa fie contactata:",
        nume: `${contactData.name} ${contactData.prenume}`,
        telefon: contactData.telefon,
        serviciulNecesar: contactData.serviciu,
        mesaj: contactData.mesaj,
      };
      sendEmail(templateParams, true);
    }
  };

  return (
    <div className={styles.contact_form_container}>
      <h1>CONTACTAȚI-NE</h1>
      <div className={styles.contact_us}>
        <div className={styles.contact_text}>
          <p style={{ marginTop: "-100px" }}>
            Doriti o cazare in afara Bucurestiului dar destul de aproape de Bucuresti? Hotel Magurele este cea
            mai buna alegere
          </p>
          <div>
            <div>
              <p>Sediul nostru:</p>
              <Link href="https://www.google.com/maps/search/%C8%98oseaua+Giurgiului+269,+1+Decembrie/@44.3069153,26.0513487,14z/data=!3m1!4b1">
                Strada Atomistilor nr. 250A , Magurele, Ilfov.
              </Link>
            </div>
            <div>
              <p>
                Mobil:
                <Link href="tel:0214575269">021 457 52 69</Link>
              </p>
              <p>
                Email:{" "}
                <Link href="mailto:contact@hotelmagurele.ro">
                contact@hotelmagurele.ro
                </Link>
              </p>
            </div>
          </div>
          <h2>Ne puteti gasi usor:</h2>
          <div className={styles.logo_icons}>
            <Link href="https://www.facebook.com/hotelmagurele.ro">
              <a target="_blank" rel="noreferrer">
                <FacebookIcon />
              </a>
            </Link>
            <Link href="whatsapp://send?phone=+40773364191">
              <a target="_blank" rel="noreferrer">
                <WhatsAppIcon />
              </a>
            </Link>
            <Link href="tel:0773364191">
              <PhoneCallbackIcon />
            </Link>
          </div>
        </div>
        <div className={styles.contact_form}>
          <form style={{ width: "100%" }} onSubmit={handleSubmit}>
            <div>
              <div className={styles.contact_labels}>
                <label>
                  Nume*:
                  <input
                    type="text"
                    name="name"
                    placeholder="Nume"
                    onChange={(e) => handleChange(e)}
                  />
                </label>
                <label>
                  Prenume*:
                  <input
                    type="text"
                    name="prenume"
                    placeholder="Prenume"
                    onChange={(e) => handleChange(e)}
                  />
                </label>
              </div>
              <div className={styles.contact_labels}>
                <label>
                  Numarul de telefon*:
                  <input
                    type="text"
                    name="telefon"
                    placeholder="Numar de telefon"
                    onChange={(e) => handleChange(e)}
                  />
                </label>
                <label>
                  Alege Serviciul*:
                  <select>
                    <option disabled defaultChecked>
                      Alege Serviciul
                    </option>
                    <option name="serviciu" onChange={(e) => handleChange(e)}>
                      Informatii Generale
                    </option>
                  </select>
                </label>
              </div>
              <div className={styles.contact_message}>
                <label> Mesaj*</label>
                <textarea
                  rows={15}
                  placeholder="Mesajul tau"
                  name="mesaj"
                  onChange={(e) => handleChange(e)}></textarea>
              </div>
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
    </div>
  );
}

export default Contact;

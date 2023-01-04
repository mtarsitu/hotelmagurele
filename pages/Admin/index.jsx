import { useRouter } from "next/router";
import styles from "./styles.module.scss";
import { db } from "../../src/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useState } from "react";
import Link from "next/link";

function Admin() {
  let router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  function handleChange(e) {
    setPassword(e.target.value);
  }

  async function getData() {
    const querySnapshot = await getDocs(collection(db, "parola"));
    const results = [];
    querySnapshot.forEach((doc) => {
      results.push(doc.data());
    });
    
    if (results[0].password === password) {
      window.localStorage.setItem("logged", true);
      router.push("/dashboard");
    } else {
      setError(true);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    getData();
  }

  return (
    <>
      <div className={styles.admin_content}>
        <form onSubmit={handleSubmit} className={styles.formStyle}>
          <label className={styles.formLabel}>
            Password
            <input
              onChange={(e) => {
                handleChange(e);
              }}
              type="password"
              placeholder="Password"
              className={error ? styles.invalidInput : ""}
            />
            <input type="submit" />
          </label>
        </form>
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

export default Admin;

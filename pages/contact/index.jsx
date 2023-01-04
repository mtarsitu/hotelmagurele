import Map from "../../src/components/GoogleMap";
import Image from "next/image";
import { useEffect, useState } from "react";
import Contact from "../../src/components/Contact";
import LoadingComp from "../../src/components/Loading";
import useWindowSize from "../../src/hooks/useWindowSize";
import styles from "./styles.module.scss";
import {
  removeCursorLoading,
  cursorLoading,
} from "../../src/hooks/handleCursor";

function ContactPage() {
  const { width, height } = useWindowSize();
  const [loading, setLoading] = useState(true);
  const location = {
    address: "Comuna 1 Decembrie, Ilfov",
    lat: 44.422188,
    lng: 26.1353419,
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
      <div className={styles.contactToptContent}>
        {width !=='undefinec' && width && width < 400 ? (
          <Image
            objectFit="cover"
            objectPosition={-820}
            src={"images/proba.jpg"}
            alt={"contact"}
            width={width ? width : 300}
            height={height ? height : 300}
          />
        ) : (
          <Image
            objectFit="cover"
            src={"images/proba.jpg"}
            alt={"contact"}
            width={width ? width : 300}
            height={height ? height : 300}
          />
        )}

        <div className={styles.topCover}>
          <div className={styles.topTitle}>Contact</div>
          <div className={styles.topSubTitle}>
            Putem oferii orice detaliu necesar tie!
          </div>
          <div>
            <button
              className={styles.topButton}
              onClick={() => window.location.replace("#contactdiv")}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
      <div id="contactdiv"></div>
      <Contact />
      <div className={styles.mapContent}>
        <Map location={location} zoomLevel={19} />
      </div>
    </>
  );
}

export default ContactPage;

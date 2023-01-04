import styles from "./styles.module.scss";

function StepPreview() {
    return (
        <>
            <div className={styles.step_preview_container}>
                <div className={styles.step_preview_1}>
                    <div className={styles.step_preview_number}>
                        01.
                    </div>
                    <div className={styles.step_preview_title}>
                        Camera Single
                    </div>
                    <div className={styles.step_preview_text}>
                        Dacă produceți, distribuiți sau vindeți echipamente electrice și electronice, cum ar fi computere,
                        frigidere, telefoane mobile, legile UE și naționale vă cer să contribuiți la asigurarea că acestea
                        sunt eliminate și tratate în mod corespunzător. Înregistrarea la autoritățile naționale DEEE, trimiterea
                        unui raport periodic si gestionarea deșeurile de DEEE sunt parte din obligatiile producatorului.
                    </div>
                </div>
                <div className={styles.step_preview_2}>
                    <div className={styles.step_preview_number}>
                        02.
                    </div>
                    <div className={styles.step_preview_title}>
                        Camera Dubla
                    </div>
                    <div className={styles.step_preview_text}>
                        Aici interveniti dumneavoastra!
                        De ce trebuie să reciclăm deșeurile electronice și electrice?
                        Echipamentele electronice și electrice aruncate conțin materiale potențial dăunătoare
                        care poluează mediul și cresc riscurile pentru persoanele implicate în reciclarea deșeurilor electronice.
                        Pentru un aer mai curat, dumneavoastra ca si consumator, nu trebuie decat sa luati legatura cu noi.
                    </div>
                </div>
                <div className={styles.step_preview_3}>
                    <div className={styles.step_preview_number}>
                        03.
                    </div>
                    <div className={styles.step_preview_title}>
                        Camera Tripla
                    </div>
                    <div className={styles.step_preview_text}>
                        Este un dintre cei mai dificil pasi in reciclarea electronicelor.
                        In general electronicele contin:
                        <ul className={styles.stepper_ul}>
                            <li>Fier</li>
                            <li>Aluminiu</li>
                            <li>Cabluri</li>
                            <li>Sticla sau Geam</li>
                            <li>Placi cu circuite imprimate</li>
                        </ul>
                        Toate aceste materiale necesita tratarea si sortarea cu
                        mare atentie pentru a putea
                        fi refolosite.
                    </div>
                </div>
                <div className={styles.step_preview_4}>
                    <div className={styles.step_preview_number}>
                        04.
                    </div>
                    <div className={styles.step_preview_title}>
                        Apartament Superior
                    </div>
                    <div className={styles.step_preview_text}>
                        Folosirea de ambalaje din materiale reciclate și recuperarea unei cantității cât mai mari de produse
                        reciclabile este o prioritate pentru cele mai importante branduri, din cele mai variate domenii de activitate.
                        Toți producătorii de bunuri și materiale care pot fi obținute din deșeuri reciclabile ar trebui să educe
                        publicul și să contribuie mai mult la întreaga desfășurare a procesului de reciclare.
                    </div>
                </div>
            </div>
        </>
    );
};

export default StepPreview;
import styles from "./styles.module.scss";

export default function AnimateBtn(props) {
    return (
        <>
            <button className={styles.animated_button}>
                <div className={styles.icon}>{props.icon}</div>
                <div className={styles.btn_text}>{props.text}</div>
            </button>
        </>
    );
};
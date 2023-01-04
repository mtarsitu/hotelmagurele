import { BsPlusLg } from 'react-icons/bs';
import { AiOutlineMinus } from 'react-icons/ai';
import styles from "./styles.module.scss"

function TabIcon(props) {

    return (
        <>
            {
                props.icon ? (<><AiOutlineMinus className={styles.tab_span} /></>) : (<><BsPlusLg className={styles.tab_span} /></>)
            }
        </>
    );
};

export default TabIcon;
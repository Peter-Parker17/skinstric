import Image from "next/image";
import styles from "../Header.module.css";


export default function Sophisticated() {
  return (
    <>
      <div className={styles.containerSophisticated}>
        <div className={styles.sophisticatedtext1}> 
        Sophisticated
        </div>
        <div className={styles.sophisticatedtext1}>
          <br></br>skincare
        </div>
      </div>
    </>
  );
}

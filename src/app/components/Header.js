import Image from "next/image";
import Link from "next/link";
import styles from "../Header.module.css"

export default function Header() {
  return (
    <>
    <div>
      <button className={styles.button}>
        <Image src="/Skinstric_header.png" alt="button" width={70} height={12} />
      </button>
      <button className={styles.button}>
        <Image src="/location.png" alt="button" width={70} height={16} />
      </button>
    </div>
    <div>
    </div>
      <div className={styles.button__simple}>
        <button className={styles.button}>
        <Image src="/button-simple.png" alt="button" width={90} height={30} />
        </button>
      </div>
    </>
  );
}

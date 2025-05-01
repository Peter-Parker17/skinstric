import styles from "../Header.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Diamond() {
  return (
    <>
      <div className={styles.dottedline__right}>
        <Image
          src="/Rectangle_2778.png"
          alt="taketestbutton"
          width={300}
          height={600}
        />
      </div>
      <div className={styles.diamond__button}>
        <Link href="/pagetwo">
          TAKE TEST
          <Image
            src="/buttin-icon-shrunk1.png"
            alt="taketestbutton"
            width={50}
            height={50}
          />
        </Link>
      </div>
    </>
  );
}

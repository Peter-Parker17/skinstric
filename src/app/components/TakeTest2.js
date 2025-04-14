import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../Header.module.css";

export default function TakeTest2() {
  return (
    <>
      <div className={styles.rectangles__dotted2}>
        <Image src="/rombuses.png" alt="rectangle" width={350} height={650} />
      </div>
      <div className={styles.taketest__button}>
        <Link href="/page002">
        <Image
          src="/button-icon-text-expanded.png"
          alt="taketestbutton"
          width={160}
          height={80}
        />
        </Link>
      </div>
    </>
  );
}

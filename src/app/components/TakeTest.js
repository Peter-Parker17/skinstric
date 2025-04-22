import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../Header.module.css"

export default function TakeTest() {
  return (
    <>
      <div className={styles.rectangles__dotted2}>
        <Image
          src="/Rectangle_2778.png"
          alt="rectangle"
          width={300}
          height={600}
        />
      </div>
      <div className={styles.taketest__button}>
        <Link href="/pagetwo">
          <Image
            src="/button-icon-text-shrunk.png"
            alt="taketestbutton"
            width={125}
            height={45}
          />
        </Link>
      </div>
    </>
  );
}

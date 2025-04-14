import Header from "@/app/components/Header";
import styles from "../src/app/Header.module.css";
import Link from "next/link";
import Image from "next/image";
import Sophisticated2 from "@/app/components/Sophisticated2";
import SkinstricDev from "@/app/components/SkinstricDev";
import TakeTest2 from "@/app/components/TakeTest2";

export default function pagetwo() {
  console.log(styles);
  return (
    <>
      <div>
        <div>
          <button className={styles.button}>
            <Image
              src="/Skinstric_header.png"
              alt="button"
              width={70}
              height={12}
            />
          </button>
          <button className={styles.button}>
            <Image src="/location.png" alt="button" width={70} height={16} />
          </button>
        </div>
        <div className={styles.button__simple}>
          <button className={styles.button}>
            <Image
              src="/button-simple.png"
              alt="button"
              width={90}
              height={30}
            />
          </button>
        </div>
        <div className={styles.sophisticated}>
          <Sophisticated2 />
        </div>
        <div className={styles.skindev}>
          <SkinstricDev />
        </div>
        <div>
          <TakeTest2 />
        </div>
      </div>
    </>
  );
}

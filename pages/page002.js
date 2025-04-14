import Header from "@/app/components/Header";
import styles from "../src/app/Header.module.css";
import Link from "next/link";
import Image from "next/image";
import Sophisticated2 from "@/app/components/Sophisticated2";
import SkinstricDev from "@/app/components/SkinstricDev";
import TakeTest2 from "@/app/components/TakeTest2";
import BackButton from "@/app/components/BackButton";
import { useState } from "react";

export default function page002() {
  const [todo, setTodo] = useState({ name: "" });
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
        <Image
          src="/To start analysis.png"
          alt="text"
          width={120}
          height={12}
        />
        <div className={styles.nameandloc}>
          <div className={styles.clicktotype}>
            <Image
              src="/click to type.png"
              alt="clicktext"
              width={110}
              height={12}
            />
          </div>
          <ul className={styles.ulloc}>
            <li className={styles.liloc}>
              <input
                onChange={(e) => setTodo({ ...todo, name: e.target.value })}
                type="text"
              ></input>
                <Image
                  src="/Introduce Yourself.png"
                  alt="intro"
                  width={400}
                  height={70}
                />
            </li>
          </ul>
        </div>
        <p>{JSON.stringify(todo)}</p>
      </div>
      <div className={styles.rombusescenter}>
        <Image
          src="/rombusescenter.png"
          alt="3dotted line"
          width={700}
          height={700}
        />
      </div>
      <div className={styles.button}>
        <BackButton />
      </div>
    </>
  );
}

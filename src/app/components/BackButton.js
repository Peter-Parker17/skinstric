import Image from "next/image";
import styles from "/src/app/Header.module.css";
import Link from "next/link";

export default function BackButton() {
  return (
    <>
      <div>
        <Link href="/pagetwo">
          <Image
            src="/backbutton-icon-text-shrunk.png"
            alt="backbutton"
            width={100}
            height={45}
          />
        </Link>
      </div>
    </>
  );
}

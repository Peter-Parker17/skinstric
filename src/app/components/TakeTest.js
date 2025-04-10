import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function TakeTest() {
  return (
    <>
      <div className="rectangles__dotted2">
        <Image
          src="/Rectangle_2778.png"
          alt="rectangle"
          width={300}
          height={600}
        />
      </div>
      <div className="taketest__button">
        {/* <button className="button"> */}
        <Link href="/pagetwo">
          <Image
            src="/button-icon-text-shrunk.png"
            alt="taketestbutton"
            width={125}
            height={45}
          />
        </Link>
        {/* </button> */}
      </div>
    </>
  );
}

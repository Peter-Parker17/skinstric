import Image from "next/image";

export default function BackButton() {
  return (
    <>
      <div>
        <button className="button">
          <Image
            src="/backbutton-icon-text-shrunk.png"
            alt="backbutton"
            width={110}
            height={40}
          />
        </button>
      </div>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <>
    <div>
      <button className="button">
        <Image src="/Skinstric_header.png" alt="button" width={70} height={12} />
      </button>
    </div>
    <div>
      <button className="button">
        <Image src="/location.png" alt="button" width={70} height={16} />
      </button>
    </div>
    <div>
    </div>
      <div className="button__simple">
        <button className="button">
        <Image src="/button-simple.png" alt="button" width={90} height={30} />
        </button>
      </div>
    </>
  );
}

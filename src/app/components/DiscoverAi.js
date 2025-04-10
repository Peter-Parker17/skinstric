import Image from "next/image";

export default function DiscoverAi() {
  return (
    <>
      <div className="rectangles__dotted">
        <Image
          src="/Rectangle_2779.png"
          alt="rectangle"
          width={300}
          height={600}
        />
      </div>
      <div className="discoverAi__button">
        <button className="button">
          <Image
            src="/1button-icon-text-shrunk.png"
            alt="arrow"
            width={150}
            height={45}
          />
        </button>
      </div>
    </>
  );
}

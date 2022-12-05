import Image from "next/image";
import React from "react";

type bannerProp = {
  urlQuery: string;
};

function BannerImage(props: bannerProp) {
  const { urlQuery } = props;

  // console.log("banner props: ", props);

  let banner = "";
  if (urlQuery.includes("one-piece")) banner = "/onePieceBanner.png";
  if (urlQuery.includes("naruto")) banner = "/narutoBanner.png";
  if (urlQuery.includes("demon-slayer")) banner = "/dmSlayerBanner.png";
  if (urlQuery.includes("attack-on-titan")) banner = "/aotBanner2.jpg";
  if (urlQuery.includes("my-hero-academia")) banner = "/mhaBanner.png";

  return (
    <div className="bannerContainer">
      <Image
        fill
        objectFit="contain"
        src={banner}
        alt="banner image of collection"
      />
    </div>
  );
}

export default BannerImage;

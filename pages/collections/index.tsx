import React from "react";
import BannerImage from "../../components/BannerImage";
import Link from "next/link";

function index() {
  //using same banner images for now due to laziness and full time job.
  return (
    <div>
      <Link href="/collections/one-piece">
        <BannerImage urlQuery={"one-piece"} />
      </Link>
      <Link href="/collections/naruto">
        <BannerImage urlQuery={"naruto"} />
      </Link>
      <Link href="/collections/demon-slayer">
        <BannerImage urlQuery={"demon-slayer"} />
      </Link>
      <Link href="/collections/attack-on-titan">
        <BannerImage urlQuery={"attack-on-titan"} />
      </Link>
      <Link href="/collections/my-hero-academia">
        <BannerImage urlQuery={"my-hero-academia"} />
      </Link>
    </div>
  );
}

export default index;

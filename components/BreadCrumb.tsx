import React, { useState, useEffect } from "react";
import styles from "../styles/ProductPage.module.css";
import { useRouter } from "next/router";
import Link from "next/link";

function BreadCrumb() {
  const [breadCrumbs, setBreadCrumbs] = useState<crumbSchema[]>();

  const router = useRouter();

  interface crumbSchema {
    breadCrumb: string;
    href: string;
  }

  const convertBreadcrumb = (string: string) => {
    return string
      .replace(/-/g, " ")
      .replace(/oe/g, "ö")
      .replace(/ae/g, "ä")
      .replace(/ue/g, "ü")
      .toUpperCase();
  };

  useEffect(() => {
    if (router) {
      let linkPath = router.asPath.split("/");
      linkPath.shift();

      // above returns array
      let pathArray = linkPath.map((path, i) => {
        return {
          breadCrumb: path,
          href: "/" + linkPath.slice(0, i + 1).join("/"),
        };
      });

      setBreadCrumbs(pathArray);
    }
  }, [router]);

  if (!breadCrumbs) {
    return null;
  }

  return (
    <nav className={styles.breadNav} aria-label="breadcrumbs">
      <ol className={styles["bread-crumbs"]}>
        <li>
          <Link href="/">HOME</Link>
        </li>
        {breadCrumbs.map((breadCrumb, i) => {
          return (
            <li key={breadCrumb.href}>
              <Link href={breadCrumb.href}>
                {"> "}
                {convertBreadcrumb(breadCrumb.breadCrumb)}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default BreadCrumb;

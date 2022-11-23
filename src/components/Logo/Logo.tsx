import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Logo = () => (
  <Link to="/">
    <StaticImage
      placeholder="blurred"
      width={79}
      height={38}
      src="../../images/Landie.png"
      alt="logo"
      style={{ zIndex: 1 }}
    />
  </Link>
);

export default Logo;

import React from "react";

import tudoBemLogo from "../../assets/tudobem-logo.svg";
import { Container } from "./Header.css";

const Header = () => {
  return (
    <Container>
      <img src={tudoBemLogo} alt="tudobem" width={150} height={70} />
    </Container>
  );
};

export default Header;

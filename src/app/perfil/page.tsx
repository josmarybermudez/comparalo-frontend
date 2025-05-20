"use client";

import { Container, ImageLogo } from "./styles";
import LogoSVG from "../../../public/logo_comparalo.svg";

export default function Page() {
  return (
    <Container>
      <p>Perfil</p>
      <ImageLogo
        src={LogoSVG}
        alt="comparalo - mejores precios, un solo lugar"
      />
    </Container>
  );
}

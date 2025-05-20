import styled from "styled-components";
import Image from "next/image";
import { Palette } from "constants/Palette";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(${Palette.AccentLight}, ${Palette.Secondary});
`;

export const ImageLogo = styled(Image)`
  width: 200px;
  height: 200px;
`;

export const Title = styled.h1`
  font-size: 18px;
  width: 100%;
  text-align: left;
  color: gray;
`;

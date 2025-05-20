import styled from "styled-components";
import Image from "next/image";
import { Button, Typography } from "@mui/material";
import { Palette } from "constants/Palette";

export const Container = styled("div")`
  height: 400px;
  width: 250px;
  background-color: ${Palette.BgMedium};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  border-radius: 8px;
  overflow: hidden;
`;

export const ItemImage = styled(Image)`
  width: 250px;
  height: 250px;
  object-fit: cover;
`;

export const TextWrapper = styled("div")`
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Title = styled(Typography)`
  color: rgb(21, 21, 21);
  font-size: 22px;
  line-height: 30px;
  font-weight: 600;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const BodyText = styled(Typography)`
  color: rgb(21, 21, 21);
  font-size: 16px;
  line-height: 22px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const StyledButton = styled(Button)`
  width: 100%;
  margin-top: 10px;
  padding: 8px 12px;
  color: white;
  font-size: 14px;
  font-weight: bold;
  border-radius: 20px;
  text-transform: none;
  border: none;
  background-color: ${Palette.Primary};
`;

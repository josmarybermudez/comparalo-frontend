import styled from "styled-components";
import Image from "next/image";
import { IconButton, InputBase, Menu } from "@mui/material";

export const ImageLogo = styled(Image)`
  width: 80px;
  height: 80px;
`;

export const Container = styled("div")`
  height: 80px;
  width: 100vw;
  position: sticky;
  top: 0;
  & div > .wrapper {
    width: 100%;
    background: white;
  }
`;

export const Search = styled("div")(() => ({
  position: "relative",
  backgroundColor: "white",
  borderRadius: "8px",
  outline: "2px solid #96baff",
  outlineOffset: "4px",
  marginLeft: 0,
  width: "100%",
}));

export const SearchIconWrapper = styled("div")(() => ({
  padding: "10px",
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "& svg path": {
    color: "#1a3a6f",
  },
}));

export const StyledInputBase = styled(InputBase)(() => ({
  color: "#0a0a0a",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: "2px 10px 2px 40px",
    width: "100%",
  },
}));

export const MenuWrapper = styled(Menu)(() => ({
  position: "absolute",
  top: "55px",
  "& div": {
    borderRadius: "8px",
  },
}));

export const Button = styled(IconButton)(() => ({
  color: "#0a0a0a",
  "& svg path": {
    color: "#1a3a6f",
  },
}));

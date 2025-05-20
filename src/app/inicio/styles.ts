import styled from "styled-components";
import Image from "next/image";
import { Button, FormControl, TextField } from "@mui/material";
import { Palette } from "constants/Palette";

export const Container = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  background: linear-gradient(${Palette.AccentLight}, ${Palette.Secondary});
  position: absolute;
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

export const FormWrapper = styled(FormControl)`
  width: 400px;
  min-height: 550px;
  padding: 20px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 12px;
`;

export const StyledButton = styled(Button)`
  width: 100%;
  margin-top: 10px;
  padding: 8px 12px;
  color: white;
  font-size: 14px;
  font-weight: bold;
  border-radius: 20px;
  text-transform: capitalize;
  border: none;
  background-color: ${Palette.Primary};

  &.secondary {
    background-color: green;
  }

  &:hover {
    background-color: ${Palette.PrimaryDark};
  }

  &.Mui-disabled {
    background-color: grey;
    color: rgb(15, 15, 15);
    cursor: not-allowed;
    pointer-events: all !important;

    &:hover {
      background-color: grey;
    }
  }
`;

export const Input = styled(TextField)`
  width: 100%;
  /* background-color: aliceblue; */

  & > div {
    background-color: aliceblue;
  }
`;

export const FooterMessageWrapper = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const HelperText = styled.p`
  font-size: 14px;
  line-height: 18px;
  text-align: left;
  color: black;
  /* color: gray; */
`;

export const HelperButton = styled.button`
  font-size: 14px;
  line-height: 18px;
  text-align: left;
  padding: 5px 8px;
  border-radius: 4px;
  background-color: green;
  cursor: pointer;
  border: none;

  &.secondary {
    background-color: ${Palette.Primary};
  }
`;

export const NameWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
`;

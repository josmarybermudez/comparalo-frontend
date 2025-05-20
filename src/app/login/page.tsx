"use client";

import { registerUser } from "../../register";
import { logIn } from "../../login";

import {
  Container,
  Title,
  ImageLogo,
  FormWrapper,
  StyledButton,
  Input,
  HelperButton,
  HelperText,
  FooterMessageWrapper,
  NameWrapper,
} from "./styles";
import LogoSVG from "../../../public/logo_comparalo.svg";
import { useState } from "react";
import { isValidEmail, LoginObjectType, RegisterObjectType } from "app/helpers";
import { useRouter } from "next/navigation";
import { Routes } from "constants/Routes";

export type LoginObject = {
  email: string; // todo Agregar validación de mail real - investigar
  emailError: boolean;
  password: string;
  passwordError: boolean;
};

export type RegisterObject = {
  name: string;
  lastname: string;
  email: string;
  emailError: boolean;
  password: string;
  passwordConfirmation: string;
  passwordError: boolean;
};

export default function Page() {
  const router = useRouter();
  const [formLoginValues, setFormLoginValues] = useState<LoginObject>({
    email: "",
    emailError: false,
    password: "",
    passwordError: false,
  });
  const [formRegisterValues, setFormRegisterValues] = useState<RegisterObject>({
    name: "",
    lastname: "",
    email: "",
    emailError: false,
    password: "",
    passwordConfirmation: "",
    passwordError: false,
  });
  const [isLoginView, setLoginView] = useState<boolean>(true);
  const handleSubmitLogin = async () => {
    const email = formLoginValues.email;
    const password = formLoginValues.password;

    try {
      const userData = await logIn(email, password);
      console.log("Log in successful:", userData);
      router.push(Routes.home);
      setFormLoginValues({
        email: "",
        emailError: false,
        password: "",
        passwordError: false,
      });
    } catch (error) {
      console.error("Log in failed:", error.message);
    }
  };
  const handleLogin = () => {
    const isValidMail = isValidEmail({ email: formLoginValues.email });
    const passwordHasValue = formLoginValues.password.length > 1;
    if (!isValidMail) {
      setFormLoginValues((prev) => ({
        ...prev,
        emailError: true,
      }));
    }
    if (!passwordHasValue) {
      setFormLoginValues((prev) => ({
        ...prev,
        passwordError: true,
      }));
    }
    if (isValidMail && passwordHasValue) {
      setFormLoginValues((prev) => ({
        ...prev,
        emailError: false,
        passwordError: false,
      }));
      handleSubmitLogin();
    }
  };

  const handleChange = ({
    field,
    value,
  }: {
    field: keyof LoginObject | keyof RegisterObject;
    value: string;
  }) => {
    if (isLoginView) {
      setFormLoginValues((prev) => ({
        ...prev,
        [field]: value,
      }));
    } else {
      setFormRegisterValues((prev) => ({
        ...prev,
        [field]: value,
      }));
    }
  };

  const handleSubmitRegister = async () => {
    const name = formRegisterValues.name + formRegisterValues.lastname;
    const email = formRegisterValues.email;
    const password = formRegisterValues.password;

    try {
      const userData = await registerUser(name, email, password);
      console.log("Registration successful:", userData);
      router.push(Routes.home);
      setFormRegisterValues({
        name: "",
        lastname: "",
        email: "",
        emailError: false,
        password: "",
        passwordConfirmation: "",
        passwordError: false,
      });
    } catch (error) {
      console.error("Registration failed:", error.message);
    }
  };

  const handleRegister = () => {
    const isValidMail = isValidEmail({ email: formRegisterValues.email });
    const passwordHasValue = formRegisterValues.password.length > 1;
    const passwordConfirmationHasValue =
      formRegisterValues.passwordConfirmation.length > 1;
    const passwordsMatch =
      formRegisterValues.password === formRegisterValues.passwordConfirmation;
    if (!isValidMail) {
      setFormRegisterValues((prev) => ({
        ...prev,
        emailError: true,
      }));
    }
    if (
      (!passwordHasValue && !passwordConfirmationHasValue) ||
      !passwordsMatch
    ) {
      setFormRegisterValues((prev) => ({
        ...prev,
        passwordError: true,
      }));
    }
    if (isValidMail && passwordHasValue && passwordConfirmationHasValue) {
      setFormRegisterValues((prev) => ({
        ...prev,
        emailError: false,
        passwordError: false,
      }));
      handleSubmitRegister();
    }
  };

  const isRegisterButtonEnabled = //todo improve disabled button
    !!formRegisterValues.password &&
    !!formRegisterValues.passwordConfirmation &&
    formRegisterValues.password === formRegisterValues.passwordConfirmation;

  return (
    <Container>
      <ImageLogo
        src={LogoSVG}
        alt="comparalo - mejores precios, un solo lugar"
      />
      <FormWrapper>
        {isLoginView ? (
          <>
            <Title>Login</Title>
            <Input
              required
              id="outlined-required"
              label="Email"
              type="email"
              error={formLoginValues.emailError}
              value={formLoginValues.email}
              // helperText="Email invalido"
              aria-errormessage="Email invalido"
              onChange={(e) =>
                handleChange({
                  field: LoginObjectType.EMAIL,
                  value: e.target.value,
                })
              }
            />
            <Input
              id="outlined-password-input"
              label="Contrasena *"
              type="password"
              autoComplete="current-password"
              value={formLoginValues.password}
              error={formLoginValues.passwordError}
              // helperText="Contrasena necesaria"
              onChange={(e) =>
                handleChange({
                  field: LoginObjectType.PASSWORD,
                  value: e.target.value,
                })
              }
            />
            <StyledButton type="button" onClick={handleLogin}>
              Entrar
            </StyledButton>
            <FooterMessageWrapper>
              <HelperText>No tienes cuenta?</HelperText>
              <HelperButton onClick={() => setLoginView(false)}>
                Registrate aca!
              </HelperButton>
            </FooterMessageWrapper>
          </>
        ) : (
          <>
            <Title>Registrarse</Title>
            <NameWrapper>
              <Input
                required
                id="outlined-required"
                label="Nombre"
                type="name"
                value={formRegisterValues.name}
                onChange={(e) =>
                  handleChange({
                    field: RegisterObjectType.NAME,
                    value: e.target.value,
                  })
                }
              />
              <Input
                required
                id="outlined-required"
                label="Apellido"
                type="lastname"
                value={formRegisterValues.lastname}
                onChange={(e) =>
                  handleChange({
                    field: RegisterObjectType.LASTNAME,
                    value: e.target.value,
                  })
                }
              />
            </NameWrapper>
            <Input
              required
              id="outlined-required"
              label="Email"
              type="mail"
              value={formRegisterValues.email}
              error={formRegisterValues.emailError}
              // helperText="Email invalido"
              aria-errormessage="Email invalido"
              onChange={(e) =>
                handleChange({
                  field: RegisterObjectType.EMAIL,
                  value: e.target.value,
                })
              }
            />
            <Input
              id="outlined-password-input"
              label="Contrasena *"
              type="password"
              autoComplete="current-password"
              value={formRegisterValues.password}
              error={formRegisterValues.passwordError}
              onChange={(e) =>
                handleChange({
                  field: RegisterObjectType.PASSWORD,
                  value: e.target.value,
                })
              }
            />
            <Input
              id="outlined-password-input"
              label="Contrasena Confirmacion *"
              type="password"
              autoComplete="current-password"
              value={formRegisterValues.passwordConfirmation}
              error={formRegisterValues.passwordError}
              onChange={(e) =>
                handleChange({
                  field: RegisterObjectType.PASSWORD_CONFIRMATION,
                  value: e.target.value,
                })
              }
            />
            <StyledButton
              className="secondary"
              type="button"
              onClick={() => handleRegister()}
              disabled={!isRegisterButtonEnabled}
            >
              Registrarse
            </StyledButton>
            <FooterMessageWrapper>
              <HelperText>Ya tienes cuenta?</HelperText>
              <HelperButton
                className="secondary"
                onClick={() => setLoginView(true)}
              >
                Inicia sesion aca!
              </HelperButton>
            </FooterMessageWrapper>
          </>
        )}
      </FormWrapper>
    </Container>
  );
}

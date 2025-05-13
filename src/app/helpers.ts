export const isValidEmail = ({ email }: { email: string }) => {
  //todo check
  const regex = /^[a-zA-Z0–9._%+-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
};
export enum LoginObjectType {
  EMAIL = "email",
  PASSWORD = "password",
}

export enum RegisterObjectType {
  NAME = "name",
  LASTNAME = "lastname",
  EMAIL = "email",
  PASSWORD = "password",
  PASSWORD_CONFIRMATION = "passwordConfirmation",
}

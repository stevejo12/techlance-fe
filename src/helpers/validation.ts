import { IUserDataErrorMessage } from "../types/user.type";

const errorMessage = {
  email: "Please enter an email address",
  password: "Please enter a password"
} as IUserDataErrorMessage;

const validateIsEmptyString = (key: string, value: string): string => {
  let errorMsg = "";

  if (value === "") {
    errorMsg = errorMessage[key];
  }

  return errorMsg;
};

const validateEntry = (obj: IUserDataErrorMessage): IUserDataErrorMessage => {
  const errorMsg = JSON.parse(JSON.stringify(errorMessage));

  Object.keys(obj).forEach((k) => {
    if (obj[k] !== "") {
      errorMsg[k] = "";
    }
  });

  return errorMsg;
};

export { validateEntry, validateIsEmptyString };

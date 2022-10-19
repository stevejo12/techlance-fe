interface IError {
  email: string;
  password: string;
}

const errorMessage = <IError>{
  email: "Please enter an email address",
  password: "Please enter a password"
};

const validateIsEmptyString = (key: string, value: string): string => {
  let errorMsg = "";

  if (value === "") {
    errorMsg = errorMessage[key];
  }

  return errorMsg;
};

const setAllVariablesInObjectToEmptyString = (obj: Object) => {
  Object.keys(obj).forEach((k) => {
    if (obj[k] && typeof obj[k] === "object") {
      return setAllVariablesInObjectToEmptyString(obj[k]);
    }
    obj[k] = "";
  });
};

const validateEntry = (obj: IError): IError => {
  const errorMsg = JSON.parse(JSON.stringify(errorMessage));

  Object.keys(obj).forEach((k) => {
    if (obj[k] !== "") {
      errorMsg[k] = "";
    }
  });

  return errorMsg;
};

export { validateEntry, validateIsEmptyString };

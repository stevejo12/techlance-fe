interface IUserData {
  email: string;
  password: string;
}

// different to make sure all variable
// in error all string to store message
interface IUserDataErrorMessage {
  email: string;
  password: string;
}

export { IUserData, IUserDataErrorMessage };

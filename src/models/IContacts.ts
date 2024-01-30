export interface IPhone {
  phone: string;
}

export interface IEmail {
  email: string;
}

export interface IContacts {
  contacts: {
    phones: [IPhone];
    emails: [IEmail];
  };
}

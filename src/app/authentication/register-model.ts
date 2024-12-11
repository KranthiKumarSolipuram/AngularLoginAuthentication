interface Name {
    firstname?: string;
    lastname?: string;
  }
  
  interface Address {
    city?: string;
    street?: string;
    number?: number;
    zipcode?: string;
    geolocation: {
      lat?: string;
      long?: string;
    };
  }
  
  export interface IRegister {
    email: string;
    username: string;
    password: string;
    name: Name;
    address: Address;
    phone?: string;
  }
  
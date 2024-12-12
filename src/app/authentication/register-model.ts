// interface Name {
//     firstname?: string;
//     lastname?: string;
//   }
  
//   interface Address {
//     city?: string;
//     street?: string;
//     number?: number;
//     zipcode?: string;
//     geolocation: {
//       lat?: string;
//       long?: string;
//     };
//   }
  
//   export interface IRegister {
//     email: string;
//     username: string;
//     password: string;
//     name: Name;
//     address: Address;
//     phone?: string;
//   }
  
export interface IRegister{
    email: string,
    username: string,
    password: string,
    name:{
        firstname?: string,
        lastname?: string
    },
    address:{
        city: string,
        street: string,
        number: number,
        zipcode: string,
        geolocation:{
            lat: string,
            long: string
        }
    },
    phone: string
}

export interface ILogin{
    username :string,
    password : string
}
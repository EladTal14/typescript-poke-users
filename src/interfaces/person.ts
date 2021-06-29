import {Countries} from "../enums/countries";

export interface Person {
    birthDay: { date: string, age: number };
    gender: string;
    location?: ILocation;
    login: ILogin;
    name: IName;

    showAccount(): number;

    deposit(amount: number): void;
}

export interface IName {
    // title: string;
    first: string;
    last: string;
}

// export interface IPicture {
//     // large: string;
//     // medium: string;
//     getPic(): string;
// }

export interface ILocation {
    city: string;
    // coordinates: { latitude: string, longitude: string };
    country: Countries,
    // postcode: number,
    // state: string;
    // street: { name: string, number: number };
    // timezone: { description: string, offset: string };
}

export interface ILogin {
    // md5: string;
    password: string;
    // salt: string;
    // sha1: string;
    // sha256: string;
    // username: string;
    // uuid: string;
}

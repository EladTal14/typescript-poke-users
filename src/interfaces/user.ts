export interface User {
    cell: string;
    dob: { date: string, age: number };
    email: string;
    gender: string;
    id: { name: string, value: string };
    location: location;
    login: login
    name: name;
    nat: string;
    phone: string;
    picture: picture;
    registered: { age: number, date: string };
}

interface name {
    title: string;
    first: string;
    last: string;
}

interface picture {
    large: string;
    medium: string;
    thumbnail: string;
}

interface location {
    city: string;
    coordinates: { latitude: string, longitude: string };
    country: string,
    postcode: number,
    state: string;
    street: { name: string, number: number };
    timezone: { description: string, offset: string };
}

type login = {
    md5: string;
    password: string;
    salt: string;
    sha1: string;
    sha256: string;
    username: string;
    uuid: string;
}
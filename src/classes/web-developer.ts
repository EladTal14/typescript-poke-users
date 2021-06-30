import {Developer} from "./developer";
import {ILocation} from "../interfaces/person";

export class WebDeveloper extends Developer {
    static title = 'Web Developer';


    constructor(private date: string, public age: number, public gender: string,
                private password: string, private firstName: string,
                private lastName: string, public location: ILocation, protected picture: string
    ) {
        super({date, age}, gender, {password}, {first: firstName, last: lastName}, picture, location);
    }

    get showDate() {
        return this.date
    }

    get showAge() {
        return this.age;
    }

    get echoMe() {
        return `I'm ${this.nameData.first} ${this.nameData.last} and a ${WebDeveloper.title}`;
    }
}
import {ILocation, ILogin, IName, Person} from "../interfaces/person";

export class Developer implements Person {
    static title = 'developer';
    protected _id: number | undefined;
    private cash: number;
    public name: IName = {first: '', last: ''};
    constructor(public birthDay: { date: string, age: number },
                public gender: string,
                public login: ILogin,
                public nameData: IName,
                protected picture?: string,
                public location?: ILocation,
    ) {
        this.cash = 0
    }

    get shoutName() {
        return `${this.nameData.first}`
    }

    get echoMe() {
        return `I'm ${this.nameData.first} ${this.nameData.last} and a ${Developer.title}`;
    }

    get bringPic(): string {
        return this.picture ?? 'no pic';
    }

    get id(): number {
        return this._id as number;
    };

    set id(id: number) {
        this._id = id;
    };

    showAccount(): number {
        return this.cash;
    }

    deposit(amount: number): void {
        this.cash += amount;
    };
};

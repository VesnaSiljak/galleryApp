export class User {
    public id: number;
    public name: string;
    public username: string;
    public email: string;
    public phone: string;
    public website: string;
    public address: Address;
    public company: Company;
}

export class Address {
    public street: string;
    public suite: string;
    public city: string;
    public zipcode: string;
    public geo: Geo;
}

export class Geo {
    public lat: string;
    public lng: string;
}

export class Company {
    public name: string;
    public catchPhrase: string;
    public bs: string;
}
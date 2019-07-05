export class User {
    constructor(apiUser) {
        this.id = apiUser.id;
        this.name = apiUser.name;
        this.userName = apiUser.userName;
        this.email = apiUser.email;
        this.phone = apiUser.phone;
        this.website = apiUser.website;
        this.city = apiUser.address.city;
        this.street = apiUser.address.street;
        this.zipcode = apiUser.address.zipcode;
        this.catchPhrase = apiUser.company.catchPhrase;

    }

}
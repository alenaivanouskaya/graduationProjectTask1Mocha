import { RegistrationForm } from "../RegistrationForm";
import { expect } from "chai";
import { ageError, emailError, emptyError, phoneNumberError, repeatPasswordError } from "../fixtures/errorMessages";
import {
    userTomAgeNeg,
    userTomEmailNeg,
    userTomFNameNeg,
    userTomPasswordNeg,
    userTomSNameNeg,
    userTomPhoneNumber,
    userTomPassword,
} from "../fixtures/userData";

describe("7 negative tests:", function () {
    it("1. First name", function () {
        const userTom = new RegistrationForm();
        expect(() => (userTom.firstName = userTomFNameNeg)).to.throw(emptyError);
    });
    it("2. Second name", function () {
        const userTom = new RegistrationForm();
        expect(() => (userTom.secondName = userTomSNameNeg)).to.throw(emptyError);
    });
    it("3. Email", function () {
        const userTom = new RegistrationForm();
        expect(() => (userTom.email = userTomEmailNeg)).to.throw(emailError);
    });
    it("4. Phone number", function () {
        const userTom = new RegistrationForm();
        expect(() => (userTom.phoneNumber = userTomPhoneNumber.slice(1))).to.throw(phoneNumberError);
    });
    it("5. Age", function () {
        const userTom = new RegistrationForm();
        expect(() => (userTom.age = userTomAgeNeg)).to.throw(ageError);
    });
    it("6. Password", function () {
        const userTom = new RegistrationForm();
        expect(() => (userTom.password = userTomPasswordNeg)).to.throw(emptyError);
    });
    it("7. Repeat password", function () {
        const userTom = new RegistrationForm();
        expect(() => (userTom.repeatPassword = userTomPassword.slice(1))).to.throw(repeatPasswordError);
    });
});

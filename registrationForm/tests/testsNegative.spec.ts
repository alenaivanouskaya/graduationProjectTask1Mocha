import { RegistrationForm } from "../RegistrationForm";
import { expect } from "chai";
import {
    AGE_ERROR,
    EMAIL_ERROR,
    EMPTY_ERROR,
    PHONE_NUMBER_ERROR,
    REPEAT_PASSWORD_ERROR,
} from "../fixtures/errorMessages";
import {
    USER_TOM_AGE_NEG,
    USER_TOM_EMAIL_NEG,
    USER_TOM_F_NAME_NEG,
    USER_TOM_PASSWORD_NEG,
    USER_TOM_S_NAME_NEG,
    USER_TOM_PHONE_NUMBER,
    USER_TOM_PASSWORD,
} from "../fixtures/userData";

describe("7 negative tests:", function () {
    it("1. First name", function () {
        const userTom = new RegistrationForm();
        expect(() => (userTom.firstName = USER_TOM_F_NAME_NEG)).to.throw(EMPTY_ERROR);
    });
    it("2. Second name", function () {
        const userTom = new RegistrationForm();
        expect(() => (userTom.secondName = USER_TOM_S_NAME_NEG)).to.throw(EMPTY_ERROR);
    });
    it("3. Email", function () {
        const userTom = new RegistrationForm();
        expect(() => (userTom.email = USER_TOM_EMAIL_NEG)).to.throw(EMAIL_ERROR);
    });
    it("4. Phone number", function () {
        const userTom = new RegistrationForm();
        expect(() => (userTom.phoneNumber = USER_TOM_PHONE_NUMBER.slice(1))).to.throw(PHONE_NUMBER_ERROR);
    });
    it("5. Age", function () {
        const userTom = new RegistrationForm();
        expect(() => (userTom.age = USER_TOM_AGE_NEG)).to.throw(AGE_ERROR);
    });
    it("6. Password", function () {
        const userTom = new RegistrationForm();
        expect(() => (userTom.password = USER_TOM_PASSWORD_NEG)).to.throw(EMPTY_ERROR);
    });
    it("7. Repeat password", function () {
        const userTom = new RegistrationForm();
        expect(() => (userTom.repeatPassword = USER_TOM_PASSWORD.slice(1))).to.throw(REPEAT_PASSWORD_ERROR);
    });
});

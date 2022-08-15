import assert from "assert";
import { RegistrationForm } from "../RegistrationForm";
import { DEFAULT_ERROR } from "../fixtures/errorMessages";
import {
    USER_TOM_AGE,
    USER_TOM_EMAIL,
    USER_TOM_F_NAME,
    USER_TOM_PASSWORD,
    USER_TOM_PHONE_NUMBER,
    USER_TOM_S_NAME,
} from "../fixtures/userData";

describe("7 positive tests:", function () {
    it("1. First name", function () {
        const userTom = new RegistrationForm();
        userTom.firstName = USER_TOM_F_NAME;
        assert.equal(userTom.firstName, USER_TOM_F_NAME, DEFAULT_ERROR);
    });
    it("2. Second name", function () {
        const userTom = new RegistrationForm();
        userTom.secondName = USER_TOM_S_NAME;
        assert.equal(userTom.secondName, USER_TOM_S_NAME, DEFAULT_ERROR);
    });
    it("3. Email", function () {
        const userTom = new RegistrationForm();
        userTom.email = USER_TOM_EMAIL;
        assert.equal(userTom.email, USER_TOM_EMAIL, DEFAULT_ERROR);
    });
    it("4. Phone number", function () {
        const userTom = new RegistrationForm();
        userTom.phoneNumber = USER_TOM_PHONE_NUMBER;
        assert.equal(userTom.phoneNumber, USER_TOM_PHONE_NUMBER, DEFAULT_ERROR);
    });
    it("5. Age", function () {
        const userTom = new RegistrationForm();
        userTom.age = USER_TOM_AGE;
        assert.equal(userTom.age, USER_TOM_AGE, DEFAULT_ERROR);
    });
    it("6. Password", function () {
        const userTom = new RegistrationForm();
        userTom.password = USER_TOM_PASSWORD;
        assert.equal(userTom.password, USER_TOM_PASSWORD, DEFAULT_ERROR);
    });
    it("7. Repeat password", function () {
        const userTom = new RegistrationForm();
        userTom.password = USER_TOM_PASSWORD;
        userTom.repeatPassword = USER_TOM_PASSWORD;
        assert.equal(userTom.repeatPassword, USER_TOM_PASSWORD, DEFAULT_ERROR);
    });
});

import assert from "assert";
import { RegistrationForm } from "../RegistrationForm";
import { defaultError } from "../fixtures/errorMessages";
import {
    userTomAge,
    userTomEmail,
    userTomFName,
    userTomPassword,
    userTomPhoneNumber,
    userTomSName,
} from "../fixtures/userData";

describe("7 positive tests:", function () {
    it("1. First name", function () {
        const userTom = new RegistrationForm();
        userTom.firstName = userTomFName;
        assert.equal(userTom.firstName, userTomFName, defaultError);
    });
    it("2. Second name", function () {
        const userTom = new RegistrationForm();
        userTom.secondName = userTomSName;
        assert.equal(userTom.secondName, userTomSName, defaultError);
    });
    it("3. Email", function () {
        const userTom = new RegistrationForm();
        userTom.email = userTomEmail;
        assert.equal(userTom.email, userTomEmail, defaultError);
    });
    it("4. Phone number", function () {
        const userTom = new RegistrationForm();
        userTom.phoneNumber = userTomPhoneNumber;
        assert.equal(userTom.phoneNumber, userTomPhoneNumber, defaultError);
    });
    it("5. Age", function () {
        const userTom = new RegistrationForm();
        userTom.age = userTomAge;
        assert.equal(userTom.age, userTomAge, defaultError);
    });
    it("6. Password", function () {
        const userTom = new RegistrationForm();
        userTom.password = userTomPassword;
        assert.equal(userTom.password, userTomPassword, defaultError);
    });
    it("7. Repeat password", function () {
        const userTom = new RegistrationForm();
        userTom.password = userTomPassword;
        userTom.repeatPassword = userTomPassword;
        assert.equal(userTom.repeatPassword, userTomPassword, defaultError);
    });
});

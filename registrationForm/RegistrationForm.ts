import {
    AGE_ERROR,
    EMAIL_ERROR,
    EMPTY_ERROR,
    PHONE_NUMBER_ERROR,
    REPEAT_PASSWORD_ERROR,
} from "./fixtures/errorMessages";

export class RegistrationForm {
    private _userFirstName: string = "";
    private _userSecondName: string = "";
    private _userEmail: string = "";
    private _userPhoneNumber: string = "";
    private _userAge: number = 0;
    private _userPassword: string = "";
    private _userRepeatPassword: string = "";

    get firstName() {
        return this._userFirstName;
    }
    get secondName() {
        return this._userSecondName;
    }
    get email() {
        return this._userEmail;
    }
    get phoneNumber() {
        return this._userPhoneNumber;
    }
    get age() {
        return this._userAge;
    }
    get password() {
        return this._userPassword;
    }
    get repeatPassword() {
        return this._userRepeatPassword;
    }

    set firstName(value: string) {
        value = value.trim();
        if (value === "") {
            throw EMPTY_ERROR;
        }
        this._userFirstName = value;
    }
    set secondName(value: string) {
        value = value.trim();
        if (value === "") {
            throw EMPTY_ERROR;
        }
        this._userSecondName = value;
    }
    set email(value: string) {
        if (!value.includes("@")) {
            throw EMAIL_ERROR;
        }
        this._userEmail = value;
    }
    set phoneNumber(value: string) {
        if (!value.includes("+")) {
            throw PHONE_NUMBER_ERROR;
        }
        this._userPhoneNumber = value;
    }
    set age(value: number) {
        if (value === 0) {
            throw AGE_ERROR;
        }
        this._userAge = value;
    }
    set password(value: string) {
        if (value === "") {
            throw EMPTY_ERROR;
        }
        this._userPassword = value;
    }
    set repeatPassword(value: string) {
        if (value != this._userPassword) {
            throw REPEAT_PASSWORD_ERROR;
        }
        this._userRepeatPassword = value;
    }
}

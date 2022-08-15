import { ageError, emailError, emptyError, phoneNumberError, repeatPasswordError } from "./fixtures/errorMessages";

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
            throw emptyError;
        }
        this._userFirstName = value;
    }
    set secondName(value: string) {
        value = value.trim();
        if (value === "") {
            throw emptyError;
        }
        this._userSecondName = value;
    }
    set email(value: string) {
        if (!value.includes("@")) {
            throw emailError;
        }
        this._userEmail = value;
    }
    set phoneNumber(value: string) {
        if (!value.includes("+")) {
            throw phoneNumberError;
        }
        this._userPhoneNumber = value;
    }
    set age(value: number) {
        if (value === 0) {
            throw ageError;
        }
        this._userAge = value;
    }
    set password(value: string) {
        if (value === "") {
            throw emptyError;
        }
        this._userPassword = value;
    }
    set repeatPassword(value: string) {
        if (value != this._userPassword) {
            throw repeatPasswordError;
        }
        this._userRepeatPassword = value;
    }
}

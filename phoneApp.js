class Observer {
    constructor(phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
    printPhoneNumber() {
        console.log(this.phoneNumber);
    }
    showNumberDialling() {
        console.log(`Now Dialling ${this.phoneNumber}`);
    }
    update(context) {
        if (context === this.phoneNumber) {
            this.printPhoneNumber();
            this.showNumberDialling();
        }
    }
}

class Subject {
    constructor() {
        this.observers = new Set();
    }

    add(observer) {
        this.observers.add(observer);
    }

    remove(observer) {
        this.observers.delete(observer);
    }

    notify(context) {
        for (const observer of this.observers) {
            observer.update(context);
        }
    }
}

class Telephone {
    constructor() {
        //list of our phone number.
        this.phoneNumber = new Set();
        // Our subject class for managing our observer list
        this.subject = new Subject();
    }
    AddPhoneNumber(phoneNumber) {
        this.phoneNumber.add(phoneNumber);
        const observePhoneNumberAdd = new Observer(phoneNumber);
        this.subject.add(observePhoneNumberAdd);
    }
    RemovePhoneNumber(phoneNumber) {
        this.phoneNumber.delete(phoneNumber);
        const observePhoneNumberRemoval = new Observer(phoneNumber);
        this.subject.remove(observePhoneNumberRemoval);
    }
    DialPhoneNumber(phoneNumber) {
        this.subject.notify(phoneNumber);
    }
}

const telephoneApp = new Telephone();

telephoneApp.AddPhoneNumber(33333);
telephoneApp.AddPhoneNumber(111111);
telephoneApp.RemovePhoneNumber(222222);
telephoneApp.AddPhoneNumber(2347023232);
telephoneApp.DialPhoneNumber(2347023232);

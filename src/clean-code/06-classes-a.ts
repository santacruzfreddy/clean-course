(() => {

    type Gender = 'M' | 'F';

    class Person {
        //opcion 1
        // public name: string;
        // public gender: Gender;
        // public birthDate: Date;

        // constructor(name: string, gender: Gender, birthDate: Date) {
        //     this.name = name;
        //     this.gender = gender;
        //     this.birthDate = birthDate;
        // }

        constructor(
            public name: string,
            public gender: Gender,
            public birthDate: Date
        ) { }
    }

    class User extends Person {
        public lastAccess: Date;
        constructor(
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birthDate: Date
        ) {
            super(name, gender, birthDate);
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }

    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthDate: Date) {
            super(email, role, name, gender, birthDate);
        }
    }

    const newPerson = new Person('Freddy', 'M', new Date('1988-02-27'))
    console.log({ newPerson });

    const userSettings = new UserSettings(
        '/user/home',
        '/home',
        'freddy.santacruz@gmial.com',
        'Admin',
        'Freddy',
        'M',
        new Date('1988-02-27'));

    //console.log({ userSettings, areCredentialsValid: userSettings.checkCredentials()})

})();
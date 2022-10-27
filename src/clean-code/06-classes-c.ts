(() => {

    type Gender = 'M' | 'F';

    interface PersonProperties {
        name: string;
        gender: Gender;
        birthDate: Date;

    }

    class Person {

        public name: string;
        public gender: Gender;
        public birthDate: Date;
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
            { name, gender, birthDate }: PersonProperties
        ) {
            this.name = name;
            this.gender = gender;
            this.birthDate = birthDate;
        }
    }

    interface UserProperties {
        email: string;
        role: string;
        name: string;
        gender: Gender;
        birthDate: Date;
    }

    class User extends Person {
        public lastAccess: Date;
        public email: string;
        public role: string;

        constructor(
            { email, role, name, gender, birthDate }: UserProperties
        ) {
            super({ name, gender, birthDate });

            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials() {
            return true;
        }
    }

    interface UserSettingsProperties {
        workingDirectory: string;
        lastOpenFolder: string;
        email: string;
        role: string;
        name: string;
        gender: Gender;
        birthDate: Date;
    }

    class UserSettings extends User {
        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor(
            { workingDirectory,
                lastOpenFolder,
                email,
                role,
                name,
                gender,
                birthDate }: UserSettingsProperties) {
            super({ email, role, name, gender, birthDate });
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }

    //const newPerson = new Person('Freddy', 'M', new Date('1988-02-27'))
    //console.log({ newPerson });

    const userSettings = new UserSettings(
        {
            workingDirectory: '/user/home',
            lastOpenFolder: '/home',
            email: 'freddy.santacruz@gmial.com',
            role: 'Admin',
            name: 'Freddy',
            gender: 'M',
            birthDate: new Date('1988-02-27')
        });

    
        console.log({ userSettings })

})();
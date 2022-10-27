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
    }

    class User {
        public lastAccess: Date;
        public email: string;
        public role: string;

        constructor(
            { email, role }: UserProperties
        ) {
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials() {
            return true;
        }
    }

    interface SettingsProperties {
        workingDirectory: string;
        lastOpenFolder: string;
    }

    class Settings {
        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor(
            { workingDirectory,
                lastOpenFolder,
            }: SettingsProperties) {
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
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

    class UserSettings {

        public person: Person;
        public user: User;
        public settings: Settings;

        constructor(
            {
                workingDirectory,
                lastOpenFolder,
                email,
                role,
                name,
                gender,
                birthDate }: UserSettingsProperties) {
            {
                this.person = new Person({ name, gender, birthDate });
                this.user = new User({ email, role });
                this.settings = new Settings({ workingDirectory, lastOpenFolder });
            }
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


    //console.log({ userSettings, areCredentialsValid: userSettings.checkCredentials()})

})();
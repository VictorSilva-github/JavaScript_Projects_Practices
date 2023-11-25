function userValidate(users, user) {
    if (!Array.isArray(users)) {
        return "ERROR! Not an Array!"
    }

    if (typeof user !== "object") {
        return "Not found, cannot create!"
    }

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(/^[a-zA-Z0-9._%+-]+@gmail\.com$/);
    };

    const validatePassword = (password) => {
        // Regex pattern: no minimo 1 letra, 1 numero, > 6 characters
        const regexPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

        // .test é um method que checa se a regular expression e o PASSWORD
        // colocado é correspondente ao padrao (regexPattern)
        return regexPattern.test(password);
    };

    const { name, email, password } = user;
    const errors = [];

    if (!name || !email || !password) {
        // return `Preencha todos os campos!`
        errors.push("You should complete the form!");
    }
    if (name.length < 6) {
        // return "name should be more than 6 characters."
        errors.push("Name should be more than 6 characters.");
    }
    if (typeof email !== "string" || email === "" || !validateEmail(email)) {
        // return "Email invalid!!!"
        errors.push("Email invalid! it should be with @gmail.com");
    }

    if (!validatePassword(password)) {
        // return "password invalid"
        errors.push("Password invalid!");
    }

    return errors;
}


module.exports = {userValidate};
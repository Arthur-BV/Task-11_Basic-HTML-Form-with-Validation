const validateData = function () {
    console.log(arguments);

    let name = document.getElementById(arguments[0]).value;
    let email = document.getElementById(arguments[1]).value;

    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !pattern.test(email)) {
        alert("Please enter valid name and email address");
    } else {
        console.log("Name: ", name);
        console.log("E-Mail: ", email);
    }
};

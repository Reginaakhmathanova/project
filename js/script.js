document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector(".login");
    const submitButton = loginForm.querySelector(".btn");

    submitButton.addEventListener("click", (event) => {
        event.preventDefault(); 

        const login = loginForm.querySelector("#name").value;
        const password = loginForm.querySelector("#password").value;

        console.log("Логин:", login);
        console.log("Пароль:", password);

        alert(`Логин: ${login}\nПароль: ${password}`);
    });
});

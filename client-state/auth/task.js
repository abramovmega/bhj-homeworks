const signIn = document.querySelector(`#signin`);
const form = document.querySelector(`#signin__form`);
const welcome = document.querySelector(`#welcome`);
const userId = document.querySelector(`#user_id`);
const btn = document.querySelector(`#signout__btn`);

function remove() {
    btn.addEventListener(`click`, () => {
        delete localStorage.id;
        welcome.classList.remove(`welcome_active`);
        signIn.classList.add(`signin_active`);

    });
}

function send() {
    if (localStorage.id) {
        welcome.classList.add(`welcome_active`);
        userId.textContent = localStorage.id;
        
    } else {
        welcome.classList.remove(`welcome_active`);
        signIn.classList.add(`signin_active`);
        form.addEventListener(`submit`, (e) => {
            const formData = new FormData(form);
            const xhr = new XMLHttpRequest();
            xhr.open(`post`, `https://students.netoservices.ru/nestjs-backend/auth`);
            xhr.responseType = `json`;
            xhr.addEventListener(`readystatechange`, () => {
                if (xhr.readyState !== xhr.DONE) {
                    return;
                }
                if (xhr.response.success === false) {
                    alert(`Неверный логин/пароль`);
                } else {
                    signIn.classList.remove(`signin_active`);
                    localStorage.id = xhr.response.user_id;
                    welcome.classList.add(`welcome_active`);
                    userId.textContent = localStorage.id;
                    remove();
                }
            });
            xhr.send(formData);
            e.preventDefault();
            form.reset();
        });
    }
}
send();
remove();
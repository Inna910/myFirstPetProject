

function signIn () {
    const loginInput = document.getElementById('login');
    const passwordInput = document.getElementById('password');
    const currentUser = {
        login: loginInput.value,
        password: passwordInput.value}
    // TODO: implement getting a user from the LocalStorage and checking the presence

    if(false) {

    } else {
       createUser(currentUser) 
    }
}


function createUser (user) {
    const userString = JSON.stringify(user);
    localStorage.setItem(user.login, userString)
}
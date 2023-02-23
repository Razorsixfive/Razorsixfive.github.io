// firebase login script
let login = document.querySelector('.login');
let create = document.querySelector('.create');
let container = document.querySelector('.container');

login.onclick = function () {
    container.classList.add('signinForm');
}
create.onclick = function () {
    container.classList.remove('signinForm');
}

function visible() {
    const togglepassword = document.querySelector('.togglepassword');
    const openeye = document.querySelector('#openeye');
    const closeeye = document.querySelector('#closeeye');
    var password = document.querySelector('.pass');

    if (password.type === 'password') {
        password.type = "text";
        openeye.style.display = "block";
        closeeye.style.display = "none";
    }
    else {
        password.type = "password";
        openeye.style.display = "none";
        closeeye.style.display = "block";
    }
}


const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

const form = document.getElementById('login-form');
const username = document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const validCredentials = [
        { username: 'user1', password: 'pass1' },
        { username: 'user2', password: 'pass2' }
    ];

    for (const credential of validCredentials) {
        if (credential.username === username.value && credential.password === password.value) {
            window.location.href = '/home';
        } else {
            alert('Invalid username or password');
        }
    }
});




document.querySelector("h3").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 30);

}

                                //<script>
                                //    const form = document.getElementById('login-form');
                                //    const username = document.getElementById('username');
                                //    const password = document.getElementById('password');

                                //    form.addEventListener('submit', function (event) {
                                //        event.preventDefault();

                                //        const validCredentials = [
                                //            { username: 'user1', password: 'pass1' },
                                //            { username: 'user2', password: 'pass2' }
                                //        ];

                                //        for (const credential of validCredentials) {
                                //            if (credential.username === username.value && credential.password === password.value) {
                                //                window.location.href = '/home';
                                //            } else {
                                //                alert('Invalid username or password');
                                //            }
                                //        }
                                //    });
                                //</script>
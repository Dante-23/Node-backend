const registerDOM = document.querySelector('.register')
const loginDOM = document.querySelector('.login')
const registerAlert = document.querySelector('.register-alert')
const loginAlert = document.querySelector('.login-alert')

const regUsername = document.querySelector('.rusername')
const regPassword = document.querySelector('.rpassword')
// console.log(registerAlert);

registerDOM.addEventListener('submit', async (e) => {
    e.preventDefault()
    const username = regUsername.value;
    const password = regPassword.value;
  
    try {
      await axios.post('/user', {
        "username": username,
        "password": password
      })
    //   showTasks()
    //   taskInputDOM.value = ''
      registerAlert.style.display = 'block'
      registerAlert.textContent = `success, user added`
      registerAlert.classList.add('text-success')
    } catch (error) {
      registerAlert.style.display = 'block'
      registerAlert.innerHTML = `error, please try again`
      console.log(error);
    }
    setTimeout(() => {
        registerAlert.style.display = 'none'
        registerAlert.classList.remove('text-success')
    }, 3000)
  })

loginDOM.addEventListener('submit', async (e) => {
    e.preventDefault()
    // const name = taskInputDOM.value
    console.log("Login button clicked");
  
    try {
    //   await axios.post('/', { name })
    //   showTasks()
    //   taskInputDOM.value = ''
      loginAlert.style.display = 'block'
      loginAlert.textContent = `success, user added`
      loginAlert.classList.add('text-success')
    } catch (error) {
    //   formAlertDOM.style.display = 'block'
    //   formAlertDOM.innerHTML = `error, please try again`
    //   console.log(error);
    }
    setTimeout(() => {
        loginAlert.style.display = 'none'
        loginAlert.classList.remove('text-success')
    }, 3000)
  })
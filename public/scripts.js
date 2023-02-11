
async function postData(email, password) {
  let userInfo = {
    Email: email,
    Password: password
    }
  const response = await fetch("http://localhost:3000/submitForm", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({Email: email, Password: password })
  });

  return response.json();
}



const submit_reg = document.getElementById("submit_register");

submit_reg.addEventListener('click', (event) => {
  event.preventDefault();
  
  const email = document.getElementById("reg_email").value;
  const password = document.getElementById("reg_password").value;

  postData(email, password)
    .then(response => console.log(response))
    .catch(error => console.error(error));
});


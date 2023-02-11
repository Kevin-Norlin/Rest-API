
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
  console.log(JSON.stringify({Email: email, Password: password }))
  return response.json();
}



const submit_reg = document.getElementById("submit_register");


submit_reg.addEventListener('click', (event) => {
  
  
  const email = document.getElementById("reg_email").value;
  const password = document.getElementById("reg_password").value;

  postData(email, password)
    .then(response => console.log(response))
    .catch(error => window.alert("email already exists"));
});



const submit_regs = [document.getElementById("reg_form1"),document.getElementById("reg_form2")]
submit_regs.forEach(x => { x.addEventListener("submit", (event) => {
  event.preventDefault()
  submit_reg.click()
})

})

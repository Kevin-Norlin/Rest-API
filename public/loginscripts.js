
async function postData_register(email, password) {
  let userInfo = {
    Email: email,
    Password: password
    }
  const response = await fetch("http://localhost:3000/submitForm_register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({Email: email, Password: password })
  });
  
  
  if (response.ok) {
    const jsonResponse = await response.json();
    return jsonResponse;
  }
  else {
    const jsonResponse = await response.json();
    throw new Error(jsonResponse.Error)
  }
 
}


async function verifyData_login(email, password) {
  let userInfo = {
    Email: email,
    Password: password
    }
  const response = await fetch("http://localhost:3000/submitForm_login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({Email: email, Password: password })
  });
  
  
  if (response.ok) {
    const jsonResponse = await response.json();
    return jsonResponse;
  }
  else {
    const jsonResponse = await response.json();
    throw new Error(jsonResponse.Error);
  }
} 



const submit_reg = document.getElementById("submit_register");


submit_reg.addEventListener('click', async (event) => {
  
  
  const email = document.getElementById("reg_email").value;
  const password = document.getElementById("reg_password").value;
  
  try {
    const response = await postData_register(email,password);
    console.log(response);
    window.alert("Created an account!")
  }
  catch (error) {
    
    console.log(error);
    window.alert("Email already exists")
  }
})



const submit_regs = [document.getElementById("reg_form1"),document.getElementById("reg_form2")]
submit_regs.forEach(x => { x.addEventListener("submit", (event) => {
  event.preventDefault()
  submit_reg.click()
})

})



const submit_login = document.getElementById("submit_login");

submit_login.addEventListener('click', async(event) => {
  
  
  const email = document.getElementById("login_email").value;
  const password = document.getElementById("login_password").value;

  try {
    const response = await verifyData_login(email,password);
    console.log(response);
    window.alert("Login succesfull!") // Redirect later!
    window.location.replace("/login-successful")
  }
  catch (error){
    console.log(error);
    window.alert("Wrong Email or Password...");
  }

})


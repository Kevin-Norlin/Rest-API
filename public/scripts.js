const form = document.getElementById("myForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;

  postData(username, email)
    .then(response => console.log(response))
    .catch(error => console.error(error));
});

async function postData(username, email) {
  const response = await fetch("https://example.com/api/submitForm", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, email })
  });

  return response.json();
}
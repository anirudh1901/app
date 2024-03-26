// Function to handle user signup
function signUp(username, password, fullName, contactNumber) {
  // Create a customer object
  const customer = {
    username: username,
    password: password,
    full_name: fullName,
    contact_number: contactNumber,
  };

  // Send a POST request to the signup endpoint
  fetch("/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(customer),
  })
    .then((response) => response.text())
    .then((data) => {
      alert(data); // Alert the result from the server
    })
    .catch((error) => {
       .error("Error:", error);
    });
}

// Function to handle user login
function login(username, password) {
  // Create a customer object
  const customer = {
    username: username,
    password: password,
  };

  // Send a GET request to the login endpoint
  fetch("/login", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(customer),
  })
    .then((response) => response.json())
    .then((isValidUser) => {
      if (isValidUser) {
        alert("Login successful!");
      } else {
        alert("Invalid username or password.");
      }
    })
    .catch((error) => {
       .error("Error:", error);
    });
}

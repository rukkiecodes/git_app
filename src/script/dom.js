function show_mobile_nav() {
  document.querySelector(".mobile_nav").classList.toggle("hide_mobile_nav");
}

function submit_input_username() {
  const input_username = document.querySelector(".input_username").value;
  if (input_username != "") {
    localStorage.setItem("graph_username", input_username);
    location.replace("profile.html");
  } else {
    console.log("please enter a user name");
  }
}
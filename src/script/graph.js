import { body, base_url, headers } from "./fetchdata.js";

window.onload = () => {
  fetch(base_url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(body),
  })
    // RESPONSE
    .then((res) => res.json())
    // DATAS
    .then((fetched_data) => {
      document.querySelector(".name h1").textContent =
        fetched_data.data.user.name;

      document.querySelector(".name p").textContent =
        fetched_data.data.user.twitterUsername;

      document.querySelector(".bio").textContent = fetched_data.data.user.bio;

      document.querySelectorAll(".user_profile_pic").forEach((node) => {
        node.setAttribute("src", fetched_data.data.user.avatarUrl);
      });

      document.querySelectorAll(".user_profile_pic").forEach((node) => {
        node.setAttribute("alt", fetched_data.data.user.twitterUsername);
      });

      document.querySelector(".results p .first_b").textContent =
        fetched_data.data.user.repositories.edges.length;

      fetched_data.data.user.repositories.edges.forEach((data) => {
        document.querySelector(
          ".repo_root"
        ).innerHTML += `<div class="repositories">
        <div class="left">
          <a href="${data.node.url}">${data.node.name}</a>
  
          <p class="caption">
            ${data.node.description ? data.node.description : ""}
          </p>
  
          <div class="repo_details">
            <div class="lang">
              <div style="background: ${
                data.node.primaryLanguage.color
              };" class="dot"></div>
              <p>${data.node.primaryLanguage.name}</p>
            </div>
  
            <div class="stars">
              <span class="mdi mdi-star-outline"></span>
              ${data.node.stargazerCount}
            </div>
  
            <div class="branch">
              <span class="mdi mdi-source-branch"></span>
              ${data.node.forkCount}
            </div>
  
            <p>Updated on ${moment(data.node.updatedAt).format(
              "MMMM DD YYYY"
            )}</p>
          </div>
        </div>
        <div class="right">
          <button>
            <span class="mdi mdi-star-outline"></span>
            Star
          </button>
        </div>
      </div>`;
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

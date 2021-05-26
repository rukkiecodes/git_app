import { token } from "./token.js"

const github_data = {
  token: token,
  username: "rukkiecodes",
};

const username = localStorage.getItem("graph_username");

const base_url = "https://api.github.com/graphql";

const headers = {
  "Content-Type": "application/json",
  Authorization: `bearer ${github_data.token}`,
};

export { github_data, username, base_url, headers };

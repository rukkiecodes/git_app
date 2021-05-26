import { username, base_url , headers} from "./github_data.js";

const body = {
  query: `
          query {
            user(login: ${JSON.stringify(username)}) {
              repositories(
                first: 100
              ) {
                edges {
                  node {
                    id
                  }
                }
              }
            }
          }
        `,
};

fetch(base_url, {
  method: "POST",
  headers: headers,
  body: JSON.stringify(body),
})
  .then((res) => res.json())
  .then((fetched_data) => {
    const repo_length = fetched_data.data.user.repositories.edges.length;
    document.querySelector(".chip").textContent = repo_length;
  })
  .catch((err) => {
    console.log(err);
  });

import { github_data, username, base_url, headers } from "./github_data.js";

const body = {
  query: `
        query {
          user(login: ${JSON.stringify(username)}) {
            bio
            avatarUrl
            name
            twitterUsername
            createdAt
            repositories(
              first: 20
              orderBy: { field: CREATED_AT, direction: DESC }
            ) {
              edges {
                node {
                  name
                  url
                  updatedAt
                  forkCount
                  description
                  forkCount
                  stargazerCount
                  primaryLanguage {
                    name
                    color
                  }
                }
              }
            }
          }
        }
      `,
};

export { github_data, body, base_url, headers };

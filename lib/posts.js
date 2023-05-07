import graphqlRequest from "./graphqlRequest";

export async function getAllPosts() {
  const query = {
    query: `
        query NewQuery {
          posts {
            nodes {
              slug
              title
              excerpt
              featuredImage {
                node {
                  mediaDetails {
                    file
                    sizes {
                      sourceUrl
                      width
                      height
                    }
                  }
                }
              }
            }
          }
          }
            `,
  };

  const resJson = await graphqlRequest(query);
  const allPosts = resJson.data.posts.nodes;

  return allPosts;
}

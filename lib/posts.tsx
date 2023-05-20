interface Post {
  slug: string;
  title: string;
  excerpt: string;
  featuredImage: {
    node: {
      mediaDetails: {
        file: string;
        sizes: {
          sourceUrl: string;
          width: number;
          height: number;
        };
      };
    };
  };
}

interface yoastSeo {
  metaDesc: string;
  title: string;
  schema: {
    raw: string;
  };
  opengraphTitle: string;
  opengraphDescription: string;
  opengraphUrl: string;
  opengraphImage: {
    mediaItemUrl: string;
  };
  opengraphType: string;
}


export default async function graphqlRequest(query: any) {
  const url = "https://blog.charu.app/graphql";
  const headers = { "Content-Type": "application/json" };

  const res = await fetch(url, {
    headers,
    method: "POST",
    body: JSON.stringify(query),
  });

  const resJson = await res.json();
  return resJson;
}

export async function getAllPosts(): Promise<Post[]> {
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
  const allPosts: Post[] = resJson.data.posts.nodes;

  return allPosts;
}

export async function getSinglePost(slug: string): Promise<Post> {
  const query = {
    query: `
      query getSinglePost {
        post(id: "${slug}", idType: SLUG) {
          content(format: RENDERED)
          date
          excerpt(format: RENDERED)
          modified
          slug
          title(format: RENDERED)
          databaseId
          featuredImage {
            node {
              mediaDetails {
                sizes {
                  sourceUrl
                  width
                  height
                }
              }
            }
          }
          categories {
            nodes {
              name
              slug
            }
          }
        }
      }
    `,
  };

  const resJson = await graphqlRequest(query);
  const singlePost: Post = resJson.data.post;

  return singlePost;
}

export async function getYoastSeo(pageType:string = 'post', slug: string = '/'): Promise<any> {
  const query = {
    query: `query getSeo {
      ${pageType}(
        id: "${slug}"
        idType: SLUG
      ) {
        seo {
          metaDesc
          title
          schema {
            raw
          }
          opengraphTitle
          opengraphDescription
          opengraphUrl
          opengraphImage {
            mediaItemUrl
          }
          opengraphType
        }
      }
    } `,
  };

  const resJson = await graphqlRequest(query);
  const yoastSeo: yoastSeo = resJson.data.post.seo;

  return yoastSeo;
}

export async function getPostSlugs(): Promise<{ slug: string }[]> {
  const query = {
    query: `
      query getPostSlugs {
        posts {
          nodes {
            slug
          }
        }
      }
    `,
  };

  const resJson = await graphqlRequest(query);
  const slugs: { slug: string }[] = resJson.data.posts.nodes;

  return slugs;
}

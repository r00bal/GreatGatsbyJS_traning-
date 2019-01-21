const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  //   const result = await graphql(`
  //     {
  //       allMarkdownRemark {
  //         edges {
  //           node {
  //             frontmatter {
  //               slug
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `)
  //   return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
  //     createPage({
  //       path: `/posts${node.frontmatter.slug}`,
  //       component: path.resolve('./src/components/postLayout.js'),
  //       context: {
  //         slug: node.frontmatter.slug,
  //       },
  //     })
  //   })

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: `/posts${node.frontmatter.slug}`,
          component: path.resolve('./src/components/postLayout.js'),
          context: {
            slug: node.frontmatter.slug,
          },
        })
      })
      resolve()
    })
  })
}

import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'
import styled from 'styled-components'

const POST_ARCHIVE_QUERY = graphql`
  query BlogPostArchive {
    allMarkdownRemark(
      limit: 5
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`

const Archivelist = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  a {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 0.8rem;
    text-decoration: underline;
    color: #524763;
  }
`

const Archive = () => (
  <StaticQuery
    query={POST_ARCHIVE_QUERY}
    render={({ allMarkdownRemark }) => (
      <>
        <aside>
          <h3>Archive</h3>
          <Archivelist>
            {console.log(allMarkdownRemark.edges)}
            {allMarkdownRemark.edges.map(edge => (
              <li li key={edge.node.frontmatter.slug}>
                <Link
                  class="read-more"
                  to={`/posts${edge.node.frontmatter.slug}`}
                >
                  {edge.node.frontmatter.title}
                </Link>
              </li>
            ))}
          </Archivelist>
        </aside>
      </>
    )}
  />
)

export default Archive

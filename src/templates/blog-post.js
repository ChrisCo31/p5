import React from "react"
import { Link, graphql } from "gatsby"

import Menu from "../components/Menu";
import Banner2 from "../components/Banner2";
import Footer from "../components/Footer";
import Layout3 from "../components/layout3"


class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <div className="containerA">
        <Banner2 />
        <Layout3 location={this.props.location} title={siteTitle}>
          <Menu />
          <div className="allart">
          <div className="ressource">
                <p className="dateArticle">
                  {post.frontmatter.date}
                </p>
                <p className="auteurArticle">
                  {post.frontmatter.auteur}
                </p>
                <ul className="tagArticle">
                  <li>{post.frontmatter.tag1}</li>
                  <li>{post.frontmatter.tag2}</li>
                  <li>{post.frontmatter.tag3}</li>
                </ul>
            </div>  
            <div className="art">
              <h1>{post.frontmatter.title}</h1>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
            <div className="paginate">
              <ul>
                <li>
                  {previous && (
                    <Link to={previous.fields.slug} rel="prev">
                      ← {previous.frontmatter.title}
                    </Link>
                  )}
                </li>
                <li>
                  {next && (
                    <Link to={next.fields.slug} rel="next">
                      {next.frontmatter.title} →
                    </Link>
                  )}
                </li>
              </ul>
            </div>
            </div>
          <Footer />
        </Layout3>
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "DD MM, YYYY")
        description
        auteur
        tag1
        tag2
        tag3
      }
    }
  }
`

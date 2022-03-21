import * as React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import * as styles from '../styles/layout.module.css'

const Layout = ({ children }) => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }  
  `)

  return (
    <main>
      <nav>
        <ul className={styles.navLinks}>
          <li className={styles.navLinkItem}>
            <Link to="/" className={`${styles.meraLink} ${styles.meraColor}`}>
            {data.site.siteMetadata.title}
            </Link>
          </li>
          <li className={styles.navLinkItem}>
            <Link to="/about" className={styles.navLinkText}>
              About
            </Link>
          </li>
          <li className={styles.navLinkItem}>
            <Link to="/team" className={styles.navLinkText}>
              Team
            </Link>
          </li>
          <li className={styles.navLinkItem}>
            <Link to="/contact" className={styles.navLinkText}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
  
      {children}
    </main>
  )
}

export default Layout
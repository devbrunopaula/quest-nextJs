import React, {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import {Breadcrumbs} from 'nextjs-breadcrumbs'
import Link from 'next/link'

import styles from '../../styles/BreadcrumbsLinks.module.scss'
const convertBreadcrumb = (string) => {
  return string
    .replace(/-/g, ' ')
    .replace(/oe/g, 'ö')
    .replace(/ae/g, 'ä')
    .replace(/ue/g, 'ü')
    .toUpperCase()
}
function BreadcrumbLinks() {
  const router = useRouter()
  const [breadcrumbs, setBreadcrumbs] = useState(null)
  const [history, setHistory] = useState('')

  const saveUrlHistory = (pathArray) => {
    console.log('history', history)

    setHistory(pathArray[0].breadcrumb)
    console.log({history})
  }

  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split('/')
      linkPath.shift()

      const pathArray = linkPath.map((path, i) => {
        console.log('path', path)
        return {
          path: path.toUpperCase(),
          href: '/' + linkPath.slice(0, i + 1).join('/'),
        }
      })

      setBreadcrumbs(pathArray)
      saveUrlHistory(pathArray)
    }
  }, [router])

  if (!breadcrumbs) {
    return null
  }
  console.log(breadcrumbs)
  return (
    <>
      <div className={styles.breadcrums_links}>
        <div>
          <Link href={``}>
            <a className={styles.fixedLink}>MYQUEST </a>
          </Link>
        </div>

        <div>
          <Link href={breadcrumbs[0].href}>
            <a className={styles.historyLink}>
              {' '}
              <span className={styles.divider}> /</span> {breadcrumbs[0].path}
            </a>
          </Link>
        </div>
      </div>
    </>
  )
}

export default BreadcrumbLinks

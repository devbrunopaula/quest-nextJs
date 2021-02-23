import React from 'react'
import Link from 'next/link'
import {
  FaQuestionCircle,
  FaShoppingCart,
  FaBell,
  FaUserCircle,
} from 'react-icons/fa'

import styles from '../../styles/Nav.module.scss'
const Nav = () => {
  return (
    <>
      <div>
        <nav className={styles.topBar}>
          <div className={styles.logo}>
            <img
              src='https://myquest.questdiagnostics.com/assets/images/quest-logo.svg'
              alt=''
            />
          </div>
          <div className={styles.rightBar}>
            <Link href='/' tag='a'>
              <a>
                <FaQuestionCircle className={styles.link_icons} />
              </a>
            </Link>
            <Link href='/' tag='a'>
              <a>
                <FaShoppingCart className={styles.link_icons} />
              </a>
            </Link>
            <Link href='/' tag='a'>
              <a>
                <FaBell className={styles.link_icons} />
              </a>
            </Link>
            <Link href='/' tag='a'>
              <a>
                <FaUserCircle className={styles.link_icons} />
              </a>
            </Link>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Nav

import React from 'react'
import styles from '../../styles/SubNav.module.scss'
import MyQuest from './MyQuest'
function SubNav() {
  return (
    <div className={styles.subNav}>
      <MyQuest />
    </div>
  )
}

export default SubNav

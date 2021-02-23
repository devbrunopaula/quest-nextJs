import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {BsGrid3X3GapFill, BsChevronRight} from 'react-icons/bs'
import {FaChevronDown, FaChevronRight} from 'react-icons/fa'
import styles from '../../styles/MyQuest.module.scss'

function MyQuest() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  console.log(router)
  const showSubMenu = () => {
    const s = {
      height: '90px',
      width: '350px',
      display: `${isOpen === false ? 'none' : 'block'}`,
      //   display: 'block',
      position: 'absolute',
      zIndex: 2,
      background: '#f8f8f8',
    }

    return s
  }

  const handleClick = (e) => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className={styles.myquest}>
        <div className={styles.leftMenu}>
          <div>
            <BsGrid3X3GapFill className={styles.gridIcon} />
          </div>
          <div className={styles.myquest_logo}>
            <img
              src='https://myquest.questdiagnostics.com/assets/images/myquest-logo.svg'
              alt=''
            />
          </div>
          <div>
            <FaChevronDown
              onClick={(e) => handleClick(e)}
              className={styles.arrow_down}
            />
          </div>
        </div>

        <div className={styles.menuLinks}>
          <Link href='/dashboard'>
            <a>ACTIVITY</a>
          </Link>

          <Link href='/appointments'>
            <a>APPOINTMENTS</a>
          </Link>
          <Link href='#'>
            <a>RESULTS</a>
          </Link>
          <Link href='#'>
            <a>PAY BILLS</a>
          </Link>
          <Link href='#'>
            <a>MESSAGES</a>
          </Link>
        </div>
      </div>
      <div style={showSubMenu()} onMouseLeave={() => setIsOpen(false)}>
        <div className={styles.innerWrapper}>
          <div className={styles.questDirect}>
            <Link href='/appointments'>
              <a>QuestDirect</a>
            </Link>
            <FaChevronRight />
          </div>
          <div className={styles.myquestLink}>
            <Link href='/appointments'>
              <a>MyQuest</a>
            </Link>
            <FaChevronRight />
          </div>
        </div>
      </div>
    </>
  )
}

export default MyQuest

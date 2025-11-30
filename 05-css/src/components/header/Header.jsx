import React from 'react'
import styles from './header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
     <h3 className={styles.heading}>Sanket Coding School </h3>
     <div className={styles.btn}>
      <button>Login</button>
      <button>Signup</button>
     </div>
    </div>
  )
}

export default Header

import type { NextPage } from 'next'
import Head from 'next/head';
import { FormEvent } from 'react';

import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  function handleLogin(e: FormEvent) {
    e.preventDefault();
    alert("Clicou!")
  }


  return (
    <>
      <Head>
        <title>Clonebook - Log in or Sign in</title>
      </Head>
      <div className={styles.loginPage}>
        <main className={styles.frameLogin}>

          <div className={styles.logo}>
            <h1>clonebook</h1>
            <p>Connect with friends and the world around you on Clonebook.</p>
          </div>

          <div className={styles.formLogin}>
            <form onSubmit={handleLogin}>
              <input type="email" placeholder="Email or phone number" />
              <input type="password" placeholder="Password" />
              <button type="submit">Log in</button>
            </form>
            <a href="#">Forgot password?</a>
            <hr />
            <a href="#" className={styles.createNew}>Create new acccount</a>
            <p className={styles.pageText}>
              <a href="#">Create a page</a> for a celebrity, brand or business.
            </p>
          </div>

        </main>
      </div>
    </>
  )
}

export default Home

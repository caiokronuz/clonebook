import {useState, FormEvent} from 'react';
import type { NextPage } from 'next'
import Link from 'next/link';
import Head from 'next/head';

import { RegisterModal } from '../components/RegisterModal';

import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {

  const [isRegisterOn, setIsRegisterOn] = useState(false);

  function handleLogin(e: FormEvent) {
    e.preventDefault();
    alert("Clicou!")
  }

  function toggleRegisterModal(){
    setIsRegisterOn(!isRegisterOn)
  }


  return (
    <>
      <Head>
        <title>Clonebook - Log in or Sign in</title>
      </Head>
      <div className={styles.loginPage}>

        {isRegisterOn ? <RegisterModal close={toggleRegisterModal}/> : ""}

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
            <Link href="/forgot">Forgot password?</Link>
            <hr />
            <button className={styles.createNew} onClick={toggleRegisterModal}>Create new acccount</button>
            <p className={styles.pageText}>
              <Link href="/createapage">Create a page</Link> for a celebrity, brand or business.
            </p>
          </div>

        </main>
      </div>
    </>
  )
}

export default Home

import { FormEvent } from 'react';
import Link from 'next/link';
import Head from 'next/head'

import styles from './styles.module.scss';

export default function ForgotPassword() {

    function handleSubmitForm(e: FormEvent) {
        e.preventDefault();
        alert("Senha recuperada")
    }

    return (
        <>
            <Head>
                <title>Forgot the password - Clonebook</title>
            </Head>

            <div className={styles.forgotPasswordFrame}>
                <header className={styles.topForgotPassword}>
                    <Link href="/"><h1>clonebook</h1></Link>
                    <Link href="/">Log in</Link>
                </header>

                <main className={styles.mainForgotPassword}>
                    <div className={styles.modalForgotPassword}>
                        <header>
                            <h1>Find your account</h1>
                        </header>

                        <hr />

                        <div>
                            <p>Please enter your email or mobile number to search for your account.</p>
                            <form onSubmit={handleSubmitForm}>
                                <input type="text" placeholder="Email or mobile number" />

                                <hr />
                                
                                <div className={styles.formAction}>
                                    <button>Cancel</button>
                                    <button>Search</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </main>
            </div>

        </>
    )
}
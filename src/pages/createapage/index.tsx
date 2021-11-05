import Link from 'next/link';
import Head from 'next/head';

import styles from './styles.module.scss';

export default function createCelebrityPage() {
    return (
        <>
            <Head>
                <title>Create a Page -  Clonebook</title>
            </Head>

            <div className={styles.createPage}>
                <header className={styles.headerCreatePage}>
                    <div>
                        <Link href="/"><h1>clonebook</h1></Link>
                        <Link href="/">Sign up</Link>
                    </div>
                    <Link href="/">Join or log into clonebook</Link>
                </header>

                <main className={styles.mainCreatePage}>
                    <header>
                        <h1>Create a Page</h1>
                        <p>
                            Connect your business, yourself or your cause to the worldwide community of
                            people on Facebook. To get started, choose a Page category.
                        </p>
                    </header>

                    <div className={styles.cardsDiv}>
                        <div className={styles.card}>
                            <img src="https://www.facebook.com/images/pages/create/biz_illustration.png" alt="Bussines or brand representation" />
                            <div>
                                <h1>Business or Brand</h1>
                                <p>
                                    Showcase your products and services, spotlight your brand and reach
                                    more customers on Facebook.
                                </p>
                            </div>
                            <button>Get started</button>
                        </div>

                        <div className={styles.card}>
                            <img src="https://www.facebook.com/images/pages/create/community_illustration.png" alt="Community or celebrity representation" />
                            <div>
                                <h1>Community or Public Figure</h1>
                                <p>
                                    Connect and share with people in your community, organization, team, group or 
                                    club.
                                </p>
                            </div>
                            <button>Get started</button>
                        </div>
                    </div>
                </main>
            </div>

        </>
    )
}
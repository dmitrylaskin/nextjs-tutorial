import Head from "next/head";
import A from "./A";
import styles from '../styles/Navbar.module.css'

const MainContainer = ({children, pageTitle}) => {
    return (
        <>
            <Head>
                <meta keywords='nextjs-tutorial'></meta>
                <title>{pageTitle}</title>
            </Head>
            <div>
                <div className={styles.navbar}>
                    <A href={'/'} text={'Home'}/>
                    <A href={'/users'} text={'Users'}/>
                </div>
                <h1>{pageTitle}</h1>
                <div>
                    {children}
                </div>
            </div>
        </>
    );
};

export default MainContainer;
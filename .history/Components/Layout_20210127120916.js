import Navbar from './Navbar';
import Head from "next/head";

const Layout = (props) => {
    return (
        <div>
            <Head>
                <title>BitzPrize</title>
                <link rel="stylesheet" href="https://bootswatch.com/4/darkly/bootstrap.min.css" />
            </Head>
         <Navbar/>
         {props.children}   
        </div>
    )
}
export default Layout;
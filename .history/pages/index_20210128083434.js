import Fetch from "isomorphic-unfetch";
import Layout from "../Components/Layout";
import Prices from "../Components/Prices"

const index = (props) => {
    return (
        <Layout>
        <div>
         <h1>welcome to bitzprice</h1>
         <Prices bpi={props.bpi} />  
        </div>
        </Layout>
    )
};
index.getinitialprops = async function() {
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await res.json();

    return(
        bpi: data.bpi
    )
}

export default index;
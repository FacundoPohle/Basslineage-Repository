
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/home.css";
import "../styles/expect.css";
import "../styles/aditional.css";
import "../styles/who.css";
import "../styles/examples.css";
import "../styles/contact.css";
import ExamplesCards from "../components/examples"


const Examples = () => {

    const handleToRef = () => {};

    return (<>
        <div className="container-fluid m-0 p-0">
            <div className="examples-container m-0">
            <Navbar toRef={handleToRef}/>
            <ExamplesCards/>
            </div>
        </div>


        <Footer />

    </>);
}

export default Examples;
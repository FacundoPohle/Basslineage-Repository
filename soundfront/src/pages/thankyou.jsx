
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/home.css";
import "../styles/expect.css";
import "../styles/aditional.css";
import "../styles/who.css";
import "../styles/examples.css";
import "../styles/contact.css";
import "../styles/thankyou.css";


const Thanks = () => {

    const handleToRef = () => { };

    return (<>
        <div className="container-fluid m-0 p-0">
            <div className="thanks-container m-0">
                <Navbar toRef={handleToRef} />
                <div className="exampless">
                    <div className="col aditional_col">
                        <div className="row w-100 d-flex justify-content-center">
                            <h2 className="thankex mt-5">Gracias por elegirnos, nos vemos pronto!</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <Footer />

    </>);
}

export default Thanks;
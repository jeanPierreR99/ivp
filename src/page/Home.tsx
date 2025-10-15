import Aliance from "../components/Aliance";
import Banner from "../components/Banner";
import ContactForm from "../components/ContactForm";
import Gallery from "../components/Gallery";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section2v2 from "../components/Section2v2";
import Section5 from "../components/Section5";

const Home = () => {
    return (
        <div className="mt-20">
            <Banner />
            <div className="max-w-[1425px] mx-auto overflow-x-hidden">
                <Section2v2 />
                <Section1 />
                <Section2 />
                <Section5 />
                <Gallery />
                <ContactForm />
                <Aliance />
            </div>
        </div>
    );
};

export default Home;
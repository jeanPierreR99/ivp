import Aliance from "../components/Aliance";
import Banner from "../components/Banner";
import ContactForm from "../components/ContactForm";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";
import Section5 from "../components/Section5";

const Home = () => {
    return (
        <div className="mt-20">
            <Banner />
            <div className="max-w-[1225px] mx-auto">
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
                <ContactForm />
                <Aliance />
            </div>
        </div>
    );
};

export default Home;
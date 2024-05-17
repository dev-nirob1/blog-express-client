
import Quote from "../../components/Quote";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";

const About = () => {
    return (
        <>
            <div className="space-y-10 py-16 px-2 md:px-0 container mx-auto">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-5 text-gray-800 font-serif">About Us</h1>
                </div>

                <SectionOne />

                <Quote />

                <SectionTwo />
            </div>
        </>
    );
};

export default About;

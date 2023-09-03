import About from "./about/about";
import Web from "./web/web";

export default function Root() {
    return (
        <>
            <div className="md:leading-10">
                <p className="bg-black text-white p-2 ">
                    I am a software engineer, a cinephile, an ambivert and a wannabe artist based in Kerala, India!
                </p>
                <br />
                {/* I got my resume <a className="hover:bg-black hover:text-white"
                    href="./jishnu-resume.pdf" rel="noopener noreferrer nofollow" target="_blank">here</a>. */}
            </div>
            <About />
            <Web />
        </>
    );
}
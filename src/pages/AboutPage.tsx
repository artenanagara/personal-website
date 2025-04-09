import React from "react";

const AboutPage: React.FC = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center flex-col gap-8 px-4 pb-20 md:gap-4 md:px-10 text-center">
            <div>
                <h1 className="flex justify-center items-center text-center font-semibold text-2xl md:text-4xl">Oops! Page’s getting a little makeover!</h1>
                <p className="pt-1 italic"> Meanwhile, feel free to snag my CV 👇</p>
            </div>
            <div className="flex justify-center items-center">
                <a href="https://drive.google.com/file/d/1I4MlCzUx_mn4jx4lZlM8hUy8lDCYO0xB/view?usp=sharing" target="blank" className="bg-black text-white px-4 py-2 rounded hover:bg-white hover:text-black hover:border-2 hover:border-black transition duration-300">
                    Check Out My CV
                </a>
            </div>
        </div>
    );
};

export default AboutPage;
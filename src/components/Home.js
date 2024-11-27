import React, {useRef} from "react";
import CustomHook from "./CustomHook";

const Home = () => {
    const refTab = useRef();
    CustomHook(refTab);

    return (
        <section className="home" ref={refTab}>
            <div className="content">
                <div className="name">
                    PDP University <span>DEV Club</span>
                </div>
                <div className="description">
                    "Dev Club — PDP University talabalarining bilimini kengaytirish va
                    texnologiyalar olamida yangi marralarni zabt etish uchun yaratilgan
                    platforma. Klub ikki yo'nalishda ishlaydi:
                    <strong> Study</strong> — bilimni oshirish
                    va <strong>Work</strong> — amaliy loyihalar ustida ishlash.
                </div>
                <a href="/" target="_blank" rel="noopener noreferrer">
                    Bugun qo'shiling!
                </a>
            </div>
            <div className="avatar">
                <div className="card">
                    <img
                        src="https://w0.peakpx.com/wallpaper/870/448/HD-wallpaper-coder-black-logo-minimal-programmer-programming.jpg"
                        alt="Developer Avatar"
                    />
                    <div className="info">
                        <div>Dev Club</div>
                        <div>PDP University</div>
                        <div>27/11/2024</div>
                        <div>Group Of Professionals</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;

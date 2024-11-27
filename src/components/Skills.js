import React, {useState, useRef} from "react";
import CustomHook from "./CustomHook";

const Skills = () => {
    const [listSkills] = useState([
        {
            name: "Beginner (Study)",
            description: `
        Study bo'limi — Dev Club'ning o'quv dasturlari markazi.
        Biz quyidagi yo'nalishlarda qo'shimcha darslar o'tamiz:
        - Web Development (HTML, CSS, JavaScript)
        - Back-end dasturlash (Python)
        Tajribali mentorlar tomonidan darslar o'tkaziladi. 
        O'zingizni yangi bilimlarga bag'ishlang va rivojlaning!
      `,
            icon: "🚀",
        },
        {
            name: "Intermediate (Mentor)",
            description: `
        Mentorlash — bilimni boshqalarga ulashish bosqichidir.
        Talabalar mentorlik qilish orqali muloqot va o'qitish
        ko'nikmalarini rivojlantiradi.`,
            icon: "👨‍💻",
        },
        {
            name: "Advanced (Working)",
            description: `
        Work bo'limi — haqiqiy loyihalar ustida ishlash.
        Bu yerdagi amaliyot talabalar uchun professional
        rivojlanishga zamin yaratadi.`,
            icon: "🤝",
        },
    ]);

    const refTab = useRef();
    const refDivs = useRef([]);
    CustomHook(refTab, refDivs);

    return (
        <section className="skills" ref={refTab}>
            <div className="title" ref={(el) => el && refDivs.current.push(el)}>
                Biz Haqimizda
            </div>
            <div className="description" ref={(el) => el && refDivs.current.push(el)}>
                "Dev Club nafaqat bilim olish, balki uni hayotda qo'llash imkoniyatidir."
            </div>
            <div className="list" ref={(el) => el && refDivs.current.push(el)}>
                {listSkills.map((value, key) => (
                    <div
                        key={key}
                        className="item"
                        ref={(el) => el && refDivs.current.push(el)}
                    >
                        <span>{value.icon}</span>
                        <h3>{value.name}</h3>
                        <div className="description">{value.description}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;

import React, { useRef, useState } from "react";
import CustomHook from "./CustomHook";

const Contacts = () => {
    const [listContacts] = useState([
        {
            title: "Email",
            value: "mr.abdukarim1@gmail.com",
        },
        {
            title: "Telefon",
            value: "+998 (93) 578-21-20",
        },
        {
            title: "Telegram",
            value: "t.me/@MrAbdukarimDev",
        },
    ]);

    const refTab = useRef();
    const divs = useRef([]);
    CustomHook(refTab, divs);

    return (
        <section ref={refTab} className="contacts">
            <div className="title">Biz bilan Aloqada Bo'ling!</div>
            <div className="description">
                Savollaringiz bormi yoki Dev Club'ga qo'shilmoqchimisiz? Biz bilan bog'laning!
            </div>
            <div className="list">
                {listContacts.map((contact, index) => (
                    <div key={index} className="item">
                        <h3>{contact.title}</h3>
                        <div>{contact.value}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Contacts;

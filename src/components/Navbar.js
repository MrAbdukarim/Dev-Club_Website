import React, {useState, useCallback} from "react";
import {connect, useDispatch} from "react-redux";
import {changeTabActive} from "../redux/action";

const Navbar = ({activeTab}) => {
    // Inglizcha kalit so'zlar va ularning foydalanuvchiga ko'rinadigan o'zbekcha nomlari
    const [listNav] = useState([
        {key: "home", label: "Bosh sahifa"},
        {key: "skills", label: "Biz haqimizda"},
        {key: "projects", label: "Loyihalarimiz"},
        {key: "contacts", label: "Bog'lanish"},
    ]);

    const dispatch = useDispatch();

    // Tabni o'zgartirish uchun funksiya
    const changeTab = useCallback((key) => {
        dispatch(changeTabActive(key)); // Redux orqali tabni o'zgartiramiz
    }, [dispatch]);

    return (
        <header>
            <div className="logo">
                <h1>Dev Club</h1>
            </div>
            <nav>
                {listNav.map(({key, label}, index) => (
                    <span
                        key={index}
                        className={activeTab === key ? "active" : ""}
                        onClick={() => changeTab(key)}
                    >
            {label}
          </span>
                ))}
            </nav>
        </header>
    );
};

// Redux'dan activeTab qiymatini olish
const mapStateToProps = (state) => ({
    activeTab: state.activeTab,
});

export default connect(mapStateToProps)(Navbar);

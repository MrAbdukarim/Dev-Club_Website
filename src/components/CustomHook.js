import {useEffect} from 'react';
import {useSelector} from 'react-redux';

const CustomHook = (refTab = null, refDivs = null) => {
    const thisDivs = refDivs;
    const activeTab = useSelector(state => state.activeTab);

    useEffect(() => {
        if (refTab && refTab.current && refTab.current.classList.contains(activeTab)) {
            refTab.current.scrollIntoView({behavior: 'smooth'});
        }

        if (thisDivs !== null) {
            thisDivs.current.forEach((div) => {
                div.classList.add('animation');
            })
            const handleScroll = () => {
                const scrollPositon = window.scrollY;
                thisDivs.current.forEach((div) => {
                    const offsetTop = div.getBoundingClientRect().top + scrollPositon;
                    if (scrollPositon >= offsetTop - (window.innerHeight / 4 * 3)) {
                        div.classList.add('active');
                    } else {
                        div.classList.remove('active');
                    }
                })
            }

            window.addEventListener('scroll', handleScroll)
        }
    }, [activeTab, refTab]); // refTab qo'shildi
};

export default CustomHook;
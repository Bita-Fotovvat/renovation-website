import { useState } from "react";
import { TabsData } from "../../data/TabsData";
import "./Introduction.scss";
import useMediaQuery from '@mui/material/useMediaQuery';


export default function Introduction(){
    // const isBigMobile = useMediaQuery('(min-width:500px)');
    const [activeTab, setActiveTab] = useState(0);
    const handleClick = (index) =>{
        setActiveTab(index);
        const card = document.querySelector('.intro__card');
        card.classList.remove('intro__card--animate');
    
        // Using setTimeout to reapply the class so the browser registers it as a change
        setTimeout(() => {
            card.classList.add('intro__card--animate');
        }, 10);
    };

    const renderContentAsList = (content) => {
        if (Array.isArray(content)) {
            return content.map((item, index) => <li key={index}>{item}</li>);
        } else {
            return content.split(' ').map((word, index) => <li key={index}>{word}</li>);
        }
    };

    return(
        <>
        {/* <main className="cards__parent">
            <h2 className="cards__title">Interior Renovation & Remodeling</h2>
            <p className="cards__content">Kitchen, Bathroom, Basement, Home Remodeling</p>
            <img className="cards__image" src={InteriorReno} alt="renovation and remodeling" />
        </main> */}
        <h2 className="intro__header">Our Services at a Glance</h2>
        <main className="intro__tabsparent">
        <div className="intro__labels">
            {
                TabsData.map((item, index) => {
                    return(
                        <div className="" key={index}>
                            <div className="" >
                                <div 
                                onClick = {()=>handleClick(index)}
                                className={`intro__tab ${index === activeTab ? 'active' : ''}`}>
                                    {item.title}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        <section className="intro__card">
        <img className="intro__card--image" src={TabsData[activeTab].image} alt={TabsData[activeTab].tag}/>
            <div className="intro__card--content">{renderContentAsList(TabsData[activeTab].content)}</div>
        </section>

        </main>
        </>

    )
}
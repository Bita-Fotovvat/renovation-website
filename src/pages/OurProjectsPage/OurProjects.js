import "./OurProjects.scss";
import NaiagaraProject from "../../assets/images/1-Niagara-1-project/niagara-1-project2.jpg";
import AncasterOneMain from "../../assets/images/3-Ancaster-1-Project/ancaster-1-main2.jpg";
import BurlingtonOneMain from "../../assets/images/4-burlington-1-project/Burlington-1-main2.jpg";
import OakvilleBath from "../../assets/images/2-oakville-bath-project/oakville-1-main2.jpg";
import MississaugaStore from "../../assets/images/5-mississauga-store-project/mississauga-1-main2.jpg";
import MiltonProjectMain from "../../assets/images/6-milton-project-1/main.jpg";
import BurlingtonTwoMain from "../../assets/images/7- burlington-project-2/main.jpg";
import ColborneOneMain from "../../assets/images/8-colborne-project-1/main.png";
import MississaugaTwoMain from "../../assets/images/9-Mississauga-project-2/main.jpg";
import TorontoOneMain from "../../assets/images/10-toronto-shelby's Project-1/main.jpg";
import { useNavigate } from "react-router-dom";

export default function OurProjectsPage(){
    const navigate = useNavigate();
    return(
        <main>
        <h1 className="projects__maintitle">Some of Our Projects</h1>
        <section className="projects__wrapper">
            <section className="projects__parent">
                <section className="projects__niagaraone">
                    {/* <section className="projects__niagaraone--image" ></section> */}
                    <img className="projects__niagaraone--image" src={NaiagaraProject} alt="niagara renovation project" onClick={()=> {
                    navigate("/our-projects/niagara-project-no.1"); 
                    }}/>
                    <h2 className="projects__niagaraone--title" onClick={()=> {navigate("/our-projects/niagara-project-no.1");}}>Niagara Project No.</h2>
                </section>
                <section className="projects__oakvillebath">
                    <img className="projects__oakvillebath--image" src={OakvilleBath} alt="oakville renovation project"  onClick={()=> {navigate("/our-projects/oakville-project-no.1");}}/>
                    <h2 className="projects__oakvillebath--title" onClick={()=> {navigate("/our-projects/oakville-project-no.1");}}>Oakville Project</h2>
                </section>
            </section>
            <section className="projects__parent">
                <section className="projects__ancasterone">
                    <img className="projects__ancasterone--image" src={AncasterOneMain} alt="ancaster renovation project" onClick={()=> {
                    navigate("/our-projects/ancaster-project-no.1"); 
                    }}/>
                    <h2 className="projects__ancasterone--title" onClick={()=> {navigate("/our-projects/ancaster-project-no.1");}}>Ancaster Project</h2>
                </section>
                <section className="projects__burligntonone">
                    <img className="projects__burligntonone--image" src={BurlingtonOneMain} alt="burlington renovation project"  onClick={()=> {navigate("/our-projects/burlington-project-no.1");}}/>
                    <h2 className="projects__burligntonone--title" onClick={()=> {navigate("/our-projects/burlington-project-no.1");}}>Bulington Project</h2>
                </section>
            </section>
            <section className="projects__parent">
                <section className="projects__mississaugastore">
                    <img className="projects__mississaugastore--image" src={MississaugaStore} alt="mississauga store renovation"  onClick={()=> {navigate("/our-projects/mississauga-store-project-no.1");}}/>
                    <h2 className="projects__mississaugastore--title" onClick={()=> {navigate("/our-projects/mississauga-store-project-no.1");}}>Mississauga Store Project</h2>
                </section>
                <section className="projects__miltoneone">
                    <img className="projects__miltoneone--image" src={MiltonProjectMain} alt="milton renovation project"  onClick={()=> {navigate("/our-projects/milton-project-no.1");}}/>
                    <h2 className="projects__miltoneone--title" onClick={()=> {navigate("/our-projects/milton-project-no.1");}}>Milton Project</h2>
                </section>
            </section>
            <section className="projects__parent">
                <section className="projects__burligntontwo">
                    <img className="projects__burligntontwo--image" src={BurlingtonTwoMain} alt="burlington home & basement renovation"  onClick={()=> {navigate("/our-projects/burlington-project-no.2");}}/>
                    <h2 className="projects__burligntontwo--title" onClick={()=> {navigate("/our-projects/burlington-project-no.2");}}>Burlington Project No. 2</h2>
                </section>
                <section className="projects__colborneone">
                    <img className="projects__colborneone--image" src={ColborneOneMain} alt="colborne renovation project"  onClick={()=> {navigate("/our-projects/colborne-project-no.1");}}/>
                    <h2 className="projects__colborneone--title" onClick={()=> {navigate("/our-projects/colborne-project-no.1");}}>Colborne Project</h2>
                </section>
            </section>
            <section className="projects__parent">
                <section className="projects__mississaugatwo">
                    <img className="projects__mississaugatwo--image" src={MississaugaTwoMain} alt="mississauga renovation"  onClick={()=> {navigate("/our-projects/mississauga-project-no.2");}}/>
                    <h2 className="projects__mississaugatwo--title" onClick={()=> {navigate("/our-projects/mississauga-project-no.2");}}>Mississauga Project No. 2</h2>
                </section>
                <section className="projects__torontoshelbysone">
                    <img className="projects__torontoshelbysone--image" src={TorontoOneMain} alt="toronto shelby's renovation project"  onClick={()=> {navigate("/our-projects/toronto-project-no.1");}}/>
                    <h2 className="projects__torontoshelbysone--title" onClick={()=> {navigate("/our-projects/toronto-project-no.1");}}>Toronto Restaurant Project No. 1</h2>
                </section>
            </section>
        </section>
        </main>
    )
}
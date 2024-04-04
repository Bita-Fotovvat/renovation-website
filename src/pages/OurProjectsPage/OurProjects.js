import "./OurProjects.scss";
import NaiagaraProject from "../../assets/images/1-Niagara-1-project/niagara-1-project2.jpg";
import AncasterOneMain from "../../assets/images/3-Ancaster-1-Project/ancaster-1-main2.jpg";
import BurlingtonOneMain from "../../assets/images/4-burlington-1-project/Burlington-1-main2.jpg";
import OakvilleBath from "../../assets/images/2-oakville-bath-project/oakville-1-main2.jpg";
import MississaugaStore from "../../assets/images/5-mississauga-store-project/mississauga-1-main2.jpg";
import { useNavigate } from "react-router-dom";

export default function OurProjectsPage(){
    const navigate = useNavigate();
    return(
        <main>
        <h1 className="projects__maintitle">Some of Our Projects</h1>
        <section className="projects__wrapper">
            <section className="projects__niagaraone">
                {/* <section className="projects__niagaraone--image" ></section> */}
                <img className="projects__niagaraone--image" src={NaiagaraProject} alt="niagara renovation project" onClick={()=> {
                    navigate("/our-projects/niagara-1-project"); 
                    }}/>
                <h2 className="projects__niagaraone--title" onClick={()=> {navigate("/our-projects/niagara-1-project");}}>Niagara Project</h2>
            </section>
            <section className="projects__oakvillebath">
                <img className="projects__oakvillebath--image" src={OakvilleBath} alt="oakville renovation project"  onClick={()=> {navigate("/our-projects/oakville-1-project");}}/>
                <h2 className="projects__oakvillebath--title" onClick={()=> {navigate("/our-projects/oakville-1-project");}}>Oakville Project</h2>
            </section>
            <section className="projects__ancasterone">
                <img className="projects__ancasterone--image" src={AncasterOneMain} alt="ancaster renovation project" onClick={()=> {
                    navigate("/our-projects/ancaster-1-project"); 
                    }}/>
                <h2 className="projects__ancasterone--title" onClick={()=> {navigate("/our-projects/ancaster-1-project");}}>Ancaster Project</h2>
            </section>
            <section className="projects__burligntonone">
                <img className="projects__burligntonone--image" src={BurlingtonOneMain} alt="burlington renovation project"  onClick={()=> {navigate("/our-projects/burlington-1-project");}}/>
                <h2 className="projects__burligntonone--title" onClick={()=> {navigate("/our-projects/burlington-1-project");}}>Bulington Project</h2>
            </section>
            <section className="projects__mississaugastore">
                <img className="projects__mississaugastore--image" src={MississaugaStore} alt="mississauga store renovation"  onClick={()=> {navigate("/our-projects/mississauga-store-project");}}/>
                <h2 className="projects__mississaugastore--title" onClick={()=> {navigate("/our-projects/mississauga-store-project");}}>Mississauga Store Project</h2>
            </section>
        </section>
        </main>
    )
}
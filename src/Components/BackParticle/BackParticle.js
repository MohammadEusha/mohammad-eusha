import Home from "../Home Page/Home/Home";
import "./Backparticle.css";
import ParticleBackground from "./ParticleBackground";


function BackParticle() {
    return (
        <div>
            <ParticleBackground />
            <CenterTitle />
        </div>
    );
}

function CenterTitle() {
    return (
        <div id="text_div center_all">
            <div className="center_all">
                <h1 className="custom-subTitle">Particle JS Integration</h1>
            </div>
        </div>
    );
}


export default BackParticle;
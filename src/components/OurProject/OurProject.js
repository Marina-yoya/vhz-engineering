import MyComponent from "../MyComponent/MyComponent";
import './OurProject.css'


const OurProject = () => {




    return (
        <>
            <div id="project">

                <div className="project-img"></div>
            </div>
            <div class="text-block">
                <h4>Where science thrives</h4>
                <p>The Discovery Centre
                    (DISC) in Cambridge, UK,
                    is a state-of-the-art global
                    R&D facility enabling the delivery of our science-led strategy, turning science into medicine.</p>
            </div>

            <div className="map">
                <MyComponent />
            </div>
        </>
    )
}

export default OurProject;
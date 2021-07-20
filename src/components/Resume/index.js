import React from 'react';
import resume from "../../assets/images/resumeJPEG.jpg";
import resumePDF from "../../assets/images/resumePDF.pdf";

function Resume() {
    return (
    <section>
        <div className="row m-4 pt-5">
            <div className="col-3"></div>
            <div className="col-6 text-center mb-3">
                <h1 data-testid="h1tag" className="sub-title">my resume</h1>
            </div>
            <div className="col-3"></div>
        </div>

        <div className="container shadow">
            <div className="row">
                <div className="col-3"></div>
                <div class="col-6">
                    <div class="row">
                        <div className="card m-4 project shadow-sm" style= {{ width: "100%", padding: "10px", backgroundColor: "#fbefcc9a" }}>
                            <img src={resume} className="rounded" alt="resume"/>
                            <div className="card-body">
                                <p className="card-text"><a className="card-text" href={resumePDF} to="route" target="_blank" rel="noopener noreferrer">download resume</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3"></div>
            </div>
        </div>
    </section>
    );
}


export default Resume;
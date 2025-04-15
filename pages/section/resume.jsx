import React from 'react';
import { useEffect } from "react";
import  Aos from 'aos';
import "aos/dist/aos.css";

function Resume() {
    useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
    }, []);
	return(
		<div className="container">
			<div className="row">
				<div className="col-md-12 text-center">
	                <h2>My Resume</h2>
	                <div className="space-border"></div>
	            </div>
			</div>
			<div className="row gh-5">

				<div className="col-lg-6"
                    data-aos="fade-up"
                        data-aos-once="true"
                    >
                    <div className="p-4">
                        <h3 className="s_border">Experiences</h3>
                        <ul className="d_timeline">
                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">2021 - now</h3>
                                <p className="d_timeline-text">
                                	<span className="d_title">Freelancer – SEO & Google Ads Specialist</span>
                                	<span className="d_company">Self-Employed</span>
                                	As a freelancer, I help businesses grow online by optimizing their visibility through strategic SEO and Google Ads campaigns. From building backlinks to managing paid traffic, I deliver tailored solutions that drive real results and long-term growth.
                                </p>
                            </li>
                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">2023 - 2025</h3>
                                <p className="d_timeline-text">
                                	<span className="d_title">Web Hitters – SEO Specialist</span>
                                	<span className="d_company">Zirakpur</span>
                                	As an SEO specialist, I specialized in Off-Page SEO and worked on improving the organic rankings of multiple websites. I utilized effective link-building strategies, keyword research, and content promotion to drive increased website traffic and enhance online presence for clients.
                                </p>
                            </li>
                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">2025 - Present</h3>
                                <p className="d_timeline-text">
                                	<span className="d_title">Creative Monk – SEO Specialist</span>
                                	<span className="d_company">Zirakpur</span>Currently working as a SEO Specialist at Creative Monk, I focus on developing and executing SEO strategies that improve rankings and increase website traffic. My primary responsibility is optimizing off-page SEO activities while supporting on-page improvements to maximize organic visibility for clients. I work closely with the team to ensure continuous growth and performance monitoring, aligning SEO strategies with business objectives.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-6" 
                    data-aos="fade-up"
                        data-aos-once="true"
                    >
                    <div className="p-4">
                        <h3 className="s_border">Education</h3>
                        <ul className="d_timeline">
                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">2019</h3>
                                <p className="d_timeline-text">
                                	<span className="d_title">10th Class (Matriculation)</span>
                                	<span className="d_company">Central Board of Secondary Education (CBSE)
                                    </span>Successfully completed 10th standard with a strong academic performance. It was here that I first developed an interest in technology, which later grew into a career path in SEO and online marketing.
                                </p>
                            </li>
                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">2021</h3>
                                <p className="d_timeline-text">
                                	<span className="d_title">12th Class (Senior Secondary)</span>
                                	<span className="d_company">Punjab School Education Board (PSEB), Mohali</span>Completed my senior secondary education with a focus on Information Technology and core academic subjects. During this time, I developed a strong interest in computers and digital platforms, which inspired me to explore the world of SEO and online marketing.
                                </p>
                            </li>
                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">2022 – Present</h3>
                                <p className="d_timeline-text">
                                	<span className="d_title">B.Sc. in Computer Science
                                    </span>
                                	<span className="d_company">KUK University</span>Currently pursuing my Bachelor's degree in Computer Science, where I’m gaining knowledge in programming, networking, databases, and system architecture. This academic background is helping me strengthen the technical side of my digital marketing career, especially in understanding how websites function and how to optimize them efficiently.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="spacer-double"></div>
			</div>
		</div>
	);
}

export default Resume;
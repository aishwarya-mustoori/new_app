import './App.css';
import Navigation from './Navigation';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { GiGraduateCap } from 'react-icons/gi'
import { FaStar } from 'react-icons/fa'
function Education() {

    return (<div className='m-3 font-family-dancing shadow pb-5 mt-5 mb-5' >
        <p className='h1 text-center text-white pb-5'>
            Education History
        </p>
        <VerticalTimeline animate={true} lineColor={"lightgrey"} >
            <VerticalTimelineElement
                className="vertical-timeline-element--work "

                date="Aug 2019  - May 2021"
                iconStyle={{ background: 'black', color: '#fff' }}
                icon={<GiGraduateCap />}
            >
                <h3 className="vertical-timeline-element-title">Master's of Science</h3>
                <h4 className="vertical-timeline-element-title">Computer Science</h4>
                <h5 className="vertical-timeline-element-subtitle">University of Southern California</h5>
                <h5 className="vertical-timeline-element-subtitle">Los Angeles, CA </h5>
                <p> CGPA : 3.6/4</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Oct 2013 - May 2017"
                iconStyle={{ background: 'black', color: '#fff' }}
                icon={<GiGraduateCap />}
                position={"right"}
            >
                <h3 className="vertical-timeline-element-title">Bachelor's of Science</h3>
                <h4 className="vertical-timeline-element-title">Computer Science</h4>
                <h5 className="vertical-timeline-element-subtitle">Chaitanya Bharathi Institute of Technology</h5>
                <h5 className="vertical-timeline-element-subtitle">Hyderabad, India</h5>


            </VerticalTimelineElement>

            <VerticalTimelineElement

                iconStyle={{ background: 'grey', color: '#fff' }}
                icon={<FaStar />}
                position={"right"}

            >
            </VerticalTimelineElement>

        </VerticalTimeline>
    </div>);
}


export default Education;
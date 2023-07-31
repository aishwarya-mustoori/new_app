import './App.css';
import Navigation from './navigation';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { MdOutlineWork } from 'react-icons/md'
import { FaStar } from 'react-icons/fa'
function Experience() {

    return (<div className='m-3 font-family-dancing shadow pb-5' >
        <p className='h1 text-center text-white pb-4 pt-5'>
            Work Experience
        </p>

        <VerticalTimeline animate={true} lineColor={"lightgrey"} >
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="May 2023 - present"
                dateClassName='text-light w-25'

                contentStyle={{ background: 'grey', color: '#fff' }}
                iconStyle={{ background: 'white', color: 'black' }}
                icon={<MdOutlineWork />}
            >
                <h3 className="vertical-timeline-element-title">Sr Salesforce Developer</h3>
                <h4 className="vertical-timeline-element-title">Technocracts Domain Inc</h4>

                <h5 className="vertical-timeline-element-subtitle">Dallas, TX</h5>
                <p>
                    Salesforce, Frontend Development, Backend Developemnt
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Nov 2021 - March 2023"
                iconStyle={{ background: 'white', color: 'black' }}
                icon={<MdOutlineWork />}
                contentStyle={{ background: '#221A1D', color: 'white' }}

            >
                <h3 className="vertical-timeline-element-title">Associate</h3>
                <h4 className="vertical-timeline-element-title">Goldman Sachs</h4>

                <h5 className="vertical-timeline-element-subtitle">Dallas, TX</h5>

                <p>
                    Frontend Development, Backend Developemnt, Data Ingestion, Automation, Testing
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="July 2021 - Nov 2021"
                iconStyle={{ background: 'white', color: 'black' }}
                icon={<MdOutlineWork />}
                contentStyle={{ background: '#221A1D', color: 'white' }}
            >
                <h3 className="vertical-timeline-element-title">Programmer Analyst II</h3>
                <h4 className="vertical-timeline-element-title">ATRI, USC</h4>

                <h5 className="vertical-timeline-element-subtitle">San Deigo, CA</h5>
                <p>
                    User Experience, Healthcare, Frontend Development, Backend Developemnt, Testing
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="July 2017 - July 2019"
                iconStyle={{ background: 'white', color: 'black' }}
                icon={<MdOutlineWork />}
                contentStyle={{ background: '#221A1D', color: 'white' }}


            >
                <h3 className="vertical-timeline-element-title">Software Developer II</h3>
                <h4 className="vertical-timeline-element-title">Oracle</h4>

                <h5 className="vertical-timeline-element-subtitle">Hyderabad</h5>
                <p>
                    User Experience, Hospitality, HotelIndustry, Frontend Development, Backend Developemnt, Testing
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement

                iconStyle={{ background: 'grey', color: '#fff' }}
                icon={<FaStar />}


            >
            </VerticalTimelineElement>

        </VerticalTimeline>
    </div>);
}


export default Experience;
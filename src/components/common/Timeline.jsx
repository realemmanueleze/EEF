import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const TimelineData = [
  {
    id: '1',
    title: 'Integrity',
    description: 'Honesty, ethics, transparency, highest standards.',
  },
  {
    id: '2',
    title: 'Humility',
    description: 'Openness, learning, respect, diverse perspectives.',
  },
  {
    id: '3',
    title: 'Self-discipline',
    description: 'Hard work, focus, commitment, excellence.',
  },
  {
    id: '4',
    title: 'Sacrifice',
    description: 'Personal sacrifice, impact, time, resources.',
  },
];

const Timeline = ({ classVar }) => {
  return (
    <div className="timeline-style-two bg-color-blackest">
      <div className="row row--0">
        {/* Start Single Progress */}
        {TimelineData.map((data, index) => (
          <div
            className={`col-lg-3 col-md-3 rn-timeline-single ${classVar}`}
            key={index}
          >
            <div className="rn-timeline">
              <AnimationOnScroll
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
              >
                <h6 className="title">{data.title}</h6>
              </AnimationOnScroll>
              <div className="progress-line">
                <div className="line-inner"></div>
              </div>
              <div className="progress-dot">
                <div className="dot-level">
                  <div className="dot-inner"></div>
                </div>
              </div>
              <AnimationOnScroll
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
              >
                <p className="description">{data.description}</p>
              </AnimationOnScroll>
            </div>
          </div>
        ))}
        {/* End Single Progress */}
      </div>
    </div>
  );
};
export default Timeline;

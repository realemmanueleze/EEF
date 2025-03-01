import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { teamData } from '@/data';
import SectionTitle from '../common/sectionTitle/SectionTitle';

const TeamTwo = ({ column, teamStyle }) => {
  return (
    <div className="container rn-section-gap">
      <SectionTitle
        textAlign="text-center"
        radiusRounded=""
        subtitle="Meet the Passionate Team behind Emmanuel Eze Foundation"
        title="Our Leadership Team"
        description="A group of volunteers committed to empowering the </br> next generation through education and technology."
      />
      <div className="row row--30">
        {teamData.map((data, index) => (
          <div className={`${column}`} key={index}>
            <AnimationOnScroll
              animateIn="fadeInUp"
              animateOut="fadeInOut"
              animateOnce={true}
            >
              <div className={`rn-team ${teamStyle}`}>
                <div className="inner">
                  <figure className="thumbnail">
                    <img
                      src={`./images/team/${data.image}`}
                      alt="Corporate React Template"
                    />
                  </figure>
                  <figcaption className="content">
                    <h2 className="title">{data.name}</h2>
                    <h6 className="subtitle theme-gradient">
                      {data.designation}
                    </h6>
                  </figcaption>
                </div>
              </div>
            </AnimationOnScroll>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamTwo;

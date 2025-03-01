import React from 'react';
import { FiActivity, FiCast, FiMap } from 'react-icons/fi';
import Link from 'next/link';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const ServiceList = [
  {
    icon: <FiActivity />,
    title: 'Coding BootCamp',
    description:
      'The coding bootcamp is carefully designed to equip participants with the knowledge and skills they need to excel in coding and related fields.',
  },
  {
    icon: <FiCast />,
    title: 'Design BootCamp',
    description:
      'The design bootcamp is designed to provide participants with a solid foundation in design principles and best practices.',
  },
  {
    icon: <FiMap />,
    title: 'Math BootCamp',
    description:
      "The math bootcamp consists of fun and interactive activities that'll help students to master various skills in mathematics depending on their grade level.",
  },
];

const Programs = ({ textAlign, serviceStyle }) => {
  return (
    <div className="row row--15 service-wrapper">
      {ServiceList.map((val, i) => (
        <div className="col-lg-4 col-md-6 col-sm-12 col-12" key={i}>
          <AnimationOnScroll
            animateIn="fadeInUp"
            animateOut="fadeInOut"
            animateOnce={true}
          >
            <div className={`service ${serviceStyle} ${textAlign}`}>
              <div className="icon">{val.icon}</div>
              <div className="content">
                <h4 className="title w-600">
                  <Link
                    href="#service"
                    dangerouslySetInnerHTML={{ __html: val.title }}
                  ></Link>
                </h4>
                <p
                  className="description b1 color-gray mb--0"
                  dangerouslySetInnerHTML={{
                    __html: val.description,
                  }}
                ></p>
              </div>
            </div>
          </AnimationOnScroll>
        </div>
      ))}
    </div>
  );
};
export default Programs;

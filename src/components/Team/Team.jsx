import React from "react";
import { FiFacebook, FiTwitter, FiLinkedin } from "react-icons/fi";
import ScrollAnimation from "react-animate-on-scroll";
import SectionTitle from "../common/sectionTitle/SectionTitle";

const teamData = [
  {
    image: "Emmanuel-Eze.jpeg",
    name: "Emmanuel Eze",
    designation: "Founder and President",
    location: "Lagos",
    description: "",
    socialNetwork: [
      {
        icon: <FiLinkedin />,
        url: "https://www.linkedin.com/in/emmanuel-eze-488512155/",
      },
      {
        icon: <FiTwitter />,
        url: "https://twitter.com/realemmanueleze",
      },
    ],
  },
  {
    image: "Orisha-Brown.jpeg",
    name: "Orisha Brown",
    designation: "Treasurer",
    location: "Maryland, USA",
    description: "",
    socialNetwork: [
      {
        icon: <FiLinkedin />,
        url: "https://www.linkedin.com/in/orishabrown",
      },
    ],
  },
  {
    image: "Heather-Wallick.jpg",
    name: "Heather Wallick",
    designation: "Secretary",
    location: "Pennsylvania, USA",
    description: "",
    socialNetwork: [
      {
        icon: <FiLinkedin />,
        url: "https://www.linkedin.com/in/heather-wallick-5256ab8a/",
      },
    ],
  },
  {
    image: "Nancy-Griffin.webp",
    name: "Nancy Griffin",
    designation: "VP Skill Training",
    location: "Maryland, USA",
    description: "",
    socialNetwork: [
      {
        icon: <FiFacebook />,
        url: "https://web.facebook.com/nancy.griffin.710",
      },
    ],
  },
];

const Team = ({ column, teamStyle }) => {
  return (
    <div className="container rn-section-gap">
      <SectionTitle
        textAlign="text-center"
        radiusRounded=""
        subtitle="Meet the Passionate Team behind Emmanuel Eze Foundation"
        title="Our Leadership Team"
        description="A group of volunteers committed to empowering the </br> next generation through education and technology."
      />
      <div className="row row--15">
        {teamData.map((data, index) => (
          <div className={`${column}`} key={index}>
            <ScrollAnimation
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
                    <span className="team-form">
                      <img
                        src="./images/team/location.svg"
                        alt="Corporate React Template"
                      />
                      <span className="location">{data.location}</span>
                    </span>
                    <p className="description">{data.description}</p>

                    <ul className="social-icon social-default icon-naked mt--20">
                      {data.socialNetwork.map((social, index) => (
                        <li key={index}>
                          <a href={`${social.url}`}>{social.icon}</a>
                        </li>
                      ))}
                    </ul>
                  </figcaption>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;

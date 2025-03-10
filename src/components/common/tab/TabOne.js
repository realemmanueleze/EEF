import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import importantLinks from '@/data/importantLinks';

const TabOne = () => {
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <Tabs>
            <div className="row row--30 align-items-center">
              <div className="col-lg-5">
                <img
                  className="radius-small"
                  src="./images/banner/boy-1.jpeg"
                  alt="Child with toy airplane"
                />
              </div>
              <div className="col-lg-7 mt_md--40 mt_sm--40">
                <div className="rn-default-tab">
                  <div className="tab-button-panel">
                    <TabList className="tab-button">
                      <Tab>
                        <div className="rn-tab-button">
                          <button>Mission</button>
                        </div>
                      </Tab>
                      <Tab>
                        <div className="rn-tab-button">
                          <button>Goals</button>
                        </div>
                      </Tab>
                      <Tab>
                        <div className="rn-tab-button">
                          <button>Strategy</button>
                        </div>
                      </Tab>
                    </TabList>
                  </div>

                  <div className="tab-content-panel">
                    <TabPanel>
                      <div className="rn-tab-content">
                        <div className="inner">
                          <p>
                            Our mission is to empower and transform
                            the lives of children and teens,
                            especially those who are disadvantaged, by
                            providing quality education and skill
                            acquisition training that will prepare
                            them for the demands of the future.
                          </p>
                          <p>
                            We aim to break the cycle of poverty by
                            equipping them with skills that will not
                            only improve their lives but also
                            contribute to the growth and development
                            of our economy. Our commitment to
                            excellence and equity drives us to provide
                            free programs, like the online math,
                            coding and design bootcamps, to ensure
                            that every child has equal access to
                            education and opportunities for a better
                            future.
                          </p>
                        </div>
                      </div>
                    </TabPanel>

                    <TabPanel>
                      <div className="rn-tab-content">
                        <div className="inner">
                          <p>
                            Our goal for 2025 is to provide free math,
                            coding and design bootcamps to 500
                            children and teens, with 25 cohorts of 20
                            students each and one instructor per
                            cohort. Each bootcamp will be for 12 weeks
                            and meet 3 hours per week. We will rely
                            heavily on volunteers to make this happen.
                            When we can't get enough volunteers we
                            will hire instructors. Our instructors
                            will be paid at an hourly rate between $20
                            to $40 per hour. We also need to account
                            for the costs of Zoom, advertising and
                            administrative tasks.
                          </p>

                          <p>
                            To achieve this goal, we aim to raise
                            $65,000 in funding this year, which will
                            enable us to provide quality education and
                            skill acquisition training to children and
                            teens and help prepare them for for a
                            brighter future.
                          </p>
                        </div>
                      </div>
                    </TabPanel>

                    <TabPanel>
                      <div className="rn-tab-content">
                        <div className="inner">
                          <p>
                            Our approach is to create a robust and
                            safe online
                            <span>
                              <a
                                href={importantLinks.discord}
                                target="_blank"
                              >
                                (discord)
                              </a>
                            </span>{' '}
                            community that offers free resources, such
                            as e-books and video materials to as many
                            children as possible. These resources will
                            allow children to engage in independent
                            studies and develop their skills,
                            preparing them for our math, coding and
                            design bootcamps. As we raise funds, we
                            will enroll children into cohorts on a
                            first-come, first-served basis, and based
                            on availability.
                          </p>

                          <p>
                            Each cohort costs $1,250 to run, so for
                            every $1,250 raised, we will spin off a
                            new cohort. We have a pool of well-vetted
                            and qualified instructors with clear
                            background checks on standby to lead each
                            cohort once we have the funds to implement
                            the program.
                          </p>
                        </div>
                      </div>
                    </TabPanel>
                  </div>
                </div>
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default TabOne;

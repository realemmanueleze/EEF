import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';

const AccordionOne = ({ customStyle }) => {
  return (
    <Accordion
      className={`rn-accordion-style ${customStyle}`}
      defaultActiveKey="0"
    >
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            What age group is eligible for the bootcamps?
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            Children and teens aged 8-19 are eligible for the
            bootcamps.
          </Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
            Are the bootcamps free of charge?
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            Yes, all bootcamps are free of charge.
          </Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="2">
            How long does each bootcamp last?
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body>Each bootcamp lasts for 12 weeks.</Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="3">
            What are the different types of bootcamps offered by the
            foundation?
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="3">
          <Card.Body>
            The foundation offers three distinct bootcamps: the math
            bootcamp, coding bootcamp, and design bootcamp.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};
export default AccordionOne;

import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import Nav from '../nav';



class Home extends React.Component {
    render() {
        return (
            <div className ="home-wrapper">
            <Nav/>
            <Row>
            <Col sm="7">
                 <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Answer</Button>
                </Card>
              </Col>
              <Col sm="7">
                 <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Answer</Button>
                </Card>
              </Col>
        
                 <Col sm="7">
                 <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Answer!</Button>
                </Card>
              </Col>
            </Row>
            </div>
        );
    }
  }




  export default Home;


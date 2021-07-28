import React from 'react';
import Progress from './Markers/Progress';
import CalenderHeader from './CalenderHeader.js';
import { Card, Nav, Button, Container, Row, Col, ProgressBar } from 'react-bootstrap';
import Profile from './Profile';
import "./../styles/CardPage.css";

export default function CardPage() {
    return (
            <Card
              text='dark'
              style={{backgroundColor:"#EOFBFC"}}
              className = 'card'
            >
              <Card.Header className="cardHeader"><Profile /></Card.Header>
                <Card.Body>
                 <CalenderHeader />
                 <Progress />
              </Card.Body>
            </Card>

    )
}
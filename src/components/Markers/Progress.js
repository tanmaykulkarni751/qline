import React from 'react';
import Circle from './Circle';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import "./../../styles/Progress.css";

export default function Progress() {
    return (
        <ProgressBar className="bar">
            <ProgressBar style={{backgroundColor:"#EOFBFC"}} now={14.28} key={1} />
            <ProgressBar variant="danger" now={14.28} key={2} />
            <ProgressBar variant="success" now={14.28} key={3} />
            <ProgressBar variant="danger" now={14.28} key={4} />
            <ProgressBar variant="success" now={14.28} key={5} />
            <ProgressBar variant="warning" now={14.28} key={6} />
            <ProgressBar variant="success" now={14.28} key={7} />
        </ProgressBar>
    )
}
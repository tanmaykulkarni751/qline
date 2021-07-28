import React from 'react';
import MyProgress from './MyProgress';
import DisplayTask from './TaskName';
import DisplayAppName from './AppName.js'
import "./../styles/Main.css";
import LogButton from './LogButton.js'

export default function Calendar(props) {
    return (
        <div className="MainPage">
            <DisplayAppName name={props.name} task={props.task} />
            <DisplayTask task={props.task} />
            <MyProgress name={props.name} res={props.res} />
            <LogButton name={props.name} task={props.task} />
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}
import React from 'react';
import CalenderHeader from './CalenderHeader';
import MyProgress from './MyProgress';
import DisplayTask from './TaskName';

export default function Calendar() {
    return (
        <div>
            <DisplayTask />
            <CalenderHeader />
            <MyProgress />
        </div>
    )
}
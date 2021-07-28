import React from 'react';
import CardPage from './CardPage.js'
export default function MyProgress(props) {
    return (
        <div>
            {Object.keys(props.res)
                .map( (key) => 
                    (key === props.name) ? <CardPage name={key} res={props.res} isMe={true} /> :
                        null)}
            {Object.keys(props.res)
                .map( (key) => 
                    (key !== props.name) ? <CardPage name={key} res={props.res} isMe={false} /> :
                        null)}
        </div>
    )
}

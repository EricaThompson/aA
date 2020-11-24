import React from 'react';
import Clock from './clock';
import Tabs from './tabs';

const Root = () => {
    const array = [{title: "one", content: "I am the first"},{title: "two", content: "Second pane here"},{title: "three", content: "Third pane here"}]
    
    const arrayMap = array.map((item) => {
    return <Tabs title={item.title} content={item.content} />
    })

    return (
        <div>
            <Clock />
            {arrayMap}
        </div>
    )
}

export default Root;
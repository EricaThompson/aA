import React from 'react';
import Clock from './clock';
import Tabs from './tabs';
import Content from './content';

const Root = () => {
    const array = [{title: "one", content: "I am the first"},{title: "two", content: "Second pane here"},{title: "three", content: "Third pane here"}]
    
    const arrayMap = array.map((item, idx) => {
    return <Tabs key={idx} idx={idx} title={item.title} content={item.content} />
    })

    return (
        <div>
            <Clock />
            {arrayMap}
            {/* <Content /> */}
        </div>
    )
}

export default Root;
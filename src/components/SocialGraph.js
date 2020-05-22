import React from "react";
import { Graph } from 'react-d3-graph';

import node from "../assets/images/people.png";

console.log(node)

// graph payload (with minimalist structure)
const data = {
    nodes: [
      {id: 'Harry'},
      {id: 'Sally'},
      {id: 'Alice'}
    ],
    links: [
        {source: 'Harry', target: 'Sally'},
        {source: 'Harry', target: 'Alice'},
    ]
};

// the graph configuration, you only need to pass down properties
// that you want to override, otherwise default ones will be used
const myConfig = {
    nodeHighlightBehavior: true,
    panAndZoom: true,
    highlightOpacity: 5,
    linkHighlightBehavior: true,

    d3: {
        linkLength: 200,
        linkStrength: 3,
    },

    node: {
        fontSize: 10,
        highlightFontSize: 15,
        color: '#12947f',
        size: 550,
        highlightStrokeColor: '#e71414',	
        svg: "https://image.flaticon.com/icons/svg/2922/2922686.svg",
    },
    link: {
        color: '#f17808',
        highlightColor: 'red'
    }
};


const SocialGraph = () => {

    return (
        <main>
            <Graph
                id='social-graph'
                data={data}
                config={myConfig}/>
        </main>
    )
}

export default SocialGraph;
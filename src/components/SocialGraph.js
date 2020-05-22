import React, { useState, useEffect } from "react";
import { Graph } from 'react-d3-graph';

import Network from "../apis/users"


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
    },
    link: {
        color: '#f17808',
        highlightColor: 'red'
    }
};


const SocialGraph = () => {

    const [networkData, setNetworkData] = useState(null)
    const [graph, setGraph] = useState(null)


    useEffect(() => {
        
        Network.get("./social-graph")
        .then ((res) => {
            setNetworkData(res.data)
        })
        .catch ((err) => {
            console.log(err)
        })
        
    }, [])


    useEffect(() => {

        if (networkData) {
            
            const nodes = networkData.map((person) => {
                if (person.is_infected) {
                    return {
                        id: person.userid,
                        color: "red",
                        size: 400,           
                        symbolType: "diamond",
                    }
                }
                else {
                    return {
                        id: person.userid,
                        color: "green",
                        size: 300,           
                        symbolType: "circle",
                    }
                }
                
            });

            let links = [];
            for(let i = 0; i < networkData.length; ++i) {
                for (let index = 0; index < networkData[i].near.length; index++) {
                    links.push({
                        source: networkData[i].userid,
                        target: networkData[i].near[index]
                    })
                    
                }
            }

            console.log(nodes)
            console.log(links)

            const graphData = {
                nodes: nodes,
                links: links
            };
            setGraph(graphData)
        }
        
    }, [networkData])

    function renderLoader() {
        return <div>Loading....</div>
    }

    function renderGraph() {
        if(graph) {
            return (
                <Graph
                    id='social-graph'
                    data={graph}
                    config={myConfig}/>
            )
        } 
        else {
            renderLoader()
        }
    }

    return (
        <main>
            {renderGraph()}
        </main>
    )
}

export default SocialGraph;
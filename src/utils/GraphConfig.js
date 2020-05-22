// the graph configuration, you only need to pass down properties
// that you want to override, otherwise default ones will be used
export const graphConfig = {
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

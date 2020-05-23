// the graph configuration, you only need to pass down properties
// that you want to override, otherwise default ones will be used
export const graphConfig = {
    height: 400,
    highlightDegree: 2,
    highlightOpacity: 0.2,
    linkHighlightBehavior: true,
    maxZoom: 12,
    minZoom: 0.05,
    nodeHighlightBehavior: true,
    panAndZoom: false,
    width: 1000,

    d3: {
        alphaTarget: 0.05,
        linkLength: 200,
        gravity: -450,
    },

    node: {
        fontSize: 12,
        highlightFontSize: 15,
        color: '#12947f',
        highlightStrokeColor: '#000000',
        mouseCursor: "crosshair",
        // labelProperty: n => (n.color==='red' ? `${n.name}` : n.id),	
    },
    link: {
        color: '#d1cebd',
        highlightColor: '#323232',
        strokeWidth: 3,
        // type: "CURVE_SMOOTH",
    }
};

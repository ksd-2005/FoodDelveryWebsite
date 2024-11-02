const Heading=React.createElement(
    "div",{
    id:'child', xyz:'abc'},
    React.createElement(
        "div",
        {id:"child"},
        [React.createElement("h1",{},"Hi"),React.createElement("h2",{},"bro")]
    )

);


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(Heading)


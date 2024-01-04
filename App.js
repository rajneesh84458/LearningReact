/**
 *   <div id = 'parent'>
 *      <div id = 'child'>
 *     <h1>this is child</h1>
 *   <h1>this is super child</h1>
 *     </div>
 *     </div>
 *
 */

const heading = React.createElement("h1", { id: "heading" }, "Hello React");
// {} --- it will pass the attributes to the element like {id :'heading',xyz:'abc'}

// console.log(heading); // it will return the object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// createElement basically creates an object
// root.render  while rendering -- job basically responsible for to take this object put it up and converted it into h1 tag and put it up in the DOM

// ReactElement(object) = HTML(Browser understand)

const nestedDiv = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is child"),
    React.createElement("h2", {}, "This is superchild"),
  ]),
]);
console.log(nestedDiv); // it will return the object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(nestedDiv);
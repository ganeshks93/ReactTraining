// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello World from React!"
// );
// console.log(heading) // This will return a React object
//ReactElement --> Object => While rendering gets converted to HTML and puts it on browser.
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Im a H1 Tag"),
    React.createElement("h2", {}, "Im a H2 Tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Im a H1 Tag"),
    React.createElement("h2", {}, "Im a H2 Tag"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); // Replaces the actual content and it doesnt get appended

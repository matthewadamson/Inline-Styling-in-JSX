import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "blue",
  fontSize: "20px",
  border: "1px solid black"
};

customStyle.color = "green";
customStyle.fontSize = "35px";
customStyle.fontSize = "18px";

{
  color: "red";
}

ReactDOM.render(
  <div>
    <h1 style={{ color: "red" }}>Hello World!</h1>
    <p>
      Notes: the JavaScript constant above, (with the curly braces) can be
      omitted; it does not have to be explicitly stated. That being said, since
      it is a JS object, it does indeed have its own set of curly braces.
      Therefore, when you go to insert it into inline JS, at the h1 level
      through styles, you must use an additional set of curly braces. It looks
      strange, but makes perfect sense. In general inline styling is
      discouraged, but there are cases where it can be useful. It allows us to
      basically change our style on the go. For example, since we are styling
      using a JS object, it can be something that updates based on
      circumstances; a particular color for a particular date for instance. An
      example will follow in the next paragraph. Also, a general note about JSX:
      while what we are doing is very HTMLish, it is not HTML. HTML is generally
      very forgiving, but JSX is super particular.
    </p>
    <p style={customStyle}>
      Remember when using inline JS in JSX vs CSS, kabob cases are transfered to
      camel cases; all values are denoted as strings, and instead of ending the
      values with a semicolon, we use commas. Note how we update our customStyle
      constant below its declaration, and it automatically updates our
      paragraph.
    </p>
  </div>,
  document.getElementById("root")
);

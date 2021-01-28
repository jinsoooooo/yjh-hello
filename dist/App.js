import React from "../_snowpack/pkg/react.js";
import "../_snowpack/pkg/bootstrap/dist/css/bootstrap.min.css.proxy.js";
import {Container, Row, Col} from "../_snowpack/pkg/react-bootstrap.js";
import Video from "./Component/Video/index.js";
import Chat from "./Component/Chat/index.js";
function App({}) {
  return /* @__PURE__ */ React.createElement(Container, {
    fluid: true
  }, /* @__PURE__ */ React.createElement(Row, {
    noGutters: true
  }, /* @__PURE__ */ React.createElement(Col, {
    sm: 8,
    style: {height: "100vh"}
  }, /* @__PURE__ */ React.createElement(Video, null)), /* @__PURE__ */ React.createElement(Col, {
    sm: 4,
    style: {height: "100vh"}
  }, /* @__PURE__ */ React.createElement(Chat, null))), /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Col, {
    sm: 12
  }, /* @__PURE__ */ React.createElement("p", null, "TODO List"))));
}
export default App;

import { createGlobalStyle } from "styled-components";

import colors from "./colors";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100%;
  }
  body {
    min-height: 100%;
    font: 14px sans-serif;
    font-family: Helvetica, Arial, sans-serif;
    background: ${() => colors.primary};
    color: #333e5a;
    -webkit-font-smoothing: antialiased !important;
  }
  ul {
    list-style: none;
  }
  code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`;

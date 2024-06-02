// import React from "react";
// import ReactDOM from "react-dom/client";
// import { ThemeProvider ,createTheme} from "@material-ui/core/styles";
// // import theme from "./theme";

// import App from "./App";

// const rootElement = document.getElementById("root");
// const theme = createTheme({
//   palette: {
//     type: "dark",
//   },
// });
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <ThemeProvider theme={theme}>
//       <App />
//     </ThemeProvider>
//   </React.StrictMode>
// );
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);

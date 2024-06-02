// import React, { useState } from "react";
// import "./App.css";
// // import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
// // import { AppBar, Tab, Tabs } from "@material-ui/core";
// // import About from "./About";
// // import Contact from "./Contact";
// // import ResponsiveDrawer from "./Drawer";
// // import CopyTextComponent from "./Copy";

// function App() {
//   const [selectedTab, setSelectedTab] = useState(0);

//   // const handleChange = (event, newValue) => {
//   //   setSelectedTab(newValue);
//   // };
//   return (
//     <>
//       {/* <AppBar position="static">
//         <Tabs value={selectedTab} onChange={handleChange}>
//           <Tab label="About" />
//           <Tab label="Contact us" />
//           <Tab label="Project " />
//           <Tab label="Copy" />
//           <Tab label="Business" />
//           <Tab label="Family" />
//         </Tabs>
//       </AppBar>
//       {selectedTab === 0 && <About />}
//       {selectedTab === 1 && <Contact />}
//        {selectedTab === 2 && <ResponsiveDrawer />} 
//       {selectedTab === 3 && <CopyTextComponent />} 

//        <Router>
//         <Routes>
//           <Route />
//         </Routes>
//       </Router>  */}
//     </>
//   );
// }

// export default App;
import React from "react";
import CopyTextComponent from "./CopyTextComponent";

const App = () => (
  <div>
    <CopyTextComponent />
  </div>
);

export default App;



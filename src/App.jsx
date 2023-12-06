import Home from "./pages/home.jsx";
import Layout from "./components/layout.jsx";
import LeftAsideBar from "./components/LeftAsideBar.jsx";
import RightAsideBar from "./components/RightAsideBar.jsx";

import("./style/reset.css");
import("./style/App.css");

export default function App() {
  return (
    <Layout>
      <LeftAsideBar />
      <Home />
      <RightAsideBar />
    </Layout>
  );
}

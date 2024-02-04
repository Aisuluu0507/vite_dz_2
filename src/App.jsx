import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import WatchPost from "./pages/WatchPosts";
import CreatePost from "./pages/CreatePost";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route path="/create_posts" element={<CreatePost/>} />
          <Route path="" element={<WatchPost/>} />
          <Route path="*" element={<h3>Страница не найдена</h3>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
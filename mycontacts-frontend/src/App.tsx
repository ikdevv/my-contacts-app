import { Route, Routes } from "react-router";
import Header from "./components/header";
import AllContacts from "./pages/allContacts";
import AllImages from "./pages/allImages";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <Header />
      <Routes>
        <Route path="/" element={<AllContacts />} />
        <Route path="/images" element={<AllImages />} />
      </Routes>
    </div>
  );
}

export default App;

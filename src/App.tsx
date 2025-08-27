import { Route, Routes } from "react-router-dom";
import HomeView from "./pages/HomeView";
import { Container } from "./utils/styles/general";
import { TopNavigation } from "./components/navigation/TopNavigation";
import FilmView from "./pages/FilmView";
import BucketView from "./pages/BucketView";
import CharacterView from "./pages/CharacterView";

function App() {
  return (
    <Container>
      <TopNavigation />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="film/:id" element={<FilmView />}></Route>
        <Route path="film/:id/character/:id" element={<CharacterView />} />
        <Route path="bucket" element={<BucketView />} />
        <Route path="bucket/character/:id" element={<CharacterView />} />
      </Routes>
    </Container>
  );
}

export default App;

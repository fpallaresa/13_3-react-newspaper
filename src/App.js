import { NavLink, useNavigate, Routes, Route } from "react-router-dom";
import { Button, Flex } from "@chakra-ui/react";
import Home from "./componentes/Home/Home";
import NoticiasHome from "./componentes/NoticiasHome/NoticiasHome";
import Noticias from "./componentes/Noticias/Noticias";
import NotFound from "./componentes/NotFound/NotFound";
import "./App.css";

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <nav className="navigation">
        <Button className="navigation__link" onClick={() => navigate(-1)}>
          Atrás
        </Button>
        <Flex
          justifyContent="space-between"
          width="60%"
          maxWidth="500px"
          align-items="center"
        >
          <NavLink to="/">Home</NavLink>
          <NavLink to="/noticias" end>
            Noticias
          </NavLink>
          <NavLink to="/noticias/sport">Deportes</NavLink>
          <NavLink to="/noticias/economics">Economía</NavLink>
          <NavLink to="/noticias/tech">Tecnología</NavLink>
        </Flex>
        <Button className="navigation__link" onClick={() => navigate(1)}>
          Adelante
        </Button>
      </nav>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/noticias" element={<NoticiasHome></NoticiasHome>}></Route>
        <Route path="/noticias/:topics" element={<Noticias></Noticias>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;

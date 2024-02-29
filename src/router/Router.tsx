import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import NormalRoute from "./NormalRoute";
//import PrivateRoute from "./PrivateRoute";
import HomeModule from "../pages/home/HomeModule";
import PokemonModule from "../modules/pokemonModule/PokemonModule";
import EvolveLineModule from "../modules/evolveModule/EvolveLineModule";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeModule />} />
        <Route path="/pokemon" element={<PokemonModule />} />
        <Route path="/pokemon/:id" element={<PokemonModule />} />
        <Route path="/evolve-line/:id" element={<EvolveLineModule />} />

        {/*
        
        <Route element={<NormalRoute />}>
          <Route path="/" element={<HomeModule />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route
            path="/inicio"
            element={
              <div>
                <p>Inicio</p>
              </div>
            }
          />
        </Route>
              */}

        <Route
          path="*"
          element={
            <div>
              <p>404 not found</p>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

"use client"
import { useState, useEffect } from 'react';
import Pokemon from "./components/pokemon";
import styles from "./page.module.css";

export default function Home() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonIds = [5, 10, 15, 20, 25, 30];
      const pokemonData = await Promise.all(pokemonIds.map(id => fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(response => response.json())));
      setPokemons(pokemonData);
    };

    fetchPokemons();
  }, []);

  return (
    <div className={styles.main}>
      {pokemons.map((pokemon, index) => (
        <Pokemon key={index} pokemonId={pokemon.id} />
      ))}
    </div>
  );
}

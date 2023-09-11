import React, { useState } from "react"
import Header from './components/header'
import Container from "./components/Container";
import Card from "./components/Card/Card";
import { Userprops } from "./type/user";
import Search from "./components/Search";

type Appfunction = {

  FunctionApi: () => Promise<void>
}

function App() {

  const [dados, setDados] = useState<Userprops | null>(null)

  const FunctionApi = async function Getapi(userName: string) {
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const dadosReturn = await response.json();

    const { avatar_url,
      login,
      name,
      company,
      blog,
      location,
      bio,
      public_repos,
      followers,
      following,
      created_at,
      twitter_username } = dadosReturn

      const Unstructured: Userprops = { avatar_url,
        login,
        name,
        company,
        blog,
        location,
        bio,
        public_repos,
        followers,
        following,
        created_at,
        twitter_username }


    setDados(Unstructured)
  }


  return (
    <>
      <Header />
      <Container>
        <Search FunctionApi={FunctionApi} />
        {
          //sempre que o card não aceitar a typagem use os dois && comerciais caso tenha duvida tire ele e teste vc mesmo avera um bug de typagem onde uma string | undefined não pode ser colocada junto com uma function string | null declarada ali em sima ou seja não aceita string vazia 
        }
        {dados && <Card {...dados} />}
      </Container>
    </>
  )
}
export default App;
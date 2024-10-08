import Header from "./_components/header"
import { Input } from "./_components/ui/input"
import { Button } from "./_components/ui/button"
import { SearchIcon } from "lucide-react"

const Home = () => {
  return (
    <div>
      <Header />

      {/*cabeçalho d boas vindas com a data*/}
      <div className="ml-12 p-20">
        <h2 className="gap-8 text-xl font-bold">Olá, Ana!</h2>
        <p>Segunda-feira, 07 de agosto</p>

        {/* Barra de pesquisa e filtragem */}
        <div className="mt-6 flex items-start gap-2">
          <Input placeholder="Faça uma busca" className="h-10 w-96 p-2" />
          <Button className="rounded-md text-white">
            <SearchIcon />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Home

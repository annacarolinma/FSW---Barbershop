import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import { Button } from "./ui/button"
import { CircleUserRound } from "lucide-react"
import { CalendarDays } from "lucide-react"

const Header = () => {
  return (
    <Card>
      {/*Logo da barbearia*/}
      <CardContent className="ml-20 flex flex-row items-center justify-between p-10">
        <Image alt="FSW Barber" src="/logo.png" p-10 height={18} width={120} />

        {/*Agendamentos e perfil*/}
        <div className="flex justify-end">
          <Button
            variant="ghost"
            className="mr-4 flex items-center text-base text-white transition-colors duration-300 hover:text-indigo-500"
            style={{ backgroundColor: "transparent" }}
          >
            <CalendarDays className="mb-1 mr-2" /> Agendamento
          </Button>
          <Button className="w-26 py-15 mr-28 flex h-10 items-center justify-center">
            <CircleUserRound />
            <span className="ml-2 text-base">Perfil</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default Header

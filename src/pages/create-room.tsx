import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'

type GetRoomsAPIResponse = Array<{
  id: string
  name: string
}>

export function CreateRoom() {
  const { data, isLoading } = useQuery({
    queryKey: ['get-rooms'],
    queryFn: async () => {
      const response = await fetch('http://localhost:3333/rooms')
      const result: GetRoomsAPIResponse = await response.json()

      return result
    },
  })

  return (
    <div>
      {isLoading && <div>Carregando...</div>}
      <div className="flex flex-col gap-1">
        {data?.map((room) => {
          return (
            <Link key={room.id} to={`/rooms/${room.id}`}>
              {room.name}
            </Link>
          )
        })}
      </div>

      <div className="mt-10 flex flex-col gap-2">
        <Link className="underline" to="/room">
          Acessar sala
        </Link>
      </div>
    </div>
  )
}

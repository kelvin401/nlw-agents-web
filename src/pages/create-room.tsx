import { Link } from 'react-router-dom'

export function CreateRoom() {
  return (
    <div>
      <div>Create Room</div>

      <div className="mt-10 flex flex-col gap-2">
        <Link className="underline" to="/rooms/lets-code-together">
          Acessar sala
        </Link>

        <Link
          className="underline"
          target="_blank"
          to="https://youtu.be/gBTiQNF7ZXI?t=4903"
        >
          Acessar aula do momento atual
        </Link>
      </div>
    </div>
  )
}

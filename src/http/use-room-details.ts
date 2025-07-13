import { useQuery } from '@tanstack/react-query'
import type { GetRoomDetailsResponse } from './types/get-room-details'

export function useRoomDetails(roomId: string) {
  return useQuery({
    queryKey: ['get-room-details', roomId],
    queryFn: async () => {
      const response = await fetch(`http://localhost:3333/rooms/${roomId}`)
      const result: GetRoomDetailsResponse = await response.json()

      return result
    },
  })
}

import { useAtom } from 'jotai'
import { gameIdAtom } from '../../stores'

export const Play = () => {
    const [gameId] = useAtom(gameIdAtom)
    console.log(gameId)
    navigator.clipboard.writeText(window.location.href)

    return (
        <>
            <h1>PLAY IN {gameId}</h1>
        </>
    )
}

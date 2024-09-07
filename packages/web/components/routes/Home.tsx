import { useAtom } from 'jotai'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { uuid } from '../../../shared/utils/index'
import { gameIdAtom } from '../../stores'


export const Home = () => {
  const [, setGameId] = useAtom(gameIdAtom)
  const generatedUUID = uuid()
  useEffect(() => setGameId(generatedUUID), [])

  return (
    <>
      <h1>Home</h1>
      <nav>
        <p>
          <Link to="/">Home</Link>
        </p>
        <p>
          <Link to={`/play/${generatedUUID}`} >Play</Link>
        </p>
        </nav>
    </>
  )
}

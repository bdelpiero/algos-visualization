import { useState } from "react"
import { Controls } from "./components/Controls"
import { Grid } from "./components/Grid"
import { Algorithm } from "./types"

export function Maze() {
  const [maze, setMaze] = useState(null)

  return (
    <div className="container">
      <Controls generateMaze={setMaze} />
      <Grid maze={maze} />
    </div>
  )
}

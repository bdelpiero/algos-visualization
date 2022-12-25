import { useState } from "react"
import { Controls } from "./components/Controls"
import { Grid } from "./components/Grid"
import { Algorithm } from "./types"

export function Maze() {
  const [maze, setMaze] = useState(null)
  // TODO: should be of Algorithm type
  const [algorithm, setAlgorithm] = useState<string>(Algorithm.AStar)

  return (
    <div className="maze-container">
      <h2>Maze</h2>
      <Controls onAlgorithmSelect={setAlgorithm} onGenerate={setMaze} />
      <Grid maze={maze} algorithm={algorithm} />
    </div>
  )
}

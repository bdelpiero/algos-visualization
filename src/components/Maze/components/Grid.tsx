// TODO: add type for maze

import { useState, ChangeEvent } from "react"
import { Algorithm } from "../types"

// TODO: fix type for algorithm (should be enum)
type Props = {
  maze: any
}

export function Grid({ maze }: Props) {
  // Does it make sense to have this select/state and handlers/button here?
  const [algorithm, setAlgorithm] = useState<string>(Algorithm.AStar)
  const handleAlgorithmSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setAlgorithm(e.target.value)
  }
  const handleSolve = () => {}

  return (
    <div className="grid-container">
      <div>grid placeholder</div>
      <div className="grid-controls">
        <select name="algorithm-select" id="algorithm-select" onChange={handleAlgorithmSelect}>
          <option value="A*">A*</option>
        </select>
        <button onClick={handleSolve}>Solve</button>
      </div>
    </div>
  )
}

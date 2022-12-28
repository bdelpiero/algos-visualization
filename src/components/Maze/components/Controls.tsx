import { ChangeEvent, FormEvent, useState } from "react"

// TODO: type maze
type Props = {
  generateMaze: (maze: any) => void
}

export const numericInputHandler = (callback: (value: number) => void) => (event: ChangeEvent<HTMLInputElement>) => {
  callback(Number(event.target.value))
}
// TODO: add tooltips with explanations to each field
export function Controls({ generateMaze }: Props) {
  // Should the three fields belong to the same object? useful for sth?
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  // sparseness of obstacles in the grid
  const [sparseness, setSparseness] = useState(0.1)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault
    // (re)set Maze to be drawn
    // TODO: call generateMaze
  }

  return (
    <form onSubmit={handleSubmit} className="controls-form">
      <h2 className="title">Maze</h2>
      <label>
        Width:
        <input type="number" value={width} onChange={numericInputHandler(setWidth)} />
      </label>
      <label>
        Height:
        <input type="number" value={height} onChange={numericInputHandler(setHeight)} />
      </label>
      <label>
        Sparseness:
        <input type="number" value={sparseness} onChange={numericInputHandler(setSparseness)} />
      </label>
      <div>
        <button>Generate</button>
      </div>
    </form>
  )
}

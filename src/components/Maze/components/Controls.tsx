import { ChangeEvent, useState } from "react"

type Props = {
  onAlgorithmSelect: (algorithm: string) => void
  onGenerate: (maze: any) => void
}

export function Controls({ onAlgorithmSelect, onGenerate }: Props) {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  const generate = () => {
    // (re)set Maze to be drawn
  }

  const handleAlgorithmSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    onAlgorithmSelect(e.target.value)
  }

  return (
    <div>
      <div>
        <label>
          Width:
          <input type="number" />
        </label>
        <label>
          Height:
          <input type="number" />
        </label>
        <select name="algorithm-select" id="algorithm-select" onChange={handleAlgorithmSelect}>
          <option value="A*">A*</option>
        </select>
      </div>
      <div>
        <button>Generate</button>
        <button>Solve</button>
      </div>
    </div>
  )
}

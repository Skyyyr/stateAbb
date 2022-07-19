import { SyntheticEvent, useState} from 'react'
import './App.css'
// @ts-ignore
import * as stateList from './statedata/index.js'

function App() {
  let htmlContent: any = []
  const [stateData, setStateData] = useState()

  const loadStoredData = () => {
    stateList['default'].forEach((x: any) => addItemToList(x))
  }

  const addItemToList = (newItem: any) => {
    htmlContent.push(
        <option value={newItem['name']}>
          {newItem['name']}, {newItem['alpha-2']}
        </option>)
  }

  loadStoredData()

  function displayShort(e: SyntheticEvent<HTMLSelectElement, Event>) {
    // @ts-ignore
    const selected = e.target.text
    if (selected != undefined) {
      setStateData(selected.split(', ')[1])
    }
  }

  return (
    <div className="App">
      <select onClick={(e) => displayShort(e)}>
        {htmlContent}
      </select>
      <div>
        <label>
          {stateData}
        </label>
      </div>
    </div>
  )
}

export default App

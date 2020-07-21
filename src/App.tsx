import React from "react";
import "./App.css";
import Options from "./components/Options";
import Visualisation from "./components/Visualisation";
import { generateValues } from "./Utils/ListGeneration";

function App() {
  const Algorithms: string[] = [
    "Unsorted",
    "BubbleSort",
    "QuickSort",
    "SelectionSort",
    "InsertionSort",
    "HeapSort",
    "MergeSort",
  ];

  const values: number[] = generateValues();
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sorting Algorithms</h1>
      </header>
      <div className="App-body">
        {/* Make this title dynamic and change based on selection */}
        <h2 className="Content-title">Bubble Sort</h2>
        <div className="Display-container">
          <Options Algorithms={Algorithms} Values={values} />
          <Visualisation Values={values} />
        </div>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import Options from "./components/Options";
import Visualisation from "./components/Visualisation";

function App() {
  let Algorithms: string[] = [
    "BubbleSort",
    "QuickSort",
    "SelectionSort",
    "InsertionSort",
    "HeapSort",
    "MergeSort",
  ];
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sorting Algorithms</h1>
      </header>
      <body className="App-body">
        {/* Make this title dynamic and change based on selection */}
        <h2 className="Content-title">Bubble Sort</h2>
        <div className="Display-container">
          <Options Algorithms={Algorithms} />
          <Visualisation />
        </div>
      </body>
    </div>
  );
}

export default App;

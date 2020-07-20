import * as React from "react";
import { useState, useEffect } from "react";
import { Select, InputLabel, MenuItem } from "@material-ui/core";
import {
  bubbleSort,
  quickSort,
  selectionSort,
  insertionSort,
  heapSort,
  mergeSort,
} from "../Utils/Sorting";

export interface OptionsProps {
  Algorithms: string[];
  Values: number[];
}

const Options: React.SFC<OptionsProps> = (OptionsProps) => {
  const [algorithm, setAlgorithm] = useState(OptionsProps.Algorithms[0]);
  const [values, setValues] = useState([1]);

  const onChangeHandler = (event: any) => {
    setAlgorithm(event.target.value);
  };

  useEffect(() => {
    setValues(OptionsProps.Values);
    switch (algorithm) {
      case OptionsProps.Algorithms[1]:
        console.log("Before:", values);
        setValues(bubbleSort(values));
        console.log("After:", values);
        break;
      case OptionsProps.Algorithms[2]:
        setValues(quickSort(values));
        break;
      case OptionsProps.Algorithms[3]:
        setValues(selectionSort(values));
        break;
      case OptionsProps.Algorithms[4]:
        setValues(insertionSort(values));
        break;
      case OptionsProps.Algorithms[5]:
        setValues(heapSort(values));
        break;
      case OptionsProps.Algorithms[6]:
        setValues(mergeSort(values));
        break;
    }
  }, [algorithm]);

  return (
    <div className="options col-1">
      <InputLabel id="algorithmSelectLabel">Select an Algorithm</InputLabel>
      <Select
        labelId="algorithmSelectLabel"
        id="algorithmSelect"
        onChange={onChangeHandler}
        value={algorithm}
      >
        {OptionsProps.Algorithms.map((algorithm, index) => {
          return (
            <MenuItem key={index} value={algorithm}>
              {algorithm}
            </MenuItem>
          );
        })}
      </Select>
    </div>
  );
};

export default Options;

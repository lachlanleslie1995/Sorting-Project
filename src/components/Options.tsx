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

import { generateValues } from "../Utils/ListGeneration";

export interface OptionsProps {
  Algorithms: string[];
  Values: number[];
}

const Options: React.SFC<OptionsProps> = (OptionsProps) => {
  const [algorithm, setAlgorithm] = useState(OptionsProps.Algorithms[0]);
  const [values, setValues] = useState(OptionsProps.Values);

  const onChangeHandler = (event: any) => {
    setAlgorithm(event.target.value);
  };

  useEffect(() => {
    setValues(OptionsProps.Values);
    switch (algorithm) {
      case OptionsProps.Algorithms[0]:
        //TODO: Fix this. Currently doesn't set a new array. It makes the values but they're not set
        console.log("Before:", values);
        let temp = generateValues();
        setValues(temp);
        console.log("temp:", temp);
        console.log("After:", values);
        break;
      case OptionsProps.Algorithms[1]:
        console.log("Before:", values);
        setValues(bubbleSort(values));
        console.log("After:", values);
        break;
      case OptionsProps.Algorithms[2]:
        console.log("Before:", values);
        setValues(quickSort(values, 0, values.length - 1));
        console.log("After:", values);
        break;
      case OptionsProps.Algorithms[3]:
        console.log("Before:", values);
        setValues(selectionSort(values));
        console.log("After:", values);
        break;
      case OptionsProps.Algorithms[4]:
        console.log("Before:", values);
        setValues(insertionSort(values));
        console.log("After:", values);
        break;
      case OptionsProps.Algorithms[5]:
        console.log("Before:", values);
        setValues(heapSort(values));
        console.log("After:", values);
        break;
      case OptionsProps.Algorithms[6]:
        console.log("Before:", values);
        setValues(mergeSort(values));
        console.log("After:", values);
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
          //TODO: Don't include Unsorted in the list. Or make it randomise the order again? That could be fun
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

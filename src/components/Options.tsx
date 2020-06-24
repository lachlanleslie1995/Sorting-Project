import * as React from "react";
import { Select, InputLabel, MenuItem } from "@material-ui/core";

export interface OptionsProps {
  Algorithms: string[];
}

const Options: React.SFC<OptionsProps> = (OptionsProps) => {
  return (
    <div className="options col-1">
      <h3>Here I will display some options</h3>
      <InputLabel id="selectLabel">Select an Algorithm</InputLabel>
      <Select labelId="selectLabel">
        {OptionsProps.Algorithms.map((algorithm) => {
          return <MenuItem>{algorithm}</MenuItem>;
        })}
      </Select>
    </div>
  );
};

export default Options;

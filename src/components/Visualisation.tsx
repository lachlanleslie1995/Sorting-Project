import * as React from "react";

export interface VisualisationProps {
  Values: number[];
}

const Visualisation: React.SFC<VisualisationProps> = (VisualisationProps) => {
  return (
    <div className="visualisation col-2">
      This will be used to visualise the sorting
      <div className="display-values">
        {VisualisationProps.Values.map((value, index) => {
          return <div key={index}>{value}</div>;
        })}
      </div>
    </div>
  );
};

export default Visualisation;

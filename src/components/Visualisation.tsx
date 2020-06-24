import * as React from "react";

export interface VisualisationProps {}

const Visualisation: React.SFC<VisualisationProps> = () => {
  return (
    <div className="visualisation col-2">
      This will be used to visualise the sorting
    </div>
  );
};

export default Visualisation;

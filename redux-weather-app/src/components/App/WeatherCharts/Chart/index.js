import _ from "lodash";
import React from "react";
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
} from "react-sparklines";

const average = data => _.round(_.sum(data) / data.length);

const Chart = props => {
  return (
    <>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <p>Average: {average(props.data)} {props.units}</p>
    </>
  );
};

export default Chart;

import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

import _ from 'lodash';

const average = data => _.round(_.sum(data) / data.length);

const Chart = props => {
  const { data, color, units } = props;
  return (
    <div>
      <Sparklines height={120} width={180} data={data}>
        <SparklinesLine color={color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>Average temperature: <b>{average(data)}{units}</b></div>
    </div>
  );
}

export default Chart;

'use client';
import * as React from 'react';
import Box from '@mui/material/Box';

import { ResponsiveChartContainer } from '@mui/x-charts/ResponsiveChartContainer';
import { LinePlot } from '@mui/x-charts/LineChart';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
export default function SwitchSeriesType() {
  const [type, setType] = React.useState('line');
  return (
    <Box sx={{ width: '100%' }}>
      <div>
        <ResponsiveChartContainer
          series={[
            {
              type,
              data: [1, 2, 3, 2, 1],
            },
            {
              type,
              data: [4, 3, 1, 3, 4],
            },
          ]}
          xAxis={[
            {
              data: ['A', 'B', 'C', 'D', 'E'],
              scaleType: 'band',
              id: 'x-axis-id',
            },
          ]}
          height={200}
        >
          <LinePlot />
          <ChartsXAxis label="X axis" position="bottom" axisId="x-axis-id" />
        </ResponsiveChartContainer>
      </div>
    </Box>
  );
}

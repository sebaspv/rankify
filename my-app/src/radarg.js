  
import React from 'react';
import { Radar } from 'react-chartjs-2';


let arr=[...localStorage.getItem('img')];


const data = {
  labels: ['Industry Complementing', 'Colour Scheme', 'Shape', 'Depth', 'Font Choice', 'Visually Appealing'],
  datasets: [
    {
      label: 'Your Logo',
      data: [...arr],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
  ],
};

const options = {
  scale: {
    ticks: { beginAtZero: true },
    maintainAspectRatio:false,
    fill:false,
  },
};




const RadarChart=()=>(
  <>
    <Radar data={data} options={{options}} width={240} height={240} />
  </>
);

export default RadarChart;
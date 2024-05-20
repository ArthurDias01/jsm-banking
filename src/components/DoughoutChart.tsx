'use client';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(Tooltip, Legend, ArcElement);

export const DoughoutChart = ({ accounts }: DoughnutChartProps) => {
  const data = {
    datasets: [{
      label: 'Banks',
      data: [1250, 500, 250],
      backgroundColor: ['#0747b6', '#2265d8', '#2f91fa'],
    }],
    labels: ['Bank 1', 'Bank 2', 'Bank 3'],
  }
  return (
    <Doughnut
      data={data}
      options={{
        cutout: '60%',  
        plugins: {
          legend: {
            display: false,
          },
        },
      }}
    />
  );
};

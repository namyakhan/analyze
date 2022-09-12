import { useState } from "react";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);

const ExpensesChart = () => {
  const [data, setData] = useState({
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Yearly Expenses",
        data: [20, 0, 30, 10, 51, 12, 30, 59, 0, 10, 21, 28],

        borderColor: "#44195E",
        tension: 0.4,

        pointBorderColor: " #E44B31",
        pointBackgroundColor: "#E44B31",
        showLine: true,
      },
    ],
  });

  return (
    <div>
      <div className="bg-white  md:w-[380px] rounded-md drop-shadow-sm hover:drop-shadow-lg flex flex-col items-start p-2 md:p-4 ">
        <h2>Expenses</h2>
        <div className="w-[250px] md:w-[350px] ">
          <Line data={data}>Hello</Line>
        </div>
      </div>
    </div>
  );
};

export default ExpensesChart;

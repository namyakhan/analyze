import { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
//       import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart1 = () => {
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
        label: "Yearly Balance",
        data: [10, 20, 30, 42, 51, 82, 31, 59, 61, 73, 91, 58],
        backgroundColor: ["#44195E", "#E44B31"],
        borderColor: "#44195E",
        tension: 0.4,
      },
    ],
    borderColor: ["#44195E", "#E44B31"],
    borderWidth: 1,
  });
  return (
    <div className="bg-white md:w-[340px] rounded-md drop-shadow-sm hover:drop-shadow-lg flex flex-col items-start p-3 md:p-4 ">
      <h2>Balance</h2>
      <div className="w-[250px] md:w-[300px]  ">
        <Bar data={data} height={400} width={600}></Bar>
      </div>
    </div>
  );
};

export default BarChart1;

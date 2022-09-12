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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart2 = () => {
  const data = {
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
        backgroundColor: ["#44195E", "#E44B31"],
        borderColor: "#44195E",
        tension: 0.4,
      },
    ],
    borderColor: ["#44195E", "#E44B31"],
    borderWidth: 1,
  };
  return (
    <div className="bg-white md:w-[340px]  rounded-md drop-shadow-sm hover:drop-shadow-lg flex flex-col items-start p-3 md:p-4 ">
      <h2>Expenses</h2>
      <div className="w-[250px] md:w-[300px]">
        <Bar data={data} height={400} width={600}></Bar>
      </div>
    </div>
  );
};

export default BarChart2;

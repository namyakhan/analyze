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

const BarChart3 = () => {
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
        label: "Yearly Income",
        data: [100, 90, 80, 92, 91, 70, 61, 59, 61, 73, 80, 90],
        backgroundColor: ["#44195E", "#E44B31"],
        borderColor: "#44195E",
        tension: 0.4,
      },
    ],
    borderColor: ["#44195E", "#E44B31"],
    borderWidth: 1,
  };

  return (
    <div className="bg-white md:w-[400px] rounded-md drop-shadow-sm hover:drop-shadow-lg flex flex-col items-start p-3 md:p-4 ">
      <h2>Income</h2>
      <div className="w-[250px] md:w-[350px]   ">
        <Bar data={data}></Bar>
      </div>
    </div>
  );
};

export default BarChart3;

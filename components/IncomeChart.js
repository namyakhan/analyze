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

const IncomeChart = () => {
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

        borderColor: "#44195E",
        tension: 0.4,

        pointBorderColor: " #E44B31",
        pointBackgroundColor: "#E44B31",
        showLine: true,
      },
    ],
  };

  return (
    <div>
      <div className="bg-white md:w-[440px] rounded-md drop-shadow-sm hover:drop-shadow-lg flex flex-col items-start p-2 md:p-4 ">
        <h2>Income</h2>
        <div className="w-[250px] md:w-[400px]  ">
          <Line data={data}>Hello</Line>
        </div>
      </div>
    </div>
  );
};

export default IncomeChart;

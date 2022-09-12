import BalanceChart from "./BalanceChart";
import ExpensesChart from "./ExpensesChart";
import IncomeChart from "./IncomeChart";

const CardsLine = () => {
  return (
    <div className=" flex flex-col items-center space-y-5 container mx-auto p-5 md:px-10  ">
      <IncomeChart />
      <div className="flex flex-col items-center md:flex md:flex-row md:item-center space-y-5 md:space-y-0 md:space-x-10">
        <BalanceChart />
        <ExpensesChart />
      </div>
    </div>
  );
};

export default CardsLine;

import ChartBar from "./ChartBar";
import './Chart.css'

const Chart = (props) => {
  const values = props.data.map((month) => month.value);
  const maxValue = Math.max(...values);

  return (
    <div className="chart">
      {props.data.map((month) => (
        <ChartBar
          key={month.label}
          value={month.value}
          maximumValue={maxValue}
          label={month.label}
        />
      ))}
    </div>
  );
};

export default Chart;

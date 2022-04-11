import { SearchOutlined } from "@ant-design/icons";
import React from "react";
import "./ov.css";
import { Divider } from "antd";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const Overview = () => {
  const options = {
    chart: {
      type: "spline",
    },
    title: {
      text: "All Activity",
    },
    series: [
      {
        data: [1, 2, 1, 4, 3, 6],
      },
    ],
  };
  return (
    <div className="overview">
      <div className="overview_top">
        <h2>Overview</h2>
        <form className="overview_search_box">
          <SearchOutlined style={{ fontSize: "large", fontWeight: "700" }} />
          <input id="search_input" placeholder="Search For Anything..." />
          <button type="submit" style={{ display: "none" }}></button>
        </form>
      </div>
      <Divider />
      <div className="graph">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  );
};

export default Overview;

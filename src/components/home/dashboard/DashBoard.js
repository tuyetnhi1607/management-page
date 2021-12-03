import React from "react";
import "./dashboard.scss";
import "boxicons";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Card from "./Card";
import Table2 from "../../table2/Table2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const topCustomers = {
  head: ["", "User", "total order", "total spending"],
  body: [
    {
      username: "john doe",
      order: "490",
      price: "$15,870",
    },
    {
      username: "frank iva",
      order: "250",
      price: "$12,251",
    },
    {
      username: "anthony baker",
      order: "120",
      price: "$10,840",
    },
    {
      username: "frank iva",
      order: "110",
      price: "$9,251",
    },
    {
      username: "anthony baker",
      order: "80",
      price: "$8,840",
    },
  ],
};

const renderHeaderCustomer = (item, index) => <th key={index}>{item}</th>;

const renderBodyCustomer = (item, index) => (
  <tr key={index}>
    <td>{index + 1}</td>
    <td>{item.username}</td>
    <td>{item.order}</td>
    <td>{item.price}</td>
  </tr>
);

const latestOrders = {
  head: ["", "order id", "user", "total price", "date", "status"],
  body: [
    {
        ind:"1",
      id: "#OD1711",
      user: "john doe",
      date: "17 Jun 2021",
      price: "$900",
      status: "shipping",
    },
    {
        ind:"2",
      id: "#OD1712",
      user: "frank iva",
      date: "1 Jun 2021",
      price: "$400",
      status: "paid",
    },
    {
        ind:"3",
      id: "#OD1712",
      user: "frank iva",
      date: "1 Jun 2021",
      price: "$400",
      status: "paid",
    },
    {
        ind:"4",
      id: "#OD1713",
      user: "anthony baker",
      date: "27 Jun 2021",
      price: "$200",
      status: "pending",
    },
    {
        ind:"5",
      id: "#OD1712",
      user: "frank iva",
      date: "1 Jun 2021",
      price: "$400",
      status: "paid",
    },
    {
        ind:"6",
      id: "#OD1713",
      user: "anthony baker",
      date: "27 Jun 2021",
      price: "$200",
      status: "refund",
    },
    {
        ind:"7",
      id: "#OD1711",
      user: "john doe",
      date: "17 Jun 2021",
      price: "$900",
      status: "shipping",
    },

    {
        ind:"8",
      id: "#OD1713",
      user: "anthony baker",
      date: "27 Jun 2021",
      price: "$200",
      status: "pending",
    },
    {
        ind:"9",
      id: "#OD1713",
      user: "anthony baker",
      date: "27 Jun 2021",
      price: "$200",
      status: "refund",
    },
    {
        ind:"10",
      id: "#OD1712",
      user: "frank iva",
      date: "1 Jun 2021",
      price: "$400",
      status: "paid",
    },

    {
        ind:"11",
      id: "#OD1711",
      user: "john doe",
      date: "17 Jun 2021",
      price: "$900",
      status: "shipping",
    },

    {
        ind:"12",
      id: "#OD1713",
      user: "anthony baker",
      date: "27 Jun 2021",
      price: "$200",
      status: "pending",
    },
    {
        ind:"13",
      id: "#OD1712",
      user: "frank iva",
      date: "1 Jun 2021",
      price: "$400",
      status: "paid",
    },
    {
        ind:"14",
      id: "#OD1712",
      user: "frank iva",
      date: "1 Jun 2021",
      price: "$400",
      status: "paid",
    },

    {
        ind:"15",
      id: "#OD1711",
      user: "john doe",
      date: "17 Jun 2021",
      price: "$900",
      status: "shipping",
    },
    {
        ind:"16",
      id: "#OD1713",
      user: "anthony baker",
      date: "27 Jun 2021",
      price: "$200",
      status: "refund",
    },
    {
        ind:"17",
      id: "#OD1712",
      user: "frank iva",
      date: "1 Jun 2021",
      price: "$400",
      status: "paid",
    },
    {
        ind:"18",
      id: "#OD1713",
      user: "anthony baker",
      date: "27 Jun 2021",
      price: "$200",
      status: "pending",
    },
    {
        ind:"19",
      id: "#OD1712",
      user: "frank iva",
      date: "1 Jun 2021",
      price: "$400",
      status: "paid",
    },
    {
        ind:"20",
      id: "#OD1711",
      user: "john doe",
      date: "17 Jun 2021",
      price: "$900",
      status: "shipping",
    },
    {
        ind:"21",
      id: "#OD1713",
      user: "anthony baker",
      date: "27 Jun 2021",
      price: "$200",
      status: "refund",
    },

    {
        ind:"22",
      id: "#OD1712",
      user: "frank iva",
      date: "1 Jun 2021",
      price: "$400",
      status: "paid",
    },
    {
        ind:"23",
      id: "#OD1713",
      user: "anthony baker",
      date: "27 Jun 2021",
      price: "$200",
      status: "pending",
    },
    {
        ind:"24",
      id: "#OD1712",
      user: "frank iva",
      date: "1 Jun 2021",
      price: "$400",
      status: "paid",
    },
    {
        ind:"25",
      id: "#OD1713",
      user: "anthony baker",
      date: "27 Jun 2021",
      price: "$200",
      status: "refund",
    },
  ],
};
const orderStatus = {
  shipping: "blue",
  pending: "yellow",
  paid: "green",
  refund: "red",
};

const renderHeaderOrder = (item, index) => <th key={index}>{item}</th>;
const renderBodyOrder = (item, index) => (
  <tr key={index}>
    <td>{item.ind}</td>
    <td>{item.id}</td>
    <td>{item.user}</td>
    <td>{item.date}</td>
    <td>{item.price}</td>
    <td style={{color: `${orderStatus[item.status]}`}}>{item.status}</td>
  </tr>
);
function DashBoard() {
  return (
    <div className="dashboard">
      <div className="dashboard-row1">
        <div className="dashboard-row1-card">
          <div className="dashboard-row1-card-1">
            <Card value="1.995" icon="bx-cart" title="Toral order" />
          </div>
          <div className="dashboard-row1-card-2">
            <Card value="1.995" icon="bx-shopping-bag" title="Toral order" />
          </div>
          <div className="dashboard-row1-card-3">
            <Card value="1.995" icon="bx-money" title="Toral order" />
          </div>
          <div className="dashboard-row1-card-4">
            <Card value="1.995" icon="bx-file-blank" title="Toral order" />
          </div>
        </div>
        <div className="dashboard-row1-chart">
          <Line
            data={{
              labels: [
                1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050,
              ],
              datasets: [
                {
                  data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
                  label: "Africa",
                  borderColor: "#3e95cd",
                  fill: false,
                },
                {
                  data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
                  label: "Asia",
                  borderColor: "#8e5ea2",
                  fill: false,
                },
                {
                  data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
                  label: "Europe",
                  borderColor: "#3cba9f",
                  fill: false,
                },
                {
                  data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
                  label: "Latin America",
                  borderColor: "#e8c3b9",
                  fill: false,
                },
                {
                  data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
                  label: "North America",
                  borderColor: "#c45850",
                  fill: false,
                },
              ],
            }}
            options={{
              title: {
                display: true,
                text: "World population per region (in millions)",
              },
              legend: {
                display: true,
                position: "bottom",
              },
              maintainAspectRatio: false,
            }}
          />
        </div>
      </div>
      <div className="dashboard-row2">
        <div className="dashboard-row2-topfood">
          <div className="title">Top customer</div>
          <Table2
            dataHeader={topCustomers.head}
            renderHeader={(item, index) => renderHeaderCustomer(item, index)}
            dataBody={topCustomers.body}
            renderBody={(item, index) => renderBodyCustomer(item, index)}
          />
        </div>
        <div className="dashboard-row2-orders">
          <div className="title">Top order</div>
          <Table2
            limit={10}
            dataHeader={latestOrders.head}
            renderHeader={(item, index) => renderHeaderOrder(item, index)}
            dataBody={latestOrders.body}
            renderBody={(item, index) => renderBodyOrder(item, index)}
          />
        </div>
      </div>
    </div>
  );
}

export default DashBoard;

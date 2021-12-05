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
    {
      username: "anthony baker",
      order: "120",
      price: "$10,840",
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
  head: ["", "order id", "user",  "date","total price", "status"],
  body: [
    {
      ind: "1",
      id: "#OD1711",
      user: "john doe",
      date: "17 Jun 2021",
      price: "$900",
      status: "shipping",
    },
    {
      ind: "2",
      id: "#OD1712",
      user: "frank iva",
      date: "1 Jun 2021",
      price: "$400",
      status: "paid",
    },
    {
      ind: "3",
      id: "#OD1712",
      user: "frank iva",
      date: "1 Jun 2021",
      price: "$400",
      status: "paid",
    },
    {
      ind: "4",
      id: "#OD1713",
      user: "anthony baker",
      date: "27 Jun 2021",
      price: "$200",
      status: "pending",
    },
    {
      ind: "5",
      id: "#OD1712",
      user: "frank iva",
      date: "1 Jun 2021",
      price: "$400",
      status: "paid",
    },
    {
      ind: "6",
      id: "#OD1713",
      user: "anthony baker",
      date: "27 Jun 2021",
      price: "$200",
      status: "refund",
    }
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
    <td style={{ color: `${orderStatus[item.status]}` }}>
      <div style={{backgroundColor: `${orderStatus[item.status]}`, borderRadius:'10px', color: 'white', width:'100px', padding: '5px'}}>{item.status}</div>
    </td>
  </tr>
);
function DashBoard() {
  return (
    <div className="dashboard">
      <div className="dashboard-row1">
        <div className="dashboard-row1-card">
          <div className="dashboard-row1-card-item">
            <Card
              value="1.995"
              icon="bx-cart"
              title="Toral orders"
              color="#38d996"
            />
          </div>
          <div className="dashboard-row1-card-item">
            <Card
              value="2.656"
              icon="bx-shopping-bag"
              title="Toral products"
              color="#fc6481"
            />
          </div>
          <div className="dashboard-row1-card-item">
            <Card
              value="124.345 $"
              icon="bx-money"
              title="Toral proceeds"
              color="#d36ec6"
            />
          </div>
          <div className="dashboard-row1-card-item">
            <Card
              value="546"
              icon="bx-file-blank"
              title="Toral customers"
              color="#9085da"
            />
          </div>
        </div>
        <div className="dashboard-row1-chart">
          <Line
            data={{
              labels: [
                'Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'
              ],
              datasets: [
                {
                  data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478, 2584, 3190],
                  label: "Humburger",
                  borderColor: "#3e95cd",
                  fill: false,
                },
                {
                  data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 4038, 5384, 7239],
                  label: "Pizza",
                  borderColor: "#8e5ea2",
                  fill: false,
                },
                {
                  data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734, 856, 903],
                  label: "Cream Vanila",
                  borderColor: "#3cba9f",
                  fill: false,
                },
                {
                  data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784, 847, 926],
                  label: "Chicken",
                  borderColor: "#e8c3b9",
                  fill: false,
                },
                {
                  data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433, 574, 1725],
                  label: "Hotdogs",
                  borderColor: "#c45850",
                  fill: false,
                },
              ],
            }}
            options={{
              title: {
                display: true,
                text: "",
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

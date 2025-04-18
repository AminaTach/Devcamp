import React from 'react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const Dashboard = () => {
    const data = [
        { name: 'Week n-2', Actual: 10, Predicted: 15 },
        { name: 'Week n-1', Actual: 20, Predicted: 25 },
        { name: 'Week n', Actual: 30, Predicted: 15 },
        { name: 'Week n+1', Actual: 60, Predicted: 55 },
        { name: 'Week n+2', Actual: 50, Predicted: 55 },
        { name: 'Week n+3', Actual: 50, Predicted: 55 },
        { name: 'Week n+4', Actual: 70, Predicted: 35 },
        { name: 'Week n+5', Actual: 80, Predicted: 85 },
        { name: 'Week n+6', Actual: 90, Predicted: 95 },
        { name: 'Week n+7', Actual: 80, Predicted: 75 },
        { name: 'Week n+8', Actual: 110, Predicted: 115 },
    ];

    return (
        <div className="container h-[95%] w-full min-w-[100vh] flex flex-col p-4 bg-white rounded-2xl my-4 mr-2 z-10">

          <h1 className="text-2xl font-bold text-h1 mb-4">Overview</h1>
          <p className="mb-4 text-h2">Real-time overview of your cosmetic stock levels, expiration risks, and restock priorities.</p>

            <div className="flex flex-row gap-4">
                <div className="flex flex-col gap-4 w-1/3">
                    <div className="bg-white p-4 rounded shadow">
                        <h2 className="text-xl font-bold mb-2">Total Predicted Sales This Week</h2>
                        <p className="text-3xl font-bold">250 units</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow">
                        <h2 className="text-xl font-bold mb-2">Out-of-Stock Rate</h2>
                        <p className="text-3xl font-bold">10% SKU-level</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow">
                        <h2 className="text-xl font-bold mb-2">AI Forecast Accuracy</h2>
                        <p className="text-3xl font-bold">80%</p>
                    </div>
                </div>

                <div className="bg-white p-4 rounded shadow flex-grow">
                    <ResponsiveContainer width="100%" height={300}>
                        <AreaChart
                            data={data}
                            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Area
                                type="monotone"
                                dataKey="Actual"
                                stackId="1"
                                stroke="#8884d8"
                                fill="#8884d8"
                                fillOpacity={0.3}
                            />
                            <Area
                                type="monotone"
                                dataKey="Predicted"
                                stackId="1"
                                stroke="#ffc658"
                                fill="#ffc658"
                                fillOpacity={0.3}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-white p-4 rounded shadow">
                    <h2 className="text-xl font-bold mb-2">5 Products In High Demand this Week</h2>
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th className="text-left">Product Name</th>
                                <th className="text-left">Actual Stock</th>
                                <th className="text-left">Predicted Demand</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Argan Face Serum</td>
                                <td>330</td>
                                <td>1200 units</td>
                            </tr>
                            <tr>
                                <td>Vitamine C</td>
                                <td>568</td>
                                <td>1160 units</td>
                            </tr>
                            <tr>
                                <td>Argan Face Serum</td>
                                <td>124</td>
                                <td>1470 units</td>
                            </tr>
                            <tr>
                                <td>Argan Face Serum</td>
                                <td>710</td>
                                <td>2600 units</td>
                            </tr>
                            <tr>
                                <td>Argan Face Serum</td>
                                <td>710</td>
                                <td>900 units</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="bg-white p-4 rounded shadow">
                    <h2 className="text-xl font-bold mb-2">Most Important Alerts</h2>
                    <ul>
                        <li className="text-red-500">Expiration Alert: Product expires in 3 or 4 months</li>
                        <li className="text-red-500">Stockout of product X Risk Alert: Predicted demand  available stock in the next 7-14 days</li>
                        <li className="text-yellow-500">Dormant Product Alert: No sales of product X the last Y weeks (e.g., 4 weeks)</li>
                        <li className="text-red-500">Stockout of product T Risk Alert: Predicted demand  available stock in the next 7-14 days</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

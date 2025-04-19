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
import { FaBoxOpen } from 'react-icons/fa';
import { FavoriteChart, ChartCircle, Folder2 } from 'iconsax-reactjs';
import { HiBellAlert } from 'react-icons/hi2'; // using a bell icon from react-icons

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
        <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Overview</h1>
                <div className="flex items-center space-x-4">
                    <button className="text-purple-500 hover:underline">Unlock Monthly & Annual Analysis</button>
                    <button className="text-yellow-500 hover:underline">Upgrade to Pro</button>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-start gap-6">
                <div className="grid grid-rows-3 gap-6 w-full md:w-1/3">
                    <div className="bg-white p-6 flex flex-col rounded-lg shadow-md border border-gray-200">
                        <div className="flex items-center mb-4">
                            <FavoriteChart className="text-[#DB4DFF] w-10 h-10 p-2 bg-[#ffb1f175] rounded-lg mr-4" />
                            <h2 className="text-lg text-[#6B7280]">Total Predicted Sales This Week</h2>
                        </div>
                        <p className="text-4xl font-bold text-gray-700">250 units</p>
                    </div>

                    <div className="bg-white p-6 flex flex-col rounded-lg shadow-md border border-gray-200">
                        <div className="flex items-center mb-4">
                            <FaBoxOpen className="text-orange-500 w-10 h-10 p-2 bg-orange-100 rounded-lg mr-4" />
                            <h2 className="text-lg text-[#6B7280]">Out-of-Stock Rate</h2>
                        </div>
                        <p className="text-4xl font-bold text-gray-700">10% SKU-level</p>
                    </div>

                    <div className="bg-white p-6 flex flex-col rounded-lg shadow-md border border-gray-200">
                        <div className="flex items-center mb-4">
                            <ChartCircle className="text-[#2563EB] w-10 h-10 p-2 bg-[#EDF2FF] rounded-lg mr-4" />
                            <h2 className="text-lg text-[#6B7280]">AI ForeCast Accuracy (%)</h2>
                        </div>
                        <p className="text-4xl font-bold text-gray-700">80%</p>
                    </div>
                </div>

                <div className="w-full md:w-2/3 mt-6 md:mt-0 bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h2 className="text-xl font-bold mb-4 text-gray-800">Top Product Trend: Forecast vs Reality (Weekly Comparison)</h2>
                    <ResponsiveContainer width="100%" height={350}>
                        <AreaChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Area type="monotone" dataKey="Actual" stackId="1" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
                            <Area type="monotone" dataKey="Predicted" stackId="1" stroke="#ffc658" fill="#ffc658" fillOpacity={0.3} />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center">
                            <Folder2 className="text-orange-500 w-10 h-10 p-2 bg-orange-100 rounded-lg mr-4" />
                            <h2 className="text-xl font-bold text-gray-800">5 Products In High Demand this Week</h2>
                        </div>
                        <a href="#" className="text-purple-500 hover:underline">View Full Report</a>
                    </div>
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-gray-200">
                                <th className="text-left text-gray-600 pb-2">Product Name</th>
                                <th className="text-left text-gray-600 pb-2">Actual Stock</th>
                                <th className="text-left text-gray-600 pb-2">Predicted Demand</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { name: 'Argan Face Serum', stock: 330, demand: 1200 },
                                { name: 'Vitamine C', stock: 568, demand: 1160 },
                                { name: 'Argan Face Serum', stock: 124, demand: 1470 },
                                { name: 'Argan Face Serum', stock: 710, demand: 2800 },
                                { name: 'Argan Face Serum', stock: 710, demand: 900 },
                            ].map((product, index) => (
                                <tr key={index} className="border-b border-gray-200">
                                    <td className="text-gray-800 py-2">{product.name}</td>
                                    <td className="text-gray-800 py-2">{product.stock}</td>
                                    <td className="text-gray-800 py-2">{product.demand} units</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center">
                            <HiBellAlert className="text-red-500 h-6 w-6 mr-2" />
                            <h2 className="text-xl font-bold text-gray-800">Most Important Alerts</h2>
                        </div>
                        <a href="#" className="text-gray-500 hover:underline">View All Details</a>
                    </div>
                    <ul className="space-y-2">
                        {[
                            {
                                title: 'Stockout of product X Risk Alert',
                                desc: 'Predicted demand > available stock in the next 7-14 days',
                                color: 'red',
                            },
                            {
                                title: 'Stockout of product T Risk Alert',
                                desc: 'Predicted demand > available stock in the next 7-14 days',
                                color: 'red',
                            },
                            {
                                title: 'Expiration Alert',
                                desc: 'Product Z is nearing expiration in the next 30 days',
                                color: 'yellow',
                            },
                        ].map((alert, idx) => (
                            <li
                                key={idx}
                                className={`flex items-start p-3 border rounded-lg border-l-4 border-${alert.color}-500`}
                            >
                                <div className={`w-1 h-full bg-${alert.color}-500 mr-2`} />
                                <div>
                                    <p className={`text-${alert.color}-500 font-bold`}>{alert.title}</p>
                                    <p className="text-gray-600">{alert.desc}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

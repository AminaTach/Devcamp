import React from 'react';

const ImportantAlerts = () => {
    const alerts = [
        { message: 'Expiration Alert: Product expires in < 3 or 4 months', type: 'error' },
        { message: 'Stockout of product X Risk Alert: Predicted demand > available stock in the next 7-14 days', type: 'error' },
        { message: 'Dormant Product Alert: No sales of product X the last Y weeks (e.g., 4 weeks)', type: 'warning' },
        { message: 'Stockout of product T Risk Alert: Predicted demand > available stock in the next 7-14 days', type: 'error' },
    ];

    return (
        <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-bold mb-2">Most Important Alerts</h2>
            <ul>
                {alerts.map((alert, index) => (
                    <li key={index} className={`text-${alert.type === 'error' ? 'red' : 'yellow'}-500`}>
                        {alert.message}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ImportantAlerts;

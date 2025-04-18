import React from 'react';

const OverviewCard = ({ title, value }) => {
    return (
        <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-3xl font-bold">{value}</p>
        </div>
    );
};

export default OverviewCard;

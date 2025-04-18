import React from 'react';

// Premier composant: Tableau des produits à forte demande
const HighDemandProducts = () => {
  const products = [
    { name: 'Argan Face Serum', stock: 330, demand: '1200 units' },
    { name: 'Vitamine C', stock: 568, demand: '1160 units' },
    { name: 'Argan Face Serum', stock: 124, demand: '1470 units' },
    { name: 'Argan Face Serum', stock: 710, demand: '2800 units' },
    { name: 'Argan Face Serum', stock: 710, demand: '900 units' },
  ];

  return (
    <div className="bg-pink-50 p-6 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <div className="mr-2 bg-pink-200 p-2 rounded-lg">
          
          </div>
          <h2 className="text-lg font-medium">5 Products In High Demand this Week</h2>
        </div>
        
        <button className="flex items-center text-sm text-gray-600">
          View Full Report
          
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-700">
              <th className="py-2 text-sm font-medium">Product Name</th>
              <th className="py-2 text-sm font-medium">Actual Stock</th>
              <th className="py-2 text-sm font-medium">Predicted Demand</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="border-t border-gray-100">
                <td className="py-3 text-sm">{product.name}</td>
                <td className="py-3 text-sm">{product.stock}</td>
                <td className="py-3 text-sm">{product.demand}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

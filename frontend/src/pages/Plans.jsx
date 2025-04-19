import React from "react";

const PricingPlans = () => {
    return (
        <div className="min-h-screen bg-white p-6 md:p-12">
            <div className="max-w-5xl mx-auto">
                <div className="text-start mb-8">
                    <h1 className="text-2xl font-bold text-h1 mb-4">Pricing Plans – Cosmetics Demand Forecasting Platform</h1>
                    <p className="text-text mb-4">Start for free, experience everything for 10 days, and unlock your full predictive power with the Pro plan.</p>
                    <p className="text-h1 fint-normal hover:underline" onClick={() => window.history.back()}>
                        {'<-'} Back to Dashboard
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {/* Free Plan */}
                    <div className="border rounded-lg p-6 shadow-sm">
                        <h2 className="text-xl text-h1 font-semibold">Free Plan</h2>
                        <p className="text-2xl font-bold text-blue mt-2">0,00 DA</p>
                        <p className="text-sm text-gray-500 mt-1">Perfect to try the basics and manage a small product set.</p>
                        <ul className="mt-4 space-y-2 text-sm text-gray-700">
                            <li>✅ Up to 10 products</li>
                            <li>✅ Weekly AI predictions (basic)</li>
                            <li>✅ Low stock alerts only</li>
                            <li>❌ No exports</li>
                            <li>❌ No expiration alerts</li>
                        </ul>
                        <button className="mt-6 w-full bg-blue text-white py-2 rounded hover:bg-blue-800">
                            Try it now
                        </button>
                    </div>

                    {/* Pro Plan */}
                    <div className="border-2 border-[#FFB31F] rounded-lg p-6 shadow-md">
                        <h2 className="text-xl font-semibold">Pro Plan</h2>
                        <p className="text-2xl font-bold text-[#FFB31F]  mt-2">30000,00 DA</p>
                        <p className="text-sm text-gray-500 mt-1">
                            For professionals ready to manage their stock with precision.
                        </p>
                        <ul className="mt-4 space-y-2 text-sm text-gray-700">
                            <li>✅ Unlimited products</li>
                            <li>✅ Generate & Exportable reports (PDF, Excel, CSV)</li>
                            <li>✅ All advanced alerts: stockout, expiration, dormant</li>
                            <li>✅ Smart pack generator with demand forecast</li>
                            <li>✅ 1 user license active at a time</li>
                        </ul>
                        <button className="mt-6 w-full bg-[#FFB31F]  text-white py-2 rounded hover:bg-[#FFB31F] ">
                            Try it now
                        </button>
                    </div>

                    {/* Premium Trial */}
                    <div className="border rounded-lg p-6 shadow-sm">
                        <h2 className="text-xl font-semibold text-h1">Experience Premium — Free for 10 Days</h2>
                        <p className="text-2xl font-bold text-blue mt-2">0,00 DA</p>
                        <p className="text-sm text-gray-500 mt-1">
                            Try the full platform, no credit card required.
                        </p>
                        <ul className="mt-4 space-y-2 text-sm text-gray-700">
                            <li>✅ Access everything in Pro</li>
                            <li>✅ No credit card required</li>
                            <li>✅ After 10 days: switch to Free or upgrade to Pro</li>
                        </ul>
                        <button className="mt-6 w-full bg-blue text-white py-2 rounded hover:bg-blue-800">
                            Try it now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingPlans;

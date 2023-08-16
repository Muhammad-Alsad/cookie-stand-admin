import React from 'react';

function ReportTable({ reports }) {
    if (reports.length === 0) {
        return <h2>No Cookie Stands Available</h2>;
    }

    return (
        <table className="w-full border-collapse border border-gray-300 shadow-md bg-green-100">
            <thead className="bg-green-300">
                <tr>
                    <th className="border border-gray-300 p-2 text-black">Location</th>
                    <th className="border border-gray-300 p-2 text-black">Min Customers</th>
                    <th className="border border-gray-300 p-2 text-black">Max Customers</th>
                    <th className="border border-gray-300 p-2 text-black">Avg Cookies</th>
                  
                </tr>
            </thead>
            <tbody>
                {reports.map((report, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-green-200' : ''}>
                        <td className="border border-gray-300 p-2 text-black">{report.location}</td>
                        <td className="border border-gray-300 p-2 text-black">{report.minCustomers}</td>
                        <td className="border border-gray-300 p-2 text-black">{report.maxCustomers}</td>
                        <td className="border border-gray-300 p-2 text-black">{report.avgCookies}</td>

                    </tr>
                ))}
            </tbody>

        </table>


    );
}

export default ReportTable;

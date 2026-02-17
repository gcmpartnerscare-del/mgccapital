import React from "react";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";

export default function CostBreakdownNIW() {
  return (
    <Element name="costbreakdown"
      className="bg-white text-gray-800 py-16 px-4 lg:px-20"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          style={{ fontFamily: "Marcellus" }}
          className="text-4xl md:text-5xl font-bold text-center mb-10"
        >
          Cost Breakdown & Application Process
        </h2>

        {/* Application Process */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-2">
            The Application Process
          </h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>I-140 Immigrant Petition</li>
            <li>
              I-485 Adjustment of Status (can be filed concurrently if priority
              date is current)
            </li>
          </ul>
        </div>

        {/* Government Fees */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-4 border-b pb-2">
            Government Fees
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left border border-gray-300">
              <thead className="bg-gray-100 font-semibold">
                <tr>
                  <th className="p-3 border">Applicant Type</th>
                  <th className="p-3 border">Fee (USD)</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr>
                  <td className="p-3 border">I-140 Petition</td>
                  <td className="p-3 border">$1,015</td>
                </tr>
                <tr>
                  <td className="p-3 border">I-485 - Principal</td>
                  <td className="p-3 border">$1,440</td>
                </tr>
                <tr>
                  <td className="p-3 border">I-485 - Spouse/Child (14+)</td>
                  <td className="p-3 border">$1,440 each</td>
                </tr>
                <tr>
                  <td className="p-3 border">I-485 - Child (under 14)</td>
                  <td className="p-3 border">$950 each</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Attorney Fees */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-4 border-b pb-2">
            Attorney Fees
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left border border-gray-300">
              <thead className="bg-gray-100 font-semibold">
                <tr>
                  <th className="p-3 border">Service</th>
                  <th className="p-3 border">Fee (USD)</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr>
                  <td className="p-3 border">NIW I-140 - Researcher</td>
                  <td className="p-3 border">$8,000</td>
                </tr>
                <tr>
                  <td className="p-3 border">NIW I-140 - Non-Researcher</td>
                  <td className="p-3 border">$15,000</td>
                </tr>
                <tr>
                  <td className="p-3 border">I-485 Filing - Principal</td>
                  <td className="p-3 border">$2,750*</td>
                </tr>
                <tr>
                  <td className="p-3 border">I-485 - Spouse/Child</td>
                  <td className="p-3 border">$2,000 each*</td>
                </tr>
                <tr>
                  <td className="p-3 border italic text-xs" colSpan={2}>
                    *Discounted rate: $2,250 (principal) & $1,500 (dependents)
                    if GCM Partners handles I-140
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* GCM Processing Fees */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-4 border-b pb-2">
            GCM Partners Processing Fees (Flat Rate)
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left border border-gray-300">
              <thead className="bg-gray-100 font-semibold">
                <tr>
                  <th className="p-3 border">Person</th>
                  <th className="p-3 border">Fee (USD)</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr>
                  <td className="p-3 border">Principal Applicant</td>
                  <td className="p-3 border">$5,000</td>
                </tr>
                <tr>
                  <td className="p-3 border">Spouse/Child (each)</td>
                  <td className="p-3 border">$1,500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Sample Cost Estimate */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-4 border-b pb-2">
            Sample Cost Estimate: Family of 3
          </h3>
          <p className="text-gray-700 mb-2">
            Principal + Spouse + Child under 14
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left border border-gray-300">
              <thead className="bg-gray-100 font-semibold">
                <tr>
                  <th className="p-3 border">Category</th>
                  <th className="p-3 border">Description</th>
                  <th className="p-3 border">Amount (USD)</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr>
                  <td className="p-3 border">Government Fees</td>
                  <td className="p-3 border">I-140 + I-485 (3 people)</td>
                  <td className="p-3 border">$4,845</td>
                </tr>
                <tr>
                  <td className="p-3 border">Attorney Fees</td>
                  <td className="p-3 border">
                    NIW Non-Researcher + I-485 (3 people)
                  </td>
                  <td className="p-3 border">$20,250</td>
                </tr>
                <tr>
                  <td className="p-3 border">GCM Processing Fees</td>
                  <td className="p-3 border">1 Principal + 2 Dependents</td>
                  <td className="p-3 border">$8,000</td>
                </tr>
                <tr className="font-bold text-gray-900 bg-gray-50">
                  <td className="p-3 border" colSpan={2}>
                    Total Payable
                  </td>
                  <td className="p-3 border">$33,095</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-2 italic">
            Installment payment plans are available for eligible applicants.
          </p>
        </div>
      </div>
    </Element>
  );
}

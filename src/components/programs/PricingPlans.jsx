import React from "react";
import programs from "../../data/programs";

export default function PricingPlans({ category }) {
  const { heading, subtext, tableHeaders, rows } = programs[category].pricingDetails;

  return (
    <section className="py-20 px-4 md:px-10">
      <h2 style={{fontFamily: "Marcellus"}} className="text-4xl font-semibold mb-6">{heading}</h2>
      <p>{subtext}</p>
      <div className="pricing-table-wrapper">
        <table className="pricing-table">
          <thead>
            <tr>
              {tableHeaders.map((head, i) => (
                <th key={i}>{head}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr key={idx}>
                {row.map((cell, j) => (
                  <td key={j}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}


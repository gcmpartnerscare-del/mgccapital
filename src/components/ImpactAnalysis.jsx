import React from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { BarChart2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const chartData = [
  { quarter: "Q1 400", value: 40000 },
  { quarter: "Q2 300", value: 30000 },
  { quarter: "Q3 250", value: 25000 },
  { quarter: "Q4 200", value: 20000 },
];
const lastYearsChartData = [
  { quarter: "Q1 400", value: 60000 },
  { quarter: "Q2 300", value: 40000 },
  { quarter: "Q3 250", value: 35000 },
  { quarter: "Q10 200", value: 25000 },
  { quarter: "Q11 200", value: 18000 },
  { quarter: "Q4 200", value: 20000 },
  { quarter: "Q9 200", value: 16000 },
  { quarter: "Q8 200", value: 14000 },
  { quarter: "Q5 200", value: 15000 },
  { quarter: "Q12 200", value: 12000 },
  { quarter: "Q7 200", value: 12000 },
  { quarter: "Q6 200", value: 10000 },
];

export default function ImpactAnalysis() {
  return (
    <section className="bg-white py-16 px-4 md:px-10 w-full grid grid-cols-1 xl:grid-cols-3 gap-6">
      <div className="min-h-[350px] h-full bg-primary-700 rounded-xl p-6 shadow text-white flex flex-col justify-between gap-4">
        <div className="flex items-center gap-2">
          <BarChart2 className="w-4 h-4 text-white" />
          <p className="text-sm font-medium">Application Journey Overview</p>
        </div>
        

        <ResponsiveContainer width="100%" height={308}>
          <BarChart data={chartData}>
            <XAxis dataKey="quarter" hide />
            <YAxis hide />
            <Bar dataKey="value" fill="#fff" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>

        <div className="flex-grow flex items-end">
          <h4 className="text-2xl font-bold text-white leading-tight">
            Streamlined Pathways For Applicants
          </h4>
        </div>

        <p className="text-sm text-gray-200">
          Our streamlined processes have led to
          significant efficiency gains, reducing the average time for
          application processing.
        </p>
      </div>

      
      <div className="col-span-1 flex flex-col gap-4 xl:col-span-2">
        {/* Financial Highlights */}
        <div className="bg-white rounded-xl p-6 shadow flex flex-col gap-4">
          <div className="flex justify-between md:items-center items-start flex-col md:flex-row gap-4">
            <h3 className="text-lg font-semibold text-gray-900">
              GCM Partners Program Highlights
            </h3>
            <Link to={"/blogs"} className="text-sm text-gray-600 hover:text-blue-600 flex items-center justify-between gap-1 w-full md:w-max">
              Explore Market Trends <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="w-full h-3 rounded-full bg-gray-100 relative overflow-hidden">
            <motion.div
              className="h-full bg-primary-600 absolute left-0 top-0 rounded-l-full"
              style={{ width: "80%" }}
            />
            <motion.div
              className="h-full bg-yellow-400 absolute left-[80%] top-0 rounded-r-full opacity-30"
              style={{ width: "20%" }}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between text-sm text-gray-700 font-medium">
            <div className="text-start md:text-center">
              <p className="text-lg font-bold text-black">Over 32</p>
              <p>Residency Regions Covered</p>
            </div>
            <div className="text-start md:text-center">
              <p className="text-lg font-bold text-black">Over 25</p>
              <p>Citizenship Regiones Covered</p>
            </div>
            <div className="text-start md:text-center">
              <p className="text-lg font-bold text-black">Reduced</p>
              <p>Risk Mitigation Value</p>
            </div>
          </div>
        </div>

        {/* Platform Summary */}
        <div className="bg-primary-100 rounded-xl p-4 min-h-[210px]">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
            <div className="flex flex-col justify-between ">
              <h4 className="text-gray-900 text-base font-semibold mb-2">
                With GCM Partners, streamlined application processes.
              </h4>

              <p className="text-xs text-gray-600">
                Automated Processing System
              </p>
            </div>
            <div className="flex flex-col justify-between order-3 xl:order-2">
              <p className="text-sm text-gray-700 mb-4">
                Our platform enables a seamless Citizenship & Residency journey
                with efficiency.
              </p>
              <div className="text-start">
                <p className="text-3xl font-bold text-gray-900">Significant</p>
                <p className="text-xs text-gray-600">
                  Application Time Reduction
                </p>
              </div>
            </div>
            <div className="w-full h-[178px] order-2 xl:order-3">
              <img
                src="https://img.freepik.com/premium-photo/business-colleagues-look-graph-table-from_709984-17830.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&w=740"
                alt="Platform"
                className="rounded-xl w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Analytics */}
        <div className="bg-gray-100 rounded-xl p-4 grid md:grid-cols-2 gap-6 min-h-[210px]">
          <div className="flex flex-col justify-between" >
            <div>
              <h4 className="flex items-center gap-2 text-gray-900 text-base font-semibold mb-1">
                <BarChart2 className="w-4 h-4 text-primary-600" /> Migration
                Analytics
              </h4>
              <p className="text-sm text-gray-700">
                Save time and resources by leveraging GCM Partners insights to scale your application today.
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-600">GCM Program Coverage</p>
              <h4 className="text-lg font-bold text-gray-900">Cost Friendly</h4>
              <p className="text-xs text-gray-600">
                Let Us be your Guide
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <ResponsiveContainer width="100%" height={128}>
              <BarChart data={lastYearsChartData}>
                <XAxis dataKey="quarter" hide />
                <YAxis hide />
                <Bar dataKey="value" fill="#a8844d" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <p className="text-xs rounded-lg border-primary-800 border-l p-2 px-3 text-gray-700">
                Collective Data Shows clear reduction in general Application Processing Time even post tarrif/Immigration News & Laws
              </p>
          </div>
        </div>
      </div>
    </section>
  );
}

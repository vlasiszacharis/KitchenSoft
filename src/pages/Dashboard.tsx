import React from "react";
import { MdMapsHomeWork } from "react-icons/md";
import { TbCoins } from "react-icons/tb";
import { FaBook } from "react-icons/fa";

function Dashboard() {
  return (
    <>
      <div className="flex flex-col h-screen bg-slate-100">
        <div className="flex flex-row justify-between items-center p-6 pr-16 font-manrope font-bold text-xl">
          <h2 className="text-3xl font-bold">Botrini's</h2>
          <button className="p-2 rounded-full bg-gray-200">Avatar</button>{" "}
        </div>

        <div className="grid p-2 gap-8 mr-6 ml-6 grid-cols-3 items-start justify-center flex-grow">
          <div className="col-span-2 flex flex-col justify-start items-center gap-8">
            <div className="w-full p-8 py-12 bg-white rounded-2xl shadow-md flex flex-col items-center justify-center text-lg font-semibold">
              <div className="flex flex-col gap-2 p-2">
                <h3>Fast Actions</h3>
                <div className="flex flex-row gap-4">
                  <button>PDF</button>
                  <button>scan</button>
                  <button>PAY</button>
                  <button>order</button>
                  <button>Low stock</button>
                </div>
              </div>
            </div>
            <div className="flex flex-row w-full justify-around gap-8 items-center">
              <div className="w-1/2 p-14 py-16 bg-white rounded-2xl shadow-md flex flex-row gap-2 items-center justify-start">
                <div className="flex flex-col gap-2 ">
                  <div className="flex flex-row items-center justify-center gap-2">
                    {" "}
                    <div className="w-4 h-4 bg-custom-navy rounded"></div>
                    <div className="text-xl font-semibold">
                      Total Stock Value
                    </div>
                  </div>
                  <div className="font-bold text-2xl">1254 $</div>
                </div>
              </div>
              <div className="w-1/2 p-14 py-16 bg-white rounded-2xl shadow-md flex flex-row gap-2 items-center justify-start">
                <div className="flex flex-col gap-2 ">
                  <div className="flex flex-row items-center justify-center gap-2">
                    {" "}
                    <div className="w-4 h-4 bg-custom-navy rounded"></div>
                    <div className="text-xl font-semibold">
                      Total Stock Value
                    </div>
                  </div>
                  <div className="font-bold text-2xl">1254 $</div>
                </div>
              </div>
            </div>
            <div className="w-full p-12 py-18 bg-white rounded-3xl shadow-md flex flex-col items-center justify-center text-lg font-semibold">
              Value Per Supplier
            </div>
          </div>
          <div className="flex flex-col pt-8 gap-6 rounded-3xl">
            <div className="flex-grow p-6 py-10  bg-white rounded-xl shadow-md">
              <div className="flex flex-col gap-4">
                <h4 className="font-semibold text-xl">Total Stock Value</h4>
                <div className="flex flex-row items-center gap-3">
                  <div className="bg-blue-100 w-10 h-10 rounded flex justify-center items-center">
                    <MdMapsHomeWork className="text-custom-navy flex justify-center item-center w-5 h-5" />{" "}
                  </div>
                  <div className="font-semibold text-2xl">14.518 $</div>
                </div>
              </div>
            </div>
            <div className="flex-grow p-6 py-10  bg-white rounded-xl shadow-md">
              <div className="flex flex-col gap-4">
                <h4 className="font-semibold text-xl">Total Revenue</h4>
                <div className="flex flex-row items-center gap-3">
                  <div className=" w-10 bg-yellow-100 h-10 rounded flex justify-center items-center">
                    <TbCoins className="text-yellow-600 flex justify-center item-center w-5 h-5" />{" "}
                  </div>
                  <div className="font-semibold text-2xl">67.254 $</div>
                </div>
              </div>
            </div>

            <div className="flex-grow p-6 py-10  bg-white rounded-xl shadow-md">
              <div className="flex flex-col gap-4">
                <h4 className="font-semibold text-xl">Active Recipes</h4>
                <div className="flex flex-row items-center gap-4">
                  <div className="bg-green-100 w-10 h-10 rounded flex justify-center items-center">
                    <FaBook className="text-green-600 flex justify-center item-center w-5 h-5" />{" "}
                  </div>
                  <div className="font-semibold text-2xl">26</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;

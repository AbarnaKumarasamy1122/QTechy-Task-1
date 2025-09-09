import React from "react";
import { ArrowRight } from "lucide-react";

const Card = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-indigo-100 blur-3xl opacity-60" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-violet-100 blur-3xl opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 md:pt-10 md:pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Elevating Card Programs with
            <br />
            Cutting-Edge Technology
          </h2>
          <p className="mt-5 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-5">
            consecteur adipiscing elit. Sed euismod, nunc ut
            <br className="hidden sm:block" />
            aliquam tincidunt, nunc nisl aliqua.
          </p>

          <p className="text-m text-fuchsia-900 font-semibold mb-3 flex items-center justify-center gap-3">
            Compare all Pro features
            <ArrowRight className="h-5 w-5" />
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-[27.59px]">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow flex justify-center items-center relative w-[592px] h-[490px]">
            <img
              className="w-[418px] h-[490px] rounded-xl shadow-lg"
              src="/assets/phone.png"
              alt="Mobile mockup"
            />

            <img
              className="absolute top-[150px] left-[200px] w-[40px] h-[17px] rounded-lg"
              src="assets/small rectangle.png"
              alt="Small card"
            />
            <img
              src="assets/rectangle.png"
              alt="Rectangle decoration"
              className="absolute top-[150px] left-[200px] w-[40px] h-[162px] rounded-lg"
            />

            <img
              src="assets/star.png"
              alt="Star decoration"
              className="absolute -top-4 -left-4 w-14 h-14"
            />
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow hover:shadow-lg w-[408px] h-[271px] flex flex-col justify-between mx-auto">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2">
                <div className="relative w-6 h-6">
                  <img
                    src="assets/star.png"
                    alt="Star decoration"
                    className="absolute -top-4 -left-4 w-14 h-14"
                  />
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-neutral-900">
                    Spending
                  </h2>
                  <p className="text-xs text-gray-500 font-medium flex items-center gap-1">
                    <span>
                      <img src="assets/frame.png" alt="Frame" />
                    </span>{" "}
                    9349 visa card
                  </p>
                </div>
              </div>

              <img src="assets/narrow.png" className="w-4 h-4" alt="Expand" />
            </div>

            <div className="mt-6 flex flex-col gap-2.5">
              <div className="flex items-center gap-2">
                <p className="text-3xl font-medium text-neutral-900">127.14</p>
                <span className="text-xs font-medium text-neutral-900">
                  USD
                </span>
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>vs last week</span>
                <span>Last Purchased ( Feb 24 19:59 UTC-5 )</span>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-1.5">
              <div className="flex justify-between text-xs text-gray-500">
                <span>400 USD</span>
                <span>1000 USD</span>
                <span>5000 USD</span>
              </div>

              <div className="flex gap-[3.25px] mt-1">
                <div className="w-[102.25px] h-[12.17px] bg-fuchsia-900 rounded-tl-xl rounded-bl-xl"></div>

                <div className="w-[77.09px] h-[12.17px] relative">
                  <div className="absolute left-0 top-0 w-[64.11px] h-[12.17px] bg-fuchsia-900"></div>

                  <div
                    className="absolute top-0 h-[12.17px] bg-pink-100"
                    style={{ left: "64.11px", width: "12.98px" }}
                  ></div>
                </div>

                <div className="w-[102.25px] h-[12.17px] bg-pink-100 rounded-tr-xl rounded-br-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;

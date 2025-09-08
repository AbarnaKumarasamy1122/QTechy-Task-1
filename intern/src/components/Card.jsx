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

          <p className="text-m text-purple-900 font-semibold mb-3 flex items-center justify-center gap-3">
            Compare all Pro features
            <ArrowRight className="h-5 w-5" />
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center">
            <img src="/assets/card.png" width={592} height={490} className="mt-5" />
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center">
            <img src="/assets/card1.png" width={592} height={490} className="mt-5" />
        </div>
      </div>
      </div>
    </section>
  );
};

export default Card;

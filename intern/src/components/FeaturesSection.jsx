import React from "react";
import { ArrowRight, Globe, Key, Lock } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-indigo-100 blur-3xl opacity-60" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-violet-100 blur-3xl opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 md:pt-10 md:pb-20">
        <div className="mx-auto max-w-7xl text-center">
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center">
            <h1 className="text-lg font-semibold mb-2 text-purple-600 dark:text-white text-center">
              2 Million
            </h1>
            <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white text-center">
              Customers
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center">
            <h1 className="text-lg font-semibold mb-2 text-purple-600 dark:text-white text-center">
              1K
            </h1>
            <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white text-center">
              Downloads
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center">
            <h1 className="text-lg font-semibold mb-2 text-purple-600 dark:text-white text-center">
              $73 Million
            </h1>
            <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white text-center">
              Transaction
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center">
            <h1 className="text-lg font-semibold mb-2 text-purple-600 dark:text-white text-center">
              2.0
            </h1>
            <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white text-center">
              Latest Version
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
          </div>

      </div>
      </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

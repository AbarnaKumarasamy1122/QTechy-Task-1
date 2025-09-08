import React from "react";
import { ArrowRight, Globe, Key, Lock } from "lucide-react";

const Feature = () => {
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

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center">
            <div className="p-4 bg-gray-200 rounded-full inline-flex items-center justify-center mx-auto mb-4">
              <Globe className="h-6 w-6 text-slate-700 font-bold" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white text-center">
              Globally Accepted
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consectetur eius recusandae.
            </p>
          </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center">
            <div className="p-4 bg-gray-200 rounded-full inline-flex items-center justify-center mx-auto mb-4">
              <Key className="h-6 w-6 text-slate-700 font-bold" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white text-center">
              Biometric Integrated
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
              doloremque!
            </p>
          </div>
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center">
            <div className="p-4 bg-gray-200 rounded-full inline-flex items-center justify-center mx-auto mb-4">
              <Lock className="h-6 w-6 text-slate-700 font-bold" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white text-center">
              Fully Secured
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, iure! Minus, magni.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;

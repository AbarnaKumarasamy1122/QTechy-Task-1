import React from "react";
import { CreditCard, Headphones } from "lucide-react";

const NewCard = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-indigo-100 blur-3xl opacity-60" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-violet-100 blur-3xl opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 md:pt-10 md:pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Unlock Limitless Possibilities with
            <br />
            Our New Card Solutions
          </h2>

          <div className="mt-10 flex flex-col sm:flex-row sm:justify-center gap-4">
            <a
              href="#unlock"
              className="btn btn-lg bg-fuchsia-900 text-white shadow text-lg flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              Unlock your Card
              <CreditCard className="h-5 w-5" />
            </a>

            <a
              href="#support"
              className="btn btn-lg bg-customGray shadow text-lg flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              Customer Support
              <Headphones className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewCard;

import React from "react";
import { Star } from "lucide-react";

const Testimonial = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-indigo-100 blur-3xl opacity-60" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-violet-100 blur-3xl opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 md:pt-10 md:pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <img
            src="/assets/company logo.png"
            width={98}
            height={24}
            className="mx-auto mb-4"
          />
          <p className="mt-5 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-5">
            I had the pleasure of experiencing the next generation
            <br className="hidden sm:block" />
            of card solutions with this incredible product. It's
            <br className="hidden sm:block" />
            refreshing to see such innovation in the financial
            <br className="hidden sm:block" />
            industry.
          </p>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center">
            <img
              src="/assets/person.png"
              width={64}
              height={64}
              className="mt-5 mx-auto"
            />
            <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white text-center mt-4">
              Nick Babich
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-2">
              Lead Designer
            </p>
            <div className="flex justify-center gap-1">
              {[...Array(4)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-yellow-500 text-yellow-500"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

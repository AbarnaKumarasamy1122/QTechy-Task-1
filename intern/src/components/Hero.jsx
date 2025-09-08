import React from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-indigo-100 blur-3xl opacity-60" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-violet-100 blur-3xl opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10 md:pt-20 md:pb-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-m text-purple-900 font-semibold mb-3">
            Seamless experience
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold animate-fadeInDown leading-snug sm:leading-normal text-center">
            Unleashing the Next
            <br className="sm:block hidden" />
            Generation of Card
            <br className="sm:block hidden" />
            Solutions
          </h1>

          <p className="mt-5 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            consecteur adipiscing elit. Sed euismod, nunc ut
            <br className="hidden sm:block" />
            aliquam tincidunt, nunc nisl aliquam
            <br className="hidden sm:block" />
            nunc, eget aliquam nisl nunc vel nisl.
          </p>

          <div className="mt-7 flex items-center justify-center gap-3">
            <a
              href="#cta"
              className="btn btn-lg bg-purple-900 text-white hover:bg-indigo-500 shadow"
            >
              Unlock your Card
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          <p className="mt-5 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            *No credit card required
          </p>

          <img
            src="/assets/container.png"
            alt="Container"
            className="mx-auto mt-10 w-[600px] rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

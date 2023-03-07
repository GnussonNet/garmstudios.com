import React from "react";

const ProcessView = () => {
  return (
    <section className="mx-auto mt-28 max-w-screen-xl px-4 sm:px-6 md:mt-48 lg:px-8">
      <div>
        <h1 className="text-center text-3xl font-bold md:text-5xl">
          From <span className="text-garm-blue-100">Idea</span>, to finished{" "}
          <span className="text-garm-blue-100">product</span>
        </h1>
        <p className="mt-1 text-center text-lg text-garm-blue-100 md:mt-4">
          To better explain how we work, from idea to finished product
          <span className="block">we have created a short video!</span>
        </p>
      </div>
      <div className="mt-16 flex aspect-video w-full items-center justify-center rounded-xl bg-gray-900">
        <div className="bg-garm-blue-600"></div>
      </div>
    </section>
  );
};

export default ProcessView;

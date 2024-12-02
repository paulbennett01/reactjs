import React from 'react';

const LayoutOne = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <div className="lg:flex lg:items-center">
          {/* Left Content */}
          <div className="w-full space-y-12 lg:w-1/2">
            <div>
              <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
                Explore our <br /> awesome Components
              </h1>
              <div className="mt-2">
                <span className="inline-block w-40 h-1 rounded-full bg-blue-500"></span>
                <span className="inline-block w-3 h-1 ml-1 rounded-full bg-blue-500"></span>
                <span className="inline-block w-1 h-1 ml-1 rounded-full bg-blue-500"></span>
              </div>
            </div>

            {/* Feature List */}
            {[
              {
                title: 'Copy & paste components',
                description:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet',
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                ),
              },
              {
                title: 'Zero Configurations',
                description:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet',
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                ),
              },
              {
                title: 'Elegant Dark Mode',
                description:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet',
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                    />
                  </svg>
                ),
              },
            ].map((feature, index) => (
              <div key={index} className="md:flex md:items-start md:-mx-4">
                <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                  {feature.icon}
                </span>
                <div className="mt-4 md:mx-4 md:mt-0">
                  <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                    {feature.title}
                  </h1>
                  <p className="mt-3 text-gray-500 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
            <img
              className="w-[28rem] h-[28rem] object-cover xl:w-[34rem] xl:h-[34rem] rounded-full"
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=755&q=80"
              alt=""
            />
          </div>
        </div>

        <hr className="border-gray-200 my-12 dark:border-gray-700" />

        {/* Footer Icons */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1"
            >
              <svg
                className="h-12 text-gray-500 fill-current dark:text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 266 100"
              >
                <path fill="none" d="M0 0h266v100H0z"></path>
                <path d="M140.021..."></path>
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LayoutOne;
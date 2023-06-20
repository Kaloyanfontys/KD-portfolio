import React from 'react';

const LatestWork = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-12 mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">Projects</h1>

        <div className="mt-8 xl:mt-16 lg:flex lg:-mx-12">

          <div className="flex-1 mt-8 lg:mx-12 lg:mt-0">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 ">
              {/* Repeat this div for each project */}
              <div>
                <img className="object-cover w-full rounded-lg h-96 "
                     src="/duck_render.png"
                     alt=""/>
                <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">3D Blender Duck</h2>
                <p className="mt-2 text-lg tracking-wider text-black-500  dark:text-blue-400 ">In this captivating Blender 3D project, we embarked on a journey to bring a classic childhood toy to life through modeling and rendering. Our objective was to create a realistic 3D model of a charming rubber duck that would evoke nostalgia and capture the imagination of viewers.</p>
              </div>
              <div>
                <img className="object-cover w-full rounded-lg h-96 "
                     src="https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80"
                     alt=""/>
                <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">Project 2</h2>
                <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Preview</p>
              </div>
              <div>
                <img className="object-cover w-full rounded-lg h-96 "
                     src="https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80"
                     alt=""/>
                <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">Project 3</h2>
                <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Preview</p>
              </div>
              <div>
                <img className="object-cover w-full rounded-lg h-96 "
                     src="https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80"
                     alt=""/>
                <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">3D Blender Duck</h2>
                <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Preview</p>
              </div>
              <div>
                <img className="object-cover w-full rounded-lg h-96 "
                     src="https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80"
                     alt=""/>
                <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">3D Blender Duck</h2>
                <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Preview</p>
              </div>
              <div>
                <img className="object-cover w-full rounded-lg h-96 "
                     src="https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80"
                     alt=""/>
                <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">3D Blender Duck</h2>
                <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Preview</p>
              </div>
              {/* End of repeating div */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LatestWork;

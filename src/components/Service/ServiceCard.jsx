import React from 'react';

const ServiceCard = ({single}) => {
    return (
 <div class="max-w-sm sm:max-w-md md:max-w-lg w-full mx-auto bg-gradient-to-br from-white to-blue-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl shadow-lg overflow-hidden flex flex-col justify-between transform hover:scale-[1.01] transition-transform duration-300">

  
  <div class="relative">
    <img
      src={single.image}
      alt="Heated Pet Bed Rental"
      class="w-full h-60 object-cover block"
      loading="lazy"
    />

    <div class="absolute top-4 left-4 bg-white/90 dark:bg-slate-800/80 px-3 py-1 rounded-full backdrop-blur-md shadow-md text-sm font-semibold">
      <span class="text-gray-800 dark:text-gray-100">{single.providerName}</span>
    </div>

    <div class="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-amber-400 text-white px-3 py-1 rounded-full font-bold text-sm shadow-xl">
      {single.price}
    </div>
  </div>

 
  <div class="flex flex-col justify-between flex-grow p-5 md:p-6">
    <div>
      <h3 class="text-lg sm:text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white leading-tight">
        {single.serviceName}
      </h3>

      <dl class="mt-4 grid grid-cols-2 gap-2 text-sm sm:text-sm">
        <div>
          <dt class="text-xs text-slate-500 dark:text-slate-400">Provider</dt>
          <dd class="font-medium text-slate-800 dark:text-slate-100">
            {single.providerName}
          </dd>
        </div>
        <div>
          <dt class="text-xs text-slate-500 dark:text-slate-400">Contact</dt>
          <dd class="font-medium text-sky-700 dark:text-sky-300">
            <a href={`mailto:${single.providerEmail}`}>{single.providerEmail}</a>
          </dd>
        </div>
      </dl>
    </div>

    
    <div class="mt-5 flex items-center gap-3">
      <button
        class="flex-1 inline-flex justify-center items-center gap-2 px-4 py-2 rounded-lg font-semibold shadow-md hover:shadow-xl transition-shadow duration-200 bg-gradient-to-r from-sky-600 to-indigo-600 text-white focus:outline-none focus:ring-4 focus:ring-sky-300 dark:focus:ring-sky-700"
      >
        Book now
      </button>

      <button
        aria-label="Add to wishlist"
        class="inline-flex items-center justify-center p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm hover:scale-105 transition-transform duration-150"
        title="Save"
      >
        ♥
      </button>
    </div>
  </div>
</div>

    );
};

export default ServiceCard;
import React from "react";

const FeedCard = ({ feed }) => {
  return (
    <div class="flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg my-6 w-96">
      <div class="m-2.5 overflow-hidden rounded-md h-40 flex justify-center items-center">
        <img
          class="w-full h-full object-cover"
          src="https://docs.material-tailwind.com/img/team-3.jpg"
          alt="profile-picture"
        />
      </div>
      <div class="p-6 text-center">
        <h4 class="mb-1 text-xl font-semibold text-slate-800">
          {feed.firstName}
          {` `}
          {feed.lastName}
        </h4>
        <p class="text-sm font-semibold text-slate-500 uppercase">{feed.age}</p>
        <p class="text-base text-slate-600 mt-4 font-light ">{feed.about}</p>
      </div>
      <div class="flex justify-around p-6 pt-2 gap-7">
        <button
          class="min-w-32  rounded-md bg-green-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Interested
        </button>
        <button
          class="min-w-32  rounded-md bg-red-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Ignored
        </button>
      </div>
    </div>
  );
};

export default FeedCard;

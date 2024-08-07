/** @format */

import React from "react";

function Calendar() {
  return (
    <div className="p-3">
      <div className="flex items-center justify-center gap-2 pb-8 pt-12">
        <button
          type="submit"
          class="p-2 ml-2 text-sm  text-white bg-[#24A3B6] rounded-sm border hover:bg-opacity-100 w-48"
        >
          <p>All</p>
        </button>
        <button
          type="submit"
          class="p-2 ml-2 text-sm text-white bg-[#24A3B6] rounded-sm border  focus:ring-4 focus:outline-none w-48"
        >
          <p>Done</p>
        </button>
        <button
          type="submit"
          class="p-2 ml-2 text-sm  text-white bg-[#24A3B6] rounded-sm border  focus:ring-4 focus:outline-none w-48"
        >
          <p>Todo</p>
        </button>
      </div>
    </div>
  );
}

export default Calendar;

import React, {useState} from "react";


function SearchTodo() {
  const [search, setSearch] = useState("");
  return (
    <div className="pt-8 p-5 pb-5 ">
      <form class="flex items-center">
        <div class="relative w-full">
          <div class="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none w-9 rounded-sm ">
            <ion-icon name="search-outline"></ion-icon>
          </div>
          <input
            type="text"
            class="bg-[#F8F8F8]  text-gray-900 text-sm rounded-md block sm:w-72 w-full h-8 lg:w-[92vw] md:w-[88vw] pl-10  "

            placeholder="Search Todo"
            value={search}
            onChange={(e) => setSearch(e.target.value)}

          /> 
        </div>
      </form>
    </div>
  );
}

export default SearchTodo;

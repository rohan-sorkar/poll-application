import React from "react";

const SearchPanel = ({searchTerm, handleSearchTerm, handleOpenModal}) => {
  return (
    <div className="flex justify-center mb-16  p-5">
      <input className="w-full" type="search" placeholder="Search..." value={searchTerm} onChange={handleSearchTerm} />
      <button onClick={handleOpenModal} className="py-2 px-8 ml-4 bg-slate-200 rounded-xl font-medium font-fira">
        New
      </button>
    </div>
  );
};

export default SearchPanel;

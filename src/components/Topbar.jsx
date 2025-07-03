import { VscLayoutSidebarRight } from "react-icons/vsc";
import { FiSearch } from "react-icons/fi";
import { GoBell } from "react-icons/go";
import { VscAccount } from "react-icons/vsc";

const Topbar = () => {
  return (
    <div className="flex justify-between items-center px-6 py-1 border-b border-b-gray-200 bg-white shadow-sm">
        
      
      <div className="flex items-center gap-4 text-sm text-gray-700">
        <VscLayoutSidebarRight className="text-green-700 text-xl"/>
        <span className="text-gray-500 text-base">Workspace</span>
        <span>/</span>
        <span className="text-gray-500 text-base">Folder 2</span>
        <span>/</span>
        <span className="font-semibold text-[#2E2E2E] text-base">Spreadsheet 3</span>
      </div>

      
      <div className="flex items-center gap-2">

       <span className="flex items-center  border-none rounded-md  px-2 py-3 w-[200px] max-w-md bg-[#F6F6F6]">
      <FiSearch className="text-gray-500 mr-2 text-lg" />
      <input
        type="text"
        placeholder="Search within sheet"
        className="w-full outline-none text-sm text-gray-700 placeholder-gray-400"
      />
    </span>

    <div className="relative w-12 h-12 flex items-center justify-center">
    <GoBell className="text-[#2E2E2E] text-2xl" />

     <div className="absolute top-1 right-1 w-5 h-5 bg-[#4B6A4F] rounded-full text-white text-[10px] flex items-center justify-center border border-white">2</div>
    </div>

    <div className=" w-30 h-13 flex items-center justify-center">
    <VscAccount className="text-[#2E2E2E] text-2xl "  />
    <h1 className="px-2 text-[15px]">Jhon Doe</h1>
    </div>



      </div>
    </div>
  );
};

export default Topbar;

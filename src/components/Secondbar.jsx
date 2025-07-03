import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { BiHide } from "react-icons/bi";
import { BiSortAlt2 } from "react-icons/bi";
import { IoFilterOutline } from "react-icons/io5";
import { RiSplitCellsVertical } from "react-icons/ri";
import { TfiImport } from "react-icons/tfi";
import { TfiExport } from "react-icons/tfi";
import { RiShareBoxLine } from "react-icons/ri";
import { PiArrowsSplitBold } from "react-icons/pi";

const Secondbar = () => {
    return(
        <div className="flex justify-between items-center px-4 py-2 border-b border-b-gray-200 bg-white">
            <div className="flex items-center gap-3 text-sm text-gray-700">
            <button className=" h-10 hover:bg-gray-200 px-3 rounded-md bg-white text-[#2E2E2E] text-base flex items-center justify-center gap-1">Tool Bar  <MdKeyboardDoubleArrowRight className="text-lg" /></button>

            <button className=" h-10 hover:bg-gray-200 px-3 rounded-md bg-white text-[#2E2E2E] text-base flex items-center justify-center gap-1"> <BiHide className="text-lg" /> Hide Fields  </button>

            <button className=" h-10 hover:bg-gray-200 px-3 rounded-md bg-white text-[#2E2E2E] text-base flex items-center justify-center gap-1"><BiSortAlt2 className="text-lg" /> Sort  </button>

            <button className=" h-10 hover:bg-gray-200 px-3 rounded-md bg-white text-[#2E2E2E] text-base flex items-center justify-center gap-1">  <IoFilterOutline className="text-lg" /> Filter</button>

            <button className=" h-10 hover:bg-gray-200 px-3 rounded-md bg-white text-[#2E2E2E] text-base flex items-center justify-center gap-1"> <RiSplitCellsVertical className="text-lg" /> Cell View</button>
            </div>


            <div className="flex items-center gap-3 text-sm text-gray-700 ">
                <button className=" h-10 hover:bg-gray-200 px-3 rounded-md border border-gray-300 bg-white text-[#2E2E2E] text-base flex items-center justify-center gap-2">  < TfiImport className="text-xl" />Import</button>

                <button className=" h-10 hover:bg-gray-200 px-3 rounded-md border border-gray-300 bg-white text-[#2E2E2E] text-base flex items-center justify-center gap-2">  < TfiExport className="text-xl" />Export</button>

                <button className=" h-10 hover:bg-gray-200 px-3 rounded-md border border-gray-300 bg-white text-[#2E2E2E] text-base flex items-center justify-center gap-2">  < RiShareBoxLine className="text-lg" />Share</button>

                <button className=" h-10 hover:bg-[#58715B] px-5 bg-[#4B6A4F] rounded-md text-white text-base flex items-center justify-center gap-2"><PiArrowsSplitBold className="text-lg"/>New Action</button>

            </div>
            
        </div>
    );
};
export default Secondbar;
import { IoLinkOutline } from "react-icons/io5";
import { TfiReload } from "react-icons/tfi";
import { PiArrowsSplitBold } from "react-icons/pi";
import { IoBagRemove } from "react-icons/io5";
import { FaCalendarDays } from "react-icons/fa6";
import { MdArrowDropDownCircle } from "react-icons/md";
import { RiAccountCircleFill } from "react-icons/ri";
import { FaGlobe } from "react-icons/fa";
import { FaSmile } from "react-icons/fa";


const Thirdbar = () =>{
    return(
        <>
    <div className="grid grid-cols-[40px_1.5fr_repeat(5,1fr)_2fr_repeat(2,1fr)] ">
  <div className="flex items-center  justify-center px-2 py-1"></div>
  <div className="flex items-center  bg-[#E2E2E2] gap-1 px-3 py-1">
    <div className="bg-[#EEEEEE] flex py-1 px-1 rounded-md">
        <IoLinkOutline className="text-lg text-[#1A8CFF]"/>
        <span className="text-gray-500 text-sm font-[500] px-2">Q3 Financial Overview</span>
    </div>
    <span className="px-2">
    <TfiReload className="text-[#FA6736]"/>
    </span>
  </div>
   <div className="flex items-center bg-[#E2E2E2] gap-1 px-2 py-2"></div>
  <div className="flex items-center bg-[#E2E2E2] gap-1 px-2 py-2"></div>
  <div className="flex items-center bg-[#E2E2E2] gap-1 px-2 py-2"></div>
  <div className="flex items-center bg-white gap-1 px-2 py-2"></div>
  <div className="flex items-center justify-center border-l border-white gap-1 px-2 bg-[#D2E0D4]">
    <PiArrowsSplitBold className="text-lg text-[#A3ACA3]"/>
    <h1 className="text-[16px] text-[#505450]  px-1 font-[500]">ABC</h1>
    <h2 className="text-lg text-[#A3ACA3]">⋯</h2>
  </div>
  <div className="flex items-center justify-center border-l border-white gap-1 px-2 bg-[#DCCFFC]">
    <PiArrowsSplitBold className="text-lg text-white"/>
    <h1 className="text-[16px] text-[#463E59] px-1 font-[500]">Answer a question</h1>
    <h2 className="text-lg text-[#463E59]">⋯</h2>
  </div>
  <div className="flex items-center justify-center border-l border-white gap-1 px-2 bg-[#FAC2AF]">
    <PiArrowsSplitBold className="text-lg text-white"/>
    <h1 className="text-[16px] text-[#695149] px-1 font-[500]">Extract</h1>
    <h2 className="text-lg text-[#695149]">⋯</h2>
    </div> 
  <div className="flex items-center justify-center border border-white gap-1 px-2 bg-[#EEEEEE] text-3xl font-[400]">+</div>
</div>


<div className="grid grid-cols-[40px_1.5fr_repeat(9,1fr)] ">
    <div className="flex items-center justify-center gap-1 px-2 bg-[#EEEEEE] border  border-white text-lg font-[500] text-[#757575]">#</div>
    <div className="flex items-center  gap-2 px-3 bg-[#EEEEEE] border border-white py-2 text-sm font-[500] text-[#757575]"><IoBagRemove className="text-lg text-[#AFAFAF]"/>Job Request</div>
    <div className="flex items-center gap-2 px-3  border border-white bg-[#EEEEEE]  text-sm font-[500] text-[#757575]"><FaCalendarDays className="text-sm text-[#AFAFAF]"/>Submitted</div>
    <div className="flex items-center gap-2 px-3  border border-white bg-[#EEEEEE]  text-sm font-[500] text-[#757575]"><MdArrowDropDownCircle className="text-lg text-[#AFAFAF]"/>Status</div>
    <div className="flex items-center gap-2 px-3  border border-white bg-[#EEEEEE]  text-sm font-[500] text-[#757575]"><RiAccountCircleFill className="text-lg text-[#AFAFAF]"/>Submitter</div>
    <div className="flex items-center gap-2 px-3  border border-white bg-[#EEEEEE]  text-sm font-[500] text-[#757575]"><FaGlobe className="text-lg text-[#AFAFAF]"/>URL</div>

    <div className="flex items-center gap-2 px-3  border border-white bg-[#E8F0E9]  text-sm font-[500] text-[#666C66]"><FaSmile className="text-lg text-[#AFAFAF]"/>Assigned</div>
    <div className="flex items-center gap-2 px-3  border border-white bg-[#EAE3FC]  text-sm font-[500] text-[#655C80]">Priority</div>
    <div className="flex items-center gap-2 px-3  border border-white bg-[#EAE3FC]  text-sm font-[500] text-[#655C80]">Due Date</div>
    <div className="flex items-center gap-2 px-3  border border-white bg-[#FFE9E0]  text-sm font-[500] text-[#8C6C62]">Est. Value</div>
    <div className="flex items-center gap-2 px-3  border border-white bg-white"></div>

</div>
</>

    );
};
export default Thirdbar;
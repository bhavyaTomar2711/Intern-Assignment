const Footer=()=>{
    return(
    <div className="flex fixed bottom-0 px-10 border-t border-gray-100 py-1">
        <div className=" items-center justify-center  px-5 py-1 text-[#3E5741] border-t-2 border-[#3E5741] bg-[#E8F0E9] text-[19px] font-[500]">All Order</div>
        <div className=" items-center justify-center  px-5 py-1 text-[#757575] text-[19px] font-[400]">Pending</div>
        <div className=" items-center justify-center  px-5 py-1 text-[#757575] text-[19px] font-[400]">Reviewed</div>
        <div className=" items-center justify-center  px-5 py-1 text-[#757575] text-[19px] font-[400]">Arrived</div>
        <div className=" items-center justify-center  px-5 py-1 text-[#757575] text-[22px] font-[400]">+</div>
    
    </div>
    )
};
export default Footer;
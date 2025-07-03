const Data = () =>{
    
        const rows = [
  {
    job: "Launch social media campaign for pro...",
    submitted: "15-11-2024",
    status: "In-process",
    submitter: "Aisha Patel",
    url: "www.aishapatel...",
    assigned: "Sophie Choudhury",
    priority: "Medium",
    due: "20-11-2024",
    value: "6,200,000 ₹",
  },
  {
    job: "Update press kit for company redesign",
    submitted: "28-10-2024",
    status: "Need to start",
    submitter: "Irfan Khan",
    url: "www.irfankhanp...",
    assigned: "Tejas Pandey",
    priority: "High",
    due: "30-10-2024",
    value: "3,500,000 ₹",
  },
  {
    job: "Finalize user testing feedback for app...",
    submitted: "05-12-2024",
    status: "In-process",
    submitter: "Mark Johnson",
    url: "www.markjohns...",
    assigned: "Rachel Lee",
    priority: "Medium",
    due: "10-12-2024",
    value: "4,750,000 ₹",
  },
  {
    job: "Design new features for the website",
    submitted: "10-01-2025",
    status: "Complete",
    submitter: "Emily Green",
    url: "www.emilygreen...",
    assigned: "Tom Wright",
    priority: "Low",
    due: "15-01-2025",
    value: "5,900,000 ₹",
  },
  {
    job: "Prepare financial report for Q4",
    submitted: "25-01-2025",
    status: "Blocked",
    submitter: "Jessica Brown",
    url: "www.jessicabro...",
    assigned: "Kevin Smith",
    priority: "Low",
    due: "30-01-2025",
    value: "2,800,000 ₹",
  },
];


return (
  <>
    {rows.map((row, i) => (
      <div key={i} className="grid grid-cols-[40px_1.5fr_repeat(9,1fr)] text-sm border-b border-gray-100">
        
        <div className="text-center py-2 border-r border-gray-100 text-[#757575]">{i + 1}</div>

        
        <div className="py-2 px-2 border-r border-gray-100 text-[#121212]">{row.job}</div>

        
        <div className="py-2 px-2 border-r text-right border-gray-100  text-[#121212]">{row.submitted}</div>

        
        <div className="py-2 px-2 flex border-r items-center justify-center border-gray-100">
          <span className={`px-2 py-1 rounded-full items-center justify-center text-xs font-medium ${
            row.status === "In-process"
              ? "bg-yellow-100 text-yellow-800"
              : row.status === "Need to start"
              ? "bg-gray-200 text-gray-700"
              : row.status === "Complete"
              ? "bg-green-100 text-green-700"
              : row.status === "Blocked"
              ? "bg-red-100 text-red-600"
              : ""
          }`}>
            {row.status}
          </span>
        </div>

        
        <div className="py-2 px-2 border-r border-gray-100  text-[#121212]">{row.submitter}</div>

        
        <div className="py-2 px-2 border-r border-gray-100">
          <a
            href={row.url}
            className="text-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {row.url}
          </a>
        </div>

       
        <div className="py-2 px-2 border-r border-gray-200  text-[#121212]">{row.assigned}</div>

        
        <div className={`py-2 px-2 border-r items-center justify-center flex border-gray-100 font-medium ${
          row.priority === "High"
            ? "text-red-600"
            : row.priority === "Medium"
            ? "text-yellow-700"
            : "text-blue-600"
        }`}>
          {row.priority}
        </div>

        
        <div className="py-2 px-2 border-r text-right border-gray-100  text-[#121212]">{row.due}</div>

       
        <div className="py-2 px-2 text-right border-r border-gray-100  text-[#121212]">{row.value}</div>
      </div>
    ))}

   {Array.from({ length: 12 }, (_, i) => (
  <div
    key={i + 6}
    className="grid grid-cols-[40px_1.5fr_repeat(9,1fr)] text-sm border-b border-gray-100"
  >
    <div className="text-center py-2 border-r border-gray-100">{i + 6}</div>
    <div className="py-2 px-2 border-r border-gray-100"></div>
    <div className="py-2 px-2 border-r border-gray-100"></div>
    <div className="py-2 px-2 border-r border-gray-100"></div>
    <div className="py-2 px-2 border-r border-gray-100"></div>
    <div className="py-2 px-2 border-r border-gray-100"></div>
    <div className="py-2 px-2 border-r border-gray-100"></div>
    <div className="py-2 px-2 border-r border-gray-100"></div>
    <div className="py-2 px-2 border-r border-gray-100"></div>
    <div className="py-2 px-2"></div>
  </div>
))}


  </>
);
};

export default Data;

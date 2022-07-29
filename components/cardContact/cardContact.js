export default function CardContact(){
    return(
<div className="w-screen h-screen bg-white flex flex-row flex-wrap p-3">
  <div className="mx-auto w-2/3 mt-8">
    {/* Profile Card */}
    <div className="rounded-lg shadow-lg bg-gray-600 w-full flex flex-row flex-wrap p-3 antialiased">
      <div className="md:w-1/3 w-full">
        <img className="rounded-lg shadow-lg antialiased" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" />  
      </div>
      <div className="md:w-2/3 w-full px-3 flex flex-row flex-wrap">
        <div className="w-full text-left text-gray-700 font-semibold relative pt-3 md:pt-0">
          <div className="text-2xl text-white leading-tight">Admin User</div>
          <div className="text-normal text-gray-300 hover:text-gray-400 cursor-pointer"><span className="border-b border-dashed border-gray-500 pb-1">Administrator</span></div>
          
        </div>
      </div>
    </div>
    
  </div>
</div>

    );
}
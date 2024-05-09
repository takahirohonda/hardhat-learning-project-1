export const TestDivHeight = () => {
  return (
    <div className="h-screen border border-black">
      <div className="h-full bg-red-200 ">
        This is the inner div
      </div>
    </div>
  // Height 100% in parent and child 
  //   <div className="h-full border border-black">
  //    <div className="h-full bg-red-200 ">
  //      This is the inner div
  //    </div>
  //  </div>
  )
}
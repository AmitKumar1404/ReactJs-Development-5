// 1. Import Area

import MyComp2 from "./MyComp2";


// 2. Function/Component definition area
function MyComp1()
{
  return <h1>OKLABS <MyComp2 /> </h1>;
}

// 3. Export Area
// I can export anything. Like :- function, class, variable, array

// 3.1 Default Export
export default MyComp1;
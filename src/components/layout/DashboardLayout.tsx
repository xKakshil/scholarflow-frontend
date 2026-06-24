import Navbar
from "./Navbar";


import Sidebar
from "./Sidebar";






export default function DashboardLayout(
{
children
}:{
children:React.ReactNode
}){



return (


<div
className="
min-h-screen
bg-gray-100
"
>



<Navbar/>





<div
className="
flex
"
>



<Sidebar/>






<main
className="
flex-1
min-h-screen
p-8
overflow-x-hidden
"
>



{children}



</main>





</div>




</div>


);


}
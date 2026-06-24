"use client";


import {
useAuth
} from "@/context/AuthContext";





export default function Navbar(){



const {
user,
logout
} = useAuth();







return (


<header
className="
h-16
border-b
flex
items-center
justify-between
px-8
bg-white
"
>





<div>


<h1
className="
text-xl
font-bold
"
>

ScholarFlow

</h1>


</div>








<div
className="
flex
items-center
gap-5
"
>






<div
className="
text-right
hidden
md:block
"
>



<p
className="
text-sm
font-medium
"
>

{user?.email}

</p>





<p
className="
text-xs
text-gray-500
"
>

{user?.role}

</p>



</div>









<button

onClick={logout}


className="
bg-black
text-white
px-4
py-2
rounded-lg
text-sm
hover:bg-gray-800
transition
"
>

Logout

</button>







</div>



</header>


);


}
"use client";


import {
useEffect,
useState
} from "react";




export default function ServerWakeup(){


const [show,setShow]=useState(false);




useEffect(()=>{


const timer =
setTimeout(()=>{


setShow(true);


},3000);



return ()=>clearTimeout(timer);



},[]);





if(!show){

return null;

}



return (

<div
className="
fixed
bottom-5
right-5
bg-black
text-white
p-4
rounded-xl
shadow-lg
max-w-sm
text-sm
z-50
"
>


<p className="font-bold">

Starting ScholarFlow 🚀

</p>


<p className="mt-1 text-gray-300">

Free cloud servers may take a few seconds to wake up on first request.

</p>



</div>


);



}
"use client";


import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";


export default function Dashboard(){


const {
user,
loading
}=useAuth();
console.log("DASHBOARD USER:",user);


const router =
useRouter();



useEffect(()=>{


if(loading){

return;

}



if(!user){

router.replace("/login");

return;

}



if(user.role==="LEARNER"){


router.replace("/student");


}


else if(user.role==="INSTRUCTOR"){


router.replace("/instructor");


}


else if(user.role==="ADMIN"){


router.replace("/admin");


}



},[
user,
loading,
router
]);




return (

<div className="
min-h-screen
flex
items-center
justify-center
">

Loading Dashboard...

</div>

);


}
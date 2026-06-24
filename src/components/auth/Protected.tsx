"use client";


import {
useEffect
} from "react";


import {
useRouter
} from "next/navigation";


import {
useAuth
} from "@/context/AuthContext";

import Loading 
from "@/components/ui/Loading";


export default function Protected(
{
children,
role
}:{
children:React.ReactNode,
role:string
}){


const {
user,
loading
}=useAuth();



const router =
useRouter();




useEffect(()=>{


if(loading)
return;



if(!user){

router.replace("/login");

return;

}



if(user.role!==role){


router.replace(
"/dashboard"
);


}



},[
user,
loading
]);





if(
loading ||
!user ||
user.role!==role
){


return <Loading/>;


}




return children;


}
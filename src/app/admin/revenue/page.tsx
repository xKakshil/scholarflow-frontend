"use client";


import {useEffect,useState} from "react";

import DashboardLayout from "@/components/layout/DashboardLayout";

import Protected from "@/components/auth/Protected";

import Card from "@/components/ui/Card";

import {api} from "@/services/api";





export default function Revenue(){


const [stats,setStats]=
useState<any>(null);



useEffect(()=>{


api.get("/admin/revenue")
.then(
res=>setStats(res.data)
);


},[]);






return(

<Protected role="ADMIN">


<DashboardLayout>



<h1 className="
text-3xl
font-bold
">

Revenue

</h1>




<div className="
grid
grid-cols-2
gap-6
mt-10
">


<Card>


<h2 className="
text-xl
font-bold
">

💰 Total Revenue

</h2>


<p className="
text-4xl
mt-5
font-bold
">

₹ {stats?.revenue || 0}

</p>


</Card>






<Card>


<h2 className="
text-xl
font-bold
">

Transactions

</h2>


<p className="
text-4xl
mt-5
font-bold
">

{stats?.transactions || 0}

</p>


</Card>




</div>



</DashboardLayout>


</Protected>

);


}
"use client";


import {useEffect,useState} from "react";

import DashboardLayout from "@/components/layout/DashboardLayout";

import Protected from "@/components/auth/Protected";

import {api} from "@/services/api";





export default function AdminEnrollments(){


const [data,setData]=
useState<any[]>([]);



useEffect(()=>{


api.get("/admin/enrollments")
.then(
res=>setData(res.data)
);


},[]);






return(

<Protected role="ADMIN">


<DashboardLayout>


<h1 className="
text-3xl
font-bold
">

Enrollments

</h1>





<div className="
bg-white
rounded-xl
shadow
p-6
mt-8
">


{

data.map(

e=>(


<div

key={e.id}

className="
border-b
py-3
"

>


<p>

👨‍🎓 {e.user.email}

</p>


<p>

📚 {e.course.title}

</p>


<p>

₹ {e.course.price}

</p>



</div>


)

)

}


</div>



</DashboardLayout>


</Protected>

);


}
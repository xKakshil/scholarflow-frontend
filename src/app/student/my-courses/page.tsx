"use client";


import {useEffect,useState} from "react";

import Link from "next/link";

import DashboardLayout from "@/components/layout/DashboardLayout";

import Protected from "@/components/auth/Protected";

import Card from "@/components/ui/Card";

import {api} from "@/services/api";



export default function MyCourses(){


const [courses,setCourses]=useState<any[]>([]);



useEffect(()=>{


api.get("/student/my-courses")
.then(
res=>setCourses(res.data)
);


},[]);





return (

<Protected role="LEARNER">

<DashboardLayout>


<h1 className="
text-3xl
font-bold
">

My Learning

</h1>


<p className="
text-gray-500
mt-2
">

Continue your enrolled courses

</p>



<div className="
grid
grid-cols-3
gap-6
mt-10
">


{

courses.map(

e=>(


<Card key={e.id}>


<h2 className="
text-xl
font-bold
">

{e.course.title}

</h2>



<p className="
text-gray-500
mt-3
">

{e.course.description}

</p>



<p className="mt-3">

👨‍🏫 {e.course.instructor.email}

</p>



<Link

href={`/student/learn/${e.course.id}`}

className="
block
bg-black
text-white
text-center
rounded
py-2
mt-5
"

>

Continue Learning

</Link>



</Card>


)

)

}



</div>



</DashboardLayout>

</Protected>

);

}
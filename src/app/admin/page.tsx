"use client";


import {
useEffect,
useState
} from "react";


import DashboardLayout
from "@/components/layout/DashboardLayout";


import Protected
from "@/components/auth/Protected";


import Card
from "@/components/ui/Card";


import {api}
from "@/services/api";





export default function Admin(){



const [data,setData] =
useState<any>(null);






async function load(){


const res =
await api.get(
"/admin/stats"
);


setData(
res.data
);


}






useEffect(()=>{


load();


},[]);






if(!data){

return null;

}







return (

<Protected role="ADMIN">


<DashboardLayout>




<h1 className="text-3xl font-bold">

Admin Dashboard ⚙️

</h1>








<div className="
grid
grid-cols-3
gap-6
mt-8
">





<Card>

<h2>👥 Users</h2>

<p className="text-3xl font-bold">

{data.totalUsers}

</p>

</Card>








<Card>

<h2>👨‍🎓 Students</h2>

<p className="text-3xl font-bold">

{data.students}

</p>

</Card>







<Card>

<h2>👨‍🏫 Instructors</h2>

<p className="text-3xl font-bold">

{data.instructors}

</p>

</Card>







<Card>

<h2>📚 Courses</h2>

<p className="text-3xl font-bold">

{data.courses}

</p>

</Card>








<Card>

<h2>🎓 Enrollments</h2>

<p className="text-3xl font-bold">

{data.enrollments}

</p>

</Card>








<Card>

<h2>💰 Revenue</h2>

<p className="text-3xl font-bold">

₹{data.revenue}

</p>

</Card>





</div>










<h2 className="
text-2xl
font-bold
mt-10
">

Recent Courses

</h2>







<div className="mt-5 space-y-4">


{


data.recentCourses.map(

(c:any)=>(


<Card key={c.id}>


<h3 className="font-bold">

{c.title}

</h3>


<p>

Instructor: {c.instructor.email}

</p>


<p>

Students: {c._count.enrollments}

</p>



</Card>


)


)


}



</div>





</DashboardLayout>


</Protected>


);



}
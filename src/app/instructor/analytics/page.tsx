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





export default function Analytics(){



const [data,setData] =
useState<any>(null);






async function load(){


const res =
await api.get(
"/instructor/analytics"
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

<Protected role="INSTRUCTOR">


<DashboardLayout>





<h1
className="
text-3xl
font-bold
"
>

Analytics Dashboard 📊

</h1>








<div
className="
grid
grid-cols-4
gap-6
mt-8
"
>




<Card>


<h2 className="text-gray-500">

Courses

</h2>


<p className="text-3xl font-bold">

{data.totalCourses}

</p>


</Card>






<Card>


<h2 className="text-gray-500">

Students

</h2>


<p className="text-3xl font-bold">

{data.totalStudents}

</p>


</Card>






<Card>


<h2 className="text-gray-500">

Revenue

</h2>


<p className="text-3xl font-bold">

₹{data.revenue}

</p>


</Card>







<Card>


<h2 className="text-gray-500">

Progress

</h2>


<p className="text-3xl font-bold">

{data.avgProgress}%

</p>


</Card>






</div>









<h2
className="
text-2xl
font-bold
mt-10
"
>

Courses Performance

</h2>









<div
className="
grid
gap-5
mt-5
"
>


{


data.courses.map(

(c:any)=>(



<Card key={c.id}>



<h2
className="
font-bold
text-xl
"
>

{c.title}

</h2>





<p>

📚 Lessons: {c.lessons}

</p>





<p>

👨‍🎓 Students: {c.students}

</p>





<div
className="
mt-5
"
>


<h3 className="font-bold">

Learners:

</h3>




{


c.learners.map(

(l:any)=>(


<p key={l.email}>

{l.name || "Student"} - {l.email}

</p>


)

)


}




</div>





</Card>




)

)


}



</div>





</DashboardLayout>


</Protected>


);



}
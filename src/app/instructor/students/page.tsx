"use client";


import {
useEffect,
useState
} from "react";


import DashboardLayout from "@/components/layout/DashboardLayout";


import Protected from "@/components/auth/Protected";


import {api} from "@/services/api";





export default function InstructorStudents(){



const [courses,setCourses]=
useState<any[]>([]);




async function load(){


const res =
await api.get(
"/instructor/students"
);


setCourses(res.data);


}





useEffect(()=>{

load();

},[]);





return(

<Protected role="INSTRUCTOR">


<DashboardLayout>



<h1 className="
text-3xl
font-bold
">

Students

</h1>





{


courses.map(

course=>(


<div

key={course.id}

className="
bg-white
rounded-xl
shadow
p-6
mt-6
"

>


<h2 className="
font-bold
text-xl
">

{course.title}

</h2>





{

course.enrollments.map(

(e:any)=>(


<p

key={e.id}

className="mt-3"

>

👨‍🎓 {e.user.email}

</p>


)

)

}



</div>


)

)

}




</DashboardLayout>


</Protected>

);


}
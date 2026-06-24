"use client";


import {
useEffect,
useState
} from "react";


import Link from "next/link";


import DashboardLayout
from "@/components/layout/DashboardLayout";


import Protected
from "@/components/auth/Protected";


import Card
from "@/components/ui/Card";


import {api}
from "@/services/api";


import toast
from "react-hot-toast";






export default function Courses(){



const [courses,setCourses]=
useState<any[]>([]);






async function load(){


const res =
await api.get(
"/student/courses"
);


setCourses(
res.data
);


}







async function enroll(id:string){



try{


await api.post(
"/student/enrollments",
{
courseId:id
}
);




toast.success(
"Enrolled successfully"
);



load();



}


catch(e:any){


toast.error(
e.response?.data?.error ||
"Failed"
);


}



}









useEffect(()=>{


load();


},[]);










return (


<Protected role="LEARNER">


<DashboardLayout>




<h1
className="
text-3xl
font-bold
"
>

Explore Courses

</h1>








<div
className="
grid
grid-cols-3
gap-6
mt-10
"
>



{


courses.map(

c=>(



<Card key={c.id}>



<h2
className="
text-xl
font-bold
"
>

{c.title}

</h2>





<p
className="
text-gray-500
"
>

{c.description}

</p>






<p
className="
mt-3
"
>

👨‍🏫 {c.instructor.email}

</p>





<p>

₹{c.price}

</p>





<p>

Students: {c._count.enrollments}

</p>










{


c.enrollments.length>0

?

<div>


<p
className="
text-green-600
font-bold
mt-5
"
>

✅ Enrolled

</p>




<Link

href={`/student/learn/${c.id}`}

className="
block
bg-black
text-white
text-center
px-4
py-2
rounded
mt-3
"

>

Continue Learning

</Link>



</div>



:


<button

onClick={()=>enroll(c.id)}

className="
bg-black
text-white
px-4
py-2
rounded
mt-5
"

>

Enroll

</button>


}






</Card>



)

)

}



</div>






</DashboardLayout>


</Protected>


);


}
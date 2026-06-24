"use client";


import {
useEffect,
useState
} from "react";


import {useParams} from "next/navigation";


import DashboardLayout
from "@/components/layout/DashboardLayout";


import Protected
from "@/components/auth/Protected";


import Card
from "@/components/ui/Card";


import {api} from "@/services/api";





export default function Learn(){


const params =
useParams();



const [course,setCourse]=
useState<any>(null);


const [lesson,setLesson]=
useState<any>(null);





async function load(){


const res =
await api.get(
`/student/learn/${params.id}`
);


setCourse(
res.data
);



if(
res.data.lessons.length>0
){

setLesson(
res.data.lessons[0]
);

}


}







useEffect(()=>{


load();


},[]);







if(!course){

return null;

}









return (

<Protected role="LEARNER">


<DashboardLayout>





<h1 className="
text-3xl
font-bold
">

{course.title}

</h1>



<p className="text-gray-500">

Instructor: {course.instructor.email}

</p>









<div className="
grid
grid-cols-4
gap-6
mt-8
">






<div className="
col-span-3
space-y-6
">





<Card>


<h2 className="
text-xl
font-bold
mb-5
">

🎬 {lesson?.title}

</h2>





{
lesson?.videoUrl &&


<iframe

src={lesson.videoUrl}

className="
w-full
h-96
rounded-xl
"

allowFullScreen

/>

}



</Card>









<Card>


<h2 className="
font-bold
text-xl
">

📖 Notes

</h2>



<p className="
mt-5
whitespace-pre-line
leading-7
">

{lesson?.notes}

</p>


</Card>










{
lesson?.pdfUrl &&


<Card>


<h2 className="
font-bold
text-xl
">

📄 PDF

</h2>



<a

href={lesson.pdfUrl}

target="_blank"

className="
text-blue-600
"

>

Open PDF

</a>



</Card>

}







</div>









<div>


<Card>


<h2 className="
font-bold
text-xl
mb-5
">

Lessons

</h2>





{


course.lessons.map(

(l:any,index:number)=>(



<button

key={l.id}

onClick={()=>setLesson(l)}

className="
block
w-full
text-left
border
rounded
p-3
mb-3
hover:bg-gray-100
"

>


{index+1}. {l.title}


</button>



)

)

}



</Card>


</div>





</div>





</DashboardLayout>


</Protected>

);

}
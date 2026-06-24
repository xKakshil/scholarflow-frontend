"use client";


import {
useEffect,
useState
} from "react";


import {useParams} from "next/navigation";


import DashboardLayout
from "@/components/layout/DashboardLayout";


import Card
from "@/components/ui/Card";


import {api}
from "@/services/api";


import toast
from "react-hot-toast";






export default function CourseManage(){


const params =
useParams();



const [lessons,setLessons]=
useState<any[]>([]);



const [form,setForm]=
useState({

title:"",

videoUrl:"",

notes:"",

pdfUrl:""

});







async function loadLessons(){


const res =
await api.get(
`/instructor/lessons?courseId=${params.id}`
);


setLessons(
res.data
);


}







async function createLesson(){


try{


await api.post(
"/instructor/lessons",
{

...form,

courseId:params.id

}

);



toast.success(
"Lesson added"
);



setForm({

title:"",

videoUrl:"",

notes:"",

pdfUrl:""

});



loadLessons();


}



catch(error){


toast.error(
"Failed creating lesson"
);


}



}








useEffect(()=>{


loadLessons();


},[]);








return (

<DashboardLayout>



<h1
className="
text-3xl
font-bold
"
>

Manage Lessons

</h1>





<p
className="
text-gray-500
mt-2
"
>

Add videos, notes and PDF resources

</p>









<Card>


<div
className="
space-y-4
mt-5
"
>



<input

value={form.title}

placeholder="Lesson title"

className="
border
p-3
rounded
w-full
"

onChange={
e=>setForm({
...form,
title:e.target.value
})
}

/>





<input

value={form.videoUrl}

placeholder="Video URL"

className="
border
p-3
rounded
w-full
"

onChange={
e=>setForm({
...form,
videoUrl:e.target.value
})
}

/>






<input

value={form.pdfUrl}

placeholder="PDF URL"

className="
border
p-3
rounded
w-full
"

onChange={
e=>setForm({
...form,
pdfUrl:e.target.value
})
}

/>






<textarea

value={form.notes}

placeholder="Lesson notes"

className="
border
p-3
rounded
w-full
h-40
"

onChange={
e=>setForm({
...form,
notes:e.target.value
})
}

/>






<button

onClick={createLesson}

className="
bg-black
text-white
px-6
py-2
rounded
"

>

Add Lesson

</button>



</div>


</Card>









<h2
className="
text-2xl
font-bold
mt-10
"
>

Lessons

</h2>





<div
className="
grid
grid-cols-3
gap-6
mt-5
"
>


{


lessons.map(

lesson=>(


<Card key={lesson.id}>


<h2
className="
font-bold
text-xl
"
>

{lesson.title}

</h2>



<p
className="
text-gray-500
mt-3
"
>

🎬 Video Added

</p>



<p>

📄 PDF Resource

</p>



</Card>


)

)

}



</div>




</DashboardLayout>

);


}
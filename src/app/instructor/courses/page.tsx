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







export default function InstructorCourses(){



const [courses,setCourses] =
useState<any[]>([]);





const [form,setForm] =
useState({

title:"",

description:"",

price:"",

category:"",

level:""

});









async function load(){



const res =
await api.get(
"/instructor/courses"
);



setCourses(
res.data
);



}









async function create(){



try{



await api.post(
"/instructor/courses",
form
);




toast.success(
"Course created"
);





setForm({

title:"",

description:"",

price:"",

category:"",

level:""

});




load();




}



catch(error){



toast.error(
"Failed creating course"
);



}



}











useEffect(()=>{


load();


},[]);










return (


<Protected role="INSTRUCTOR">


<DashboardLayout>






<h1
className="
text-3xl
font-bold
"
>

Create Course

</h1>





<p
className="
text-gray-500
mt-2
"
>

Create course first, then add lessons/videos/notes

</p>









<div
className="
bg-white
p-6
rounded-xl
shadow
mt-8
space-y-3
max-w-2xl
"
>





<input

className="
border
p-3
w-full
rounded
"

placeholder="Course title"

value={form.title}

onChange={
e=>setForm({
...form,
title:e.target.value
})
}

/>







<textarea

className="
border
p-3
w-full
rounded
"

placeholder="Course description"

value={form.description}

onChange={
e=>setForm({
...form,
description:e.target.value
})
}

/>









<input

className="
border
p-3
w-full
rounded
"

placeholder="Price"

value={form.price}

onChange={
e=>setForm({
...form,
price:e.target.value
})
}

/>








<input

className="
border
p-3
w-full
rounded
"

placeholder="Category"

value={form.category}

onChange={
e=>setForm({
...form,
category:e.target.value
})
}

/>








<input

className="
border
p-3
w-full
rounded
"

placeholder="Level (Beginner / Advanced)"

value={form.level}

onChange={
e=>setForm({
...form,
level:e.target.value
})
}

/>








<button

onClick={create}

className="
bg-black
text-white
px-5
py-2
rounded
"

>

Create Course

</button>





</div>













<h2
className="
text-2xl
font-bold
mt-10
"
>

My Courses

</h2>










<div
className="
grid
grid-cols-3
gap-5
mt-5
"
>


{


courses.map(

c=>(



<Link

key={c.id}

href={`/instructor/courses/${c.id}`}

>



<Card>



<h2
className="
font-bold
text-xl
"
>

{c.title}

</h2>






<p
className="
text-gray-500
mt-2
"
>

{c.description}

</p>






<p
className="
mt-3
"
>

💰 ₹{c.price}

</p>






<p>

📚 Lessons: {c.lessons?.length || 0}

</p>






<p>

👨‍🎓 Students: {c.enrollments?.length || 0}

</p>






</Card>


</Link>



)

)

}



</div>






</DashboardLayout>


</Protected>



);


}
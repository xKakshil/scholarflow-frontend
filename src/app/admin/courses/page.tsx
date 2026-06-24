"use client";


import {
useEffect,
useState
} from "react";


import DashboardLayout
from "@/components/layout/DashboardLayout";


import Card
from "@/components/ui/Card";


import Loading
from "@/components/ui/Loading";


import Empty
from "@/components/ui/Empty";


import Protected
from "@/components/auth/Protected";


import { api }
from "@/services/api";


import toast
from "react-hot-toast";







type Course = {


id:string;


title:string;


description:string;


instructor:{


email:string;


};



lessons:any[];



enrollments:any[];



};










export default function AdminCourses(){



const [courses,setCourses] =
useState<Course[]>([]);



const [loading,setLoading] =
useState(true);









async function loadCourses(){



try{



const res =
await api.get(
"/admin/courses"
);




setCourses(
res.data
);




}




catch(error){



toast.error(
"Failed to load courses"
);



}




finally{



setLoading(false);



}




}









useEffect(()=>{



loadCourses();



},[]);









return (


<Protected role="ADMIN">



<DashboardLayout>







<h1

className="
text-3xl
font-bold
"

>


Courses


</h1>








<p

className="
text-gray-500
mt-2
"

>


All platform courses


</p>









{


loading &&


<Loading/>


}









{


!loading &&

courses.length===0 &&



<Empty


message="No courses available"


/>



}









{


!loading &&

courses.length>0 &&



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


(course)=>(




<Card

key={course.id}

>




<h2

className="
text-xl
font-bold
"

>


{course.title}


</h2>









<p

className="
text-gray-500
mt-2
"

>


{course.description}


</p>











<div

className="
mt-5
space-y-2
text-sm
"

>







<p>


👨‍🏫 Instructor:


{" "}


{course.instructor?.email}


</p>










<p>


📚 Lessons:


{" "}


{course.lessons?.length || 0}


</p>









<p>


👥 Students:


{" "}


{course.enrollments?.length || 0}


</p>







</div>





</Card>





)


)


}






</div>



}









</DashboardLayout>



</Protected>



);



}
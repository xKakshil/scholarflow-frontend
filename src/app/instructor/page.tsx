"use client";


import Link from "next/link";


import DashboardLayout
from "@/components/layout/DashboardLayout";


import Card
from "@/components/ui/Card";


import Protected
from "@/components/auth/Protected";





export default function Instructor(){



return (


<Protected role="INSTRUCTOR">



<DashboardLayout>





<h1
className="
text-3xl
font-bold
"
>

Instructor Dashboard

</h1>





<p
className="
text-gray-500
mt-2
"
>

Manage courses, resources and AI-powered learning

</p>








<div
className="
grid
grid-cols-1
md:grid-cols-3
gap-6
mt-10
"
>






<Link href="/instructor/courses">


<Card>


<h2
className="
text-xl
font-semibold
"
>

📚 Courses

</h2>




<p
className="
text-gray-600
mt-3
"
>

Create courses, modules, lessons and resources

</p>



</Card>


</Link>










<Link href="/instructor/courses">


<Card>


<h2
className="
text-xl
font-semibold
"
>

🤖 AI Content

</h2>




<p
className="
text-gray-600
mt-3
"
>

Upload resources and train AI assistant

</p>



</Card>


</Link>









<Card>


<h2
className="
text-xl
font-semibold
"
>

👨‍🎓 Students

</h2>





<p
className="
text-gray-600
mt-3
"
>

View enrolled learners and activity

</p>




</Card>






</div>





</DashboardLayout>



</Protected>



);


}
"use client";


import Link from "next/link";

import { useAuth } from "@/context/AuthContext";

import { usePathname } from "next/navigation";






export default function Sidebar(){



const {user} =
useAuth();



const path =
usePathname();







function linkStyle(
href:string
){


return `
p-3
rounded-lg
transition
${
path===href
?
"bg-black text-white"
:
"hover:bg-gray-100"
}
`;


}









return (


<aside

className="
w-64
min-h-screen
bg-white
border-r
p-6
"

>






<div

className="
font-bold
text-sm
text-gray-400
mb-8
"

>

{user?.role}

</div>








<nav

className="
flex
flex-col
gap-3
"

>









{/* ================= ADMIN ================= */}


{


user?.role==="ADMIN" &&


<>





<Link

href="/admin"

className={linkStyle("/admin")}

>

⚙️ Dashboard

</Link>








<Link

href="/admin/users"

className={linkStyle("/admin/users")}

>

👥 Users

</Link>








<Link

href="/admin/courses"

className={linkStyle("/admin/courses")}

>

📚 Courses

</Link>








<Link

href="/admin/enrollments"

className={linkStyle("/admin/enrollments")}

>

🎓 Enrollments

</Link>









<Link

href="/admin/revenue"

className={linkStyle("/admin/revenue")}

>

💰 Revenue

</Link>





</>


}













{/* ================= INSTRUCTOR ================= */}



{


user?.role==="INSTRUCTOR" &&


<>







<Link

href="/instructor"

className={linkStyle("/instructor")}

>

🏠 Dashboard

</Link>









<Link

href="/instructor/courses"

className={linkStyle("/instructor/courses")}

>

📚 My Courses

</Link>









<Link

href="/instructor/students"

className={linkStyle("/instructor/students")}

>

👨‍🎓 Students

</Link>










<Link

href="/instructor/analytics"

className={linkStyle("/instructor/analytics")}

>

📊 Analytics

</Link>







</>


}














{/* ================= STUDENT ================= */}



{


user?.role==="LEARNER" &&


<>







<Link

href="/student"

className={linkStyle("/student")}

>

🏠 Dashboard

</Link>










<Link

href="/student/courses"

className={linkStyle("/student/courses")}

>

🔎 Explore Courses

</Link>









<Link

href="/student/my-courses"

className={linkStyle("/student/my-courses")}

>

📚 My Learning

</Link>









<Link

href="/ai"

className={linkStyle("/ai")}

>

🤖 AI Assistant

</Link>






</>


}








</nav>




</aside>



);



}
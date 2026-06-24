"use client";


import Link from "next/link";


import DashboardLayout
from "@/components/layout/DashboardLayout";


import Card
from "@/components/ui/Card";


import { useAuth }
from "@/context/AuthContext";

import Protected
from "@/components/auth/Protected";

export default function Student(){


const {user}=useAuth();



return (
<Protected role="LEARNER">
<DashboardLayout>


<h1 className="
text-3xl
font-bold
">

Student Dashboard

</h1>



<p className="
text-gray-500
mt-2
">

Welcome back, {user?.email}

</p>





<div className="
grid
grid-cols-3
gap-6
mt-10
">



<Link href="/student/courses">

<Card>


<h2 className="
text-xl
font-semibold
">

📚 My Courses

</h2>


<p className="
text-gray-600
mt-3
">

Continue your enrolled courses

</p>


</Card>


</Link>






<Link href="/ai">


<Card>


<h2 className="
text-xl
font-semibold
">

🤖 AI Assistant

</h2>


<p className="
text-gray-600
mt-3
">

Ask doubts from uploaded materials

</p>


</Card>


</Link>







<Card>


<h2 className="
text-xl
font-semibold
">

📈 Progress

</h2>


<p className="
text-gray-600
mt-3
">

Track learning activity

</p>


</Card>





</div>


</DashboardLayout>
</Protected>

);


}
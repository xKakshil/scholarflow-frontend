import Link from "next/link";



export default function Home(){


return (

<main className="
min-h-screen
flex
items-center
justify-center
bg-gray-50
px-6
">


<div className="
max-w-3xl
text-center
">


<h1 className="
text-6xl
font-bold
mb-6
">

ScholarFlow

</h1>



<p className="
text-xl
text-gray-600
mb-10
">

AI Powered Learning Management Platform
for Students, Instructors and Admins.

</p>



<div className="
flex
justify-center
gap-5
">


<Link

href="/login"

className="
bg-black
text-white
px-8
py-3
rounded-xl
"

>

Login

</Link>



<Link

href="/register"

className="
border
px-8
py-3
rounded-xl
"

>

Get Started

</Link>



</div>





<div className="
grid
grid-cols-3
gap-5
mt-16
text-left
">


<div className="
bg-white
p-5
rounded-xl
shadow
">

<h3 className="font-bold">
🤖 AI Tutor
</h3>

<p className="text-sm text-gray-500 mt-2">
Learn using AI powered course assistance.
</p>

</div>





<div className="
bg-white
p-5
rounded-xl
shadow
">

<h3 className="font-bold">
📚 Courses
</h3>

<p className="text-sm text-gray-500 mt-2">
Enroll and manage structured lessons.
</p>

</div>






<div className="
bg-white
p-5
rounded-xl
shadow
">

<h3 className="font-bold">
📊 Analytics
</h3>

<p className="text-sm text-gray-500 mt-2">
Instructor and admin insights.
</p>

</div>




</div>



</div>


</main>

);

}

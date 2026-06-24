"use client";


import {
useEffect,
useState
} from "react";


import DashboardLayout
from "@/components/layout/DashboardLayout";


import Protected
from "@/components/auth/Protected";


import Loading
from "@/components/ui/Loading";


import Empty
from "@/components/ui/Empty";


import { api }
from "@/services/api";


import toast
from "react-hot-toast";




type User = {

id:string;

name:string | null;

email:string;

role:string;

createdAt:string;

};




export default function Users(){


const [users,setUsers]=
useState<User[]>([]);


const [loading,setLoading]=
useState(true);





async function loadUsers(){


try{


const res =
await api.get(
"/admin/users"
);



setUsers(
res.data
);



}


catch(error){


toast.error(
"Failed to load users"
);


}


finally{


setLoading(false);


}



}





useEffect(()=>{


loadUsers();


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

Users

</h1>




<p
className="
text-gray-500
mt-2
"
>

Manage platform accounts

</p>





{
loading &&

<Loading/>

}




{
!loading &&
users.length===0 &&


<Empty

message="No users found"

/>

}





{
!loading &&
users.length>0 &&


<div
className="
bg-white
rounded-xl
shadow
mt-8
overflow-hidden
"
>


<table
className="
w-full
"
>



<thead>


<tr
className="
border-b
bg-gray-50
"
>


<th className="p-4 text-left">

Name

</th>



<th className="p-4 text-left">

Email

</th>



<th className="p-4 text-left">

Role

</th>


</tr>


</thead>







<tbody>


{

users.map(

(user)=>(


<tr

key={user.id}

className="
border-b
hover:bg-gray-50
"

>



<td className="p-4">


{
user.name ||
"Unknown"
}


</td>





<td className="p-4">


{user.email}


</td>





<td className="p-4">


<span
className="
bg-gray-200
px-3
py-1
rounded-full
text-sm
"
>


{user.role}


</span>



</td>



</tr>


)

)

}


</tbody>


</table>


</div>


}




</DashboardLayout>


</Protected>


);


}
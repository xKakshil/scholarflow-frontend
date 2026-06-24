"use client";


import { useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/services/api";

import { useAuth } from "@/context/AuthContext";
import toast from "react-hot-toast";

export default function LoginPage(){


const router =
useRouter();

const {loginUser}=useAuth();

const [form,setForm] =
useState({

email:"",
password:""

});


const [loading,setLoading] =
useState(false);




async function login(){


try{


setLoading(true);



const res =
await api.post(
"/auth/login",
form
);



loginUser(
res.data.token
);



toast.success(
"Login successful"
);



router.push(
"/dashboard"
);



}


catch(error:any){


toast.error(
error.response?.data?.error ||
"Login failed"
);


}


finally{

setLoading(false);

}


}




return (

<div className="
min-h-screen
flex
items-center
justify-center
bg-gray-100
">


<div className="
bg-white
p-8
rounded-xl
shadow-md
w-96
space-y-4
">


<h1 className="
text-2xl
font-bold
text-center
">

Login

</h1>



<input

className="
border
p-2
w-full
rounded
"

placeholder="Email"


onChange={
(e)=>

setForm({

...form,

email:e.target.value

})

}

/>



<input

className="
border
p-2
w-full
rounded
"


placeholder="Password"


type="password"


onChange={
(e)=>

setForm({

...form,

password:e.target.value

})

}


/>



<button

onClick={login}


className="
bg-black
text-white
p-2
rounded
w-full
"


>


{
loading?
"Logging in..."
:
"Login"
}


</button>



</div>

</div>


);


}
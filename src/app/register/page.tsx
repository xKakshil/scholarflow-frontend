"use client";


import { useState } from "react";
import { api } from "@/services/api";
import toast from "react-hot-toast";


export default function RegisterPage(){


const [form,setForm]=useState({

name:"",
email:"",
password:""

});


const [loading,setLoading]=useState(false);



async function register(){


try{


setLoading(true);


const res =
await api.post(
"/auth/register",
form
);


console.log(
res.data
);


toast.success(
"Account created successfully"
);


}


catch(error:any){

console.log(
"REGISTER ERROR",
error.response?.data
);

toast.error(
JSON.stringify(error.response?.data)
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

Create Account

</h1>



<input

className="
border
p-2
w-full
rounded
"

placeholder="Name"

onChange={
e=>setForm({
...form,
name:e.target.value
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

placeholder="Email"

onChange={
e=>setForm({
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
e=>setForm({
...form,
password:e.target.value
})
}

/>



<button

onClick={register}

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
"Creating..."
:
"Register"
}


</button>



</div>


</div>

);

}
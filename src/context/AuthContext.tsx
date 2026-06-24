"use client";


import {
createContext,
useContext,
useEffect,
useState
} from "react";


import {
useRouter
} from "next/navigation";


import {
jwtDecode
} from "jwt-decode";






type User = {

id:string;

email:string;

role:
"ADMIN" |
"INSTRUCTOR" |
"LEARNER";

iat:number;

exp:number;

};







type AuthContextType = {

user:User | null;

loading:boolean;

loginUser:(token:string)=>void;

logout:()=>void;

};









const AuthContext =
createContext<AuthContextType | null>(
null
);









export function AuthProvider(
{
children
}:{
children:React.ReactNode
}){



const router =
useRouter();





const [user,setUser] =
useState<User | null>(null);




const [loading,setLoading] =
useState(true);









function loadUser(){



const token =
localStorage.getItem(
"token"
);





if(!token){


setUser(null);

setLoading(false);

return;


}






try{



const decoded =
jwtDecode<User>(
token
);







const expired =
decoded.exp * 1000 <
Date.now();






if(expired){


localStorage.removeItem(
"token"
);



setUser(null);



}



else{


setUser(
decoded
);


}



}





catch(error){



localStorage.removeItem(
"token"
);



setUser(null);



}





finally{



setLoading(false);



}




}









useEffect(()=>{


loadUser();


},[]);










function loginUser(
token:string
){



localStorage.setItem(
"token",
token
);





const decoded =
jwtDecode<User>(
token
);




setUser(
decoded
);



}











function logout(){



localStorage.removeItem(
"token"
);



setUser(
null
);




router.replace(
"/login"
);



}










return (


<AuthContext.Provider


value={{

user,

loading,

loginUser,

logout

}}

>


{children}


</AuthContext.Provider>


);



}









export function useAuth(){



const context =
useContext(
AuthContext
);





if(!context){


throw new Error(
"useAuth must be inside AuthProvider"
);


}





return context;



}
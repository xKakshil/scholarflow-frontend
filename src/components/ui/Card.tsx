type CardProps = {

children:React.ReactNode;

className?:string;

};





export default function Card(
{
children,
className=""
}:CardProps
){



return (


<div
className={
`
bg-white
rounded-2xl
shadow-sm
border
p-6
transition
duration-200
hover:shadow-lg
hover:-translate-y-1
${className}
`
}
>



{children}



</div>


);


}
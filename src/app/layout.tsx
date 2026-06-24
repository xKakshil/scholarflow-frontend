import type { Metadata } from "next";
import { AuthProvider } from "@/context/AuthContext";

import "./globals.css";
import { Toaster } from "react-hot-toast";

import ServerWakeup 
from "@/components/common/ServerWakeup";


export const metadata: Metadata = {

title: "ScholarFlow",

description:
"AI Powered Learning Platform"

};



export default function RootLayout(
{
children,
}: Readonly<{
children: React.ReactNode;
}>
) {


return (

<html lang="en">

<body>

<AuthProvider>

{children}

<ServerWakeup/>


<Toaster
position="top-right"
/>
</AuthProvider>

</body>

</html>

);


}
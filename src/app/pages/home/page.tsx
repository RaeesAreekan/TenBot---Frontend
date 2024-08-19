import Chat from "@/app/Components/Chat"
import Navbar from "@/app/Components/Navbar"
import Sidebar from "@/app/Components/Sidebar"
import { Inter } from "next/font/google"
const inter = Inter({ subsets: ["latin"] })


const home:React.FC = ()=>{
    return(

        <html lang="en">
      
      
        <body className={inter.className}>
        <Navbar/>
        <div className="flex flex-row flex-1 overflow-hidden">
        <Sidebar/>
        <Chat/>
  
        </div>
        
          {/* {children} */}
          </body>
      </html>

    )
}

export default home
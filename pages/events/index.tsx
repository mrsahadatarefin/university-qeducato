import EventPages from "@/components/features/EventPages"
import { GetStaticProps } from "next"
import Link from "next/link"

// export const getServerSideProps: GetStaticProps = async ()=>{
//   const res = await fetch('https://jsonplaceholder.typicode.com/users')
//   const data = await res.json()
//   return{
//       props:{
//          data
//       }
//   }
// }

 const blog =({data}: any)=>{
    //console.log(data);
    
    return(
        <div>
        
        {/* {data.map((cur : any )=>(
            <div key={cur.id}>
           <Link href={`/events/${cur.id}`}> 
           <h1 className="text-3xl py-3">{cur.name}</h1>
           </Link>           
           
            </div>                     
           
        ))} */}

         <EventPages />
        </div>
    )
}

export default blog
import EventPages from "@/components/features/EventPages"
import { GetStaticProps } from "next"
import Link from "next/link"


export const getServerSideProps: GetStaticProps = async ()=>{
  const res = await fetch('http://localhost:3000/api/data')
  const data = await res.json()
  return{
      props:{
         data
      }
  }
}

 const blog =({data}: any)=>{
    //console.log(data.info);
    
    return(
        <div>
         <EventPages data={data} />
        </div>
    )
}

export default blog
import EventDetails from "@/components/features/EventDetails";
import { GetStaticPaths, GetStaticProps } from "next"


// export const  getStaticPaths: GetStaticPaths  = async ()=>{
//     const res = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await res.json()

//     const paths = data.map((cur: any)=>{
//         return{
//             paths:{
//                 pagno: cur.id.toString(),
//             },
//         }
//     })
//     return{
//         paths,
//         fallback: true
//     } 
//   }

//   export const getServerSideProps :  GetStaticProps = async (context: any)=>{
//     //const id = context.params.pagno
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
//     const data = await res.json()
//     return{
//         props:{
//            data
//         }
//     }
//   }


const myData = ({data}: any) => {
  //  console.log(data);
    
    return (
        <div>
            <EventDetails />
        </div>
    );
};

export default myData;
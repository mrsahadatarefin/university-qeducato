import EventDetails from "@/components/features/EventDetails";
import { GetStaticPaths, GetStaticProps } from "next"
import Link from 'next/link';
import styles from '../../styles/features/eventDetails.module.css'

// export interface Props {
//     id: string,
//     name: string
// }
// interface DataProps{
//     data: Props
// }

// interface PathParams {
//     data: string;
//   }

// export const getStaticPaths: GetStaticPaths = async()=>{
//     const res = await fetch('http://localhost:3000/api/data')
//     const data = await res.json()

//     const paths = data.info.map((event: Props)=>{
//         return{
//             data : event.id.toString()
//         }
//     })
//     return{
//         paths,
//         fallback: false 
//     }
// }


//   export const  getStaticProps : GetStaticProps = async(context) => {
//     const id = context.params?.data
//      const res = await fetch(`http://localhost:3000/api/data/${id}`)
//     const data = await res.json()

//     return{
//         props:{
//            data
//         }
//     }
// }

  
const myData = ({data}: any ) => {
   // console.log(data);
    
    return (
        <div>
            <EventDetails />
        </div>
    );
};

export default myData;
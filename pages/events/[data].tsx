import EventDetails from "@/components/features/EventDetails";
import { GetStaticPaths, GetStaticProps } from "next"
import {IoMdCall} from 'react-icons/io'
import {CiMail} from 'react-icons/ci'
import {BiCalendar} from 'react-icons/bi'
import {BiTime} from 'react-icons/bi'
import {BsArrowRight} from 'react-icons/bs'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {FaTwitter} from 'react-icons/fa'
import Link from 'next/link';
import styles from '../../styles/features/eventDetails.module.css'

// export interface Props {
//     id: string,
//     name: string
// }
// interface DataProps{
//     data: Props
// }

// export const getStaticPaths: GetStaticPaths  = async()=>{
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
//      const res = await fetch(`http://localhost:3000/api/data`)
//     const data = await res.json()

//     return{
//         props:{
//            data
//         }
//     }
// }

  
const myData = ({data}: any) => {
    //console.log(data.id);
    
    return (
        <div>
            <EventDetails />
  
        </div>
    );
};

export default myData;
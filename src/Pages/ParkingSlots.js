import "./parkingslot.css"
import ParkingSlot from "./ParkingSlot";
import {useEffect} from "react"
import axios from "axios"
import { useState } from "react";
import Card from "./Card";
const ParkingSlots = (props)=>{
    const [parkingSlots,UpdateParkingSlots] = useState([])
    const [free,setFree ] = useState(0)
    useEffect(()=>{
        
        const getData = async()=>{
            let resp;
            try{
                resp = await axios.get("https://parkingslot-690a3-default-rtdb.firebaseio.com/ParkingSlots.json",
                {headers: {
                    'Access-Control-Allow-Origin': true,
                  }},
                
                )
            }
            catch(err)
            {
                console.log(err)
            }
            return resp
        }
        const setData = async  ()=>{
            const resp = await getData();
            console.log(resp)
            let tempList = []
            let data = resp.data;
            let i;
            let count = 0
            for(let i = 0;i<data.length;i++)
            {
                if(data[i])
                {
                    count = count +1;
                }
                tempList.push(data[i])
            }
        
            console.log(data)
            setFree(count)
            UpdateParkingSlots(tempList)
        }
       setData();

    },[])

    return(
        <div className = "parking-slot-page">
           
              
           <div className ='parking-slots-grid'>
           <Card
           n = {parkingSlots.length}
           free = {free}
           filled = {parkingSlots.length - free}
           >

           </Card>
           {parkingSlots.map((ele, index)=>{
            return <ParkingSlot no = {index+1} 
            free = {ele}
            key = {index}
            >

            </ParkingSlot>
           })
           }
           
          </div>
        </div>
        )


}
export default ParkingSlots;
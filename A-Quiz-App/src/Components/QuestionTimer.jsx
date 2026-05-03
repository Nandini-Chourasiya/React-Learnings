import { useEffect , useState } from "react";

export default function QuestionTimer({timeout , onTimeout}){
   const[remainingTime , setRemainingTime] = useState(timeout);

   useEffect( ()=>{
    const Timer = setTimeout( onTimeout , timeout);

    return () => {
      clearTimeout(Timer);
   };
},[timeout,onTimeout]);

   useEffect( () => {
     const Interval = setInterval( () => {
      setRemainingTime( (prevRemaningTime) => prevRemaningTime -100);

      return () => {
        clearInterval(Interval);
      };
    },100);
 },[]);
  
   return <progress id="question-time" max={timeout} value={remainingTime} />;
}
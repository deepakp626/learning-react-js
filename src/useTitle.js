import { useEffect } from "react";
const useTitle = (props) =>{
   useEffect(()=>{
    document.title = props + " Hits on button";
   })
}
export default useTitle;
import { useEffect, useState } from "react";
import CountriesCard from "./CountriesCard";
import LoadingIndicator from "./LoadingIndicator";
import Pagination from "./Pagination";

const getList=({page,limit})=>{
return fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?page=${page}&limit=${limit}`)
.then(res=>res.json())
}

function Countries() { 
  const [page,setPage]=useState(1)
  const [limit,setLimit]=useState(10)
  const [loading,setLoading]=useState(false)
  const [totalPages,setTotalPages]=useState(1)
  const [list,setList]=useState([])

  
  useEffect(()=>{
    setLoading(true)
    getList({page,limit})
    .then(res=>{
      setLoading(false)
    setList(res.data)
    setTotalPages(res.totalPages)
    })
  },[page,limit])
  
  if(loading){
    return <LoadingIndicator />;
  }
console.log(list,totalPages)



  return (
    <div>
      <h1 data-testid="countries-header">Countries List</h1>
      <div data-testid="countries-container">
        {
          list.map(product=>(
            <CountriesCard key={product.id}  country={product.country} population={product.population}/>
          ))
        }
      
      </div>
      <div>
       <Pagination current={page} totalPages={totalPages} onChange={(page)=>setPage(page)}/>
      </div>
    </div>
  );
}

export default Countries;

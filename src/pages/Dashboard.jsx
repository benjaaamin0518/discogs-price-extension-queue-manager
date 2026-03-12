
import { useState } from "react"
import { useQueue } from "../hooks/useQueue"
import JobList from "../components/JobList"
import JobDetail from "../components/JobDetail"

export default function Dashboard(){

  const {data,isLoading} = useQueue()

  const [selected,setSelected] = useState(null)

  // if(isLoading) return <div style={{padding:40}}>loading...</div>
  

  return (

    <div style={{
      maxWidth:900,
      margin:"auto",
      padding:40
    }}>

      <h1>Scrape Queue Manager</h1>

      <div style={{marginTop:20}}>

<JobList
  jobs={data}
  selected={selected}
  setSelected={setSelected}
/>

      </div>


    </div>

  )
}

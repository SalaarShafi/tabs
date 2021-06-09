import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(1);

  const dataFunc = async ()=> {
    try {
      let data = await fetch(url);
      let jobs = await data.json();
      setJobs(jobs);
      setLoading(false);
    } catch (error) {
      console.log('dataFunc Error');
      setLoading(false);
    }
  }

  useEffect(
    ()=> {dataFunc()}, []
    );

  if(loading) {
    return(
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    )  
  }
  
  const {title, dates, duties, company} = jobs[value];
  // console.log(title, dates, duties, company);
  return (
    <section className='section'>
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className='jobs-center'>
        {/* btns */}
        <div className='btn-container'>
          {jobs.map((item, index)=> {
            console.log(item.order)
            console.log(item.title)
            return(
              <button key={index} 
              className={`job-btn ${index === value && 'active-btn'}`} 
              onClick={()=> setValue(index)}
              >{item.company}</button>
            )
          })}
        </div>
        {/* jobs info */}
        <article className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dates}</p>
          {duties.map((duty, index)=> {
            return(
              <div key={index} className='job-desc'>
                <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            )
          })}
        </article>
      </div>
    </section>
  )
}

export default App

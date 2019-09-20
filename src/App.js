import React from "react"
import "./App.css"
import JobsContainer from "./JobsContainer"
import JobSources from "./JobSources"
import Search from "./Search"



function App() {
  return (
    <div className="App">
      <div className="section">
        <Search />
      </div>
      <div className="columns">
        <div className="column">
          <JobsContainer jobSourceString = "GitHub Jobs" jobSource = {JobSources.searchGithub} />
        </div>  
        <div className="column">
          <JobsContainer jobSourceString = "Authentic Jobs" jobSource = {JobSources.searchAuthentic} />
        </div>
        <div className="column">
          <JobsContainer jobSourceString = "Juju Jobs" jobSource = {JobSources.searchJuju} />
        </div>
      </div> 
    </div>
  )
}

export default App

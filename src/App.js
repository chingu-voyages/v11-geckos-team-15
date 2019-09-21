import React from "react"
import "./App.css"
import JobsContainer from "./JobsContainer"
import JobSources from "./JobSources"
import Search from "./Search"



class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      githubJobs: [],
      jujuJobs: [],
      authenticJobs: [],
    }
    this.getJobs = this.getJobs.bind(this)
    this.searchGithub = JobSources.searchGithub.bind(this)
    this.searchJuju = JobSources.searchJuju.bind(this)
    this.searchAuthentic = JobSources.searchAuthentic.bind(this)
  }

  getJobs(keywords, location){
    this.searchAuthentic(keywords, location)
    this.searchJuju(keywords, location)
    this.searchGithub(keywords, location)
  }

  render(){
    return (
      <div className="App">
        <div className="section">
          <Search getJobs = {this.getJobs}/>
        </div>
        <div className="columns">
          <div className="column">
            <JobsContainer jobSourceString = "GitHub Jobs" jobs = {this.state.githubJobs} />
          </div>  
          <div className="column">
            <JobsContainer jobSourceString = "Authentic Jobs" jobs = {this.state.authenticJobs} />
          </div>
          <div className="column">
            <JobsContainer jobSourceString = "Juju Jobs" jobs = {this.state.jujuJobs}/>
          </div>
        </div> 
      </div>
    )
  } 
}

export default App

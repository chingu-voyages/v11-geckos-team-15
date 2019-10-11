import React from "react"
import "./App.sass"
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
      resultsLimit: 10,
      githubIndex: 1,
      jujuIndex: 0,
      authenticIndex: 1,
      keywords: "",
      location: "",
      searchInitiated: false,
    }
    this.getJobs = this.getJobs.bind(this)
    this.getMoreJobs = this.getMoreJobs.bind(this)
    this.searchGithub = JobSources.searchGithub.bind(this)
    this.searchJuju = JobSources.searchJuju.bind(this)
    this.searchAuthentic = JobSources.searchAuthentic.bind(this)
  }

  getJobs(location, keywords){
    this.setState({searchInitiated: true})
    this.setState({resultsLimit: 10})
    this.setState({githubIndex: 1})
    this.setState({githubJobs: []})
    this.setState({jujuIndex: 0})
    this.setState({jujuJobs: []})
    this.setState({authenticJobs: []})
    this.setState({authenticIndex: 1})
    this.setState({keywords: keywords})
    this.setState({location: location})
    this.searchAuthentic(location, keywords, this.state.authenticIndex)
    this.searchJuju(location, keywords, this.state.jujuIndex)
    this.searchGithub(location, keywords, this.state.githubIndex)
  }

  getMoreJobs(){
    if (this.state.searchInitiated){
      if (this.state.authenticJobs.length < this.state.resultsLimit + 10) {
        console.log(this.state.location)
        this.searchAuthentic(this.state.location, this.state.keywords, this.state.authenticIndex + 1)
        this.setState({authenticIndex: this.state.authenticIndex + 1})
        //console.log("authentic"+this.state.authenticIndex)
      }
      if (this.state.jujuJobs.length < this.state.resultsLimit + 10) {
        this.searchJuju(this.state.location, this.state.keywords, this.state.jujuIndex + 1)
        this.setState({jujuIndex: this.state.jujuIndex + 1})
      }
      if (this.state.githubJobs.length < this.state.resultsLimit + 10) {
        this.searchGithub(this.state.location, this.state.keywords, this.state.githubIndex + 1)
        this.setState({githubIndex: this.state.githubIndex + 1})
      }
      
      this.setState({resultsLimit: this.state.resultsLimit+10})
    }
  }

  render(){
    return (
      <div className="App">
        <header className="">
          <Search getJobs = {this.getJobs} getMoreJobs = {this.getMoreJobs}/>
        </header>
        <div className="main container-flex">
          <div className="column">
            <JobsContainer jobSourceString = "GitHub Jobs" jobs = {this.state.githubJobs.slice(0,this.state.resultsLimit)} />
          </div>  
          <div className="column">
            <JobsContainer jobSourceString = "Authentic Jobs" jobs = {this.state.authenticJobs.slice(0,this.state.resultsLimit)} />
          </div>
          <div className="column">
            <JobsContainer jobSourceString = "Juju Jobs" jobs = {this.state.jujuJobs.slice(0,this.state.resultsLimit)}/>
          </div>
          <div className="column">
            <JobsContainer jobSourceString = "Saved Jobs" jobs={[]}/>
          </div>
        </div> 
      </div>
    )
  } 
}

export default App

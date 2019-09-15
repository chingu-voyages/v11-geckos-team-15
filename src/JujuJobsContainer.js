import React from "react"



class JujuJobsContainer extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      jobs: "Loading",
    }
    this.loadJobs = this.loadJobs.bind(this)
    this.searchJuju = this.searchJuju.bind(this)
  }
  searchJuju = (location = "", query = "", page = 0) => {
    let jujuContainer = document.createElement("div")
    let url = `https://cors-anywhere.herokuapp.com/http://www.juju.com/jobs?k=${query}&l=${location}&r=20&page=${page}`
    return fetch(url)
    .then(result => result.text())
    .then(data => {
      jujuContainer.innerHTML = data
      let jobs = jujuContainer.querySelectorAll(".job")
      jobs = Array.prototype.slice.call(jobs)
      jobs = jobs.map((job, index) => {
        return {
          id: index,
          url: job.querySelector(".result").href,
          title: job.querySelector(".result").innerText,
          description: job.querySelector(".description").innerText.replace(/[\.{3}]/g, "").replace(/\s\s+/g, " ").trim().replace(/more$/, ""),
        }
      })
      this.setState({jobs: jobs})
    })
  }

  loadJobs(location, query, page){
    this.searchJuju(location, query, page)
  }

  componentDidMount(){
    this.searchJuju()
  }

  render(){
    if (this.state.jobs !== "Loading"){
      return(
        <div>
          <div className="section">
            <div className="title is-2">
              Juju Jobs
            </div>
          </div>
          <div className="section">
            {this.state.jobs.map(job => {
              return (
                  <div key={job.id}>
                    <p>{job.title}</p>
                    <p>{job.description.slice(0, 200)+"..."}</p>
                    <p><a href={job.url} rel="noopener noreferrer" target="_blank">Link</a></p>
                    <br />
                  </div>
                )
              })
            }
          </div>
        </div>
        
      )
    }
    return("Loading...")
  }

}

export default JujuJobsContainer
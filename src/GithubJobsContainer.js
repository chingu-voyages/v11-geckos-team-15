import React from "react"



class GithubJobsContainer extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      jobs: "Loading",
    }
    this.loadJobs = this.loadJobs.bind(this)
    this.searchGithub = this.searchGithub.bind(this)
  }

  searchGithub = (location = "", query = "", page = 0) => {
    let url = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${query}&location=${location}&page=${page}`
    fetch(url)
    .then(result => result.json())
    .then(data => {
      data = data.map((item)=> {
        let div = document.createElement("div")
        div.innerHTML = item.description
        let description = div.innerText
        return {
          title: item.title,
          url: item.url,
          description: description,
          id: item.id,
        }
      })
      console.log(data)
      this.setState({jobs: data})
    })
  }

  loadJobs(location, query, page){
    this.searchGithub(location, query, page)
  }

  componentDidMount(){
    this.searchGithub()
  }

  render(){
    if (this.state.jobs !== "Loading"){
      return(
        <div>
          <div className="section">
            <div className="title is-2">
              Github Jobs
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

export default GithubJobsContainer
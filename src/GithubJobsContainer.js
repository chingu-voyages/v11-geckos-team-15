import React from "react"



class JobsContainer extends React.Component {
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
      console.log(data)
      this.setState({jobs: data})
    })
  }

  loadJobs(){
    this.searchGithub()
  }

  componentDidMount(){
    this.searchGithub()
  }

  render(){
    if (this.state.jobs !== "Loading"){
      return(
        <div>
          {this.state.jobs.map(job => {
            let div = document.createElement("div")
            div.innerHTML = job.description
            let text = div.innerText
            return (
                <div key={job.id}>
                  <p>{job.title}</p>
                  <p>{text.slice(0, 200)+"..."}</p>
                  <p><a href={job.url}>Link</a></p>
                  <br />
                </div>
              )
            })
          }
        </div>
      )
    }
    return("Loading...")
  }

}

export default JobsContainer
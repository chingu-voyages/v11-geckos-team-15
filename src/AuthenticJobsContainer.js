import React from "react"



class AuthenticJobsContainer extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      jobs: "Loading",
    }
    this.loadJobs = this.loadJobs.bind(this)
    this.searchAuthentic = this.searchAuthentic.bind(this)
  }

  searchAuthentic = (location = "", query = "", page = 0) => {
    query = query.replace(/\s+/g, " ").trim().split(" ").join(",")
    let url = `https://cors-anywhere.herokuapp.com/https://authenticjobs.com/api/?api_key=d6ff48adcf9b56967e2dbdded1d460c4&method=aj.jobs.search&format=json&location=${location}&page=${page}&keywords=${query}`
    fetch(url)
    .then(result => result.json())
    .then(data => {
      data = data.listings.listing.map((item) => {
        let div = document.createElement("div")
        div.innerHTML = item.description
        let description = div.innerText
        return {
          id: item.id,
          description: description,
          title: item.title,
          url: item.url,
        }
      })
      this.setState({jobs: data}) 
    })
  }


  loadJobs(location, query, page){
    this.searchAuthentic(location, query, page)
  }

  componentDidMount(){
    this.searchAuthentic()
  }

  render(){
    if (this.state.jobs !== "Loading"){
      return(
        <div>
          <div className="section">
            <div className="title is-2">
              Authentic Jobs
            </div>
          </div>

          <div className="section">
            {this.state.jobs.map(job => {
              return (
                  <div key={job.id}>
                    <p><b>Title: </b>{job.title}</p>
                    <p><b>Description: </b>{job.description.slice(0, 200)+"..."}</p>
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

export default AuthenticJobsContainer
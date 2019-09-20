import React from "react"
import PropTypes from "prop-types"

class JobsContainer extends React.Component {

  static propTypes = {
    jobSourceString: PropTypes.string,
    jobSource: PropTypes.object,
  }

  constructor(props){
    super(props)
    this.state ={
      jobs: "Loading",
      jobSourceString: props.jobSourceString,
    }
    this.loadJobs = this.loadJobs.bind(this)
    this.searchJobs = props.jobSource.bind(this)
  }
  
  loadJobs(location, query, page){
    this.searchJobs(location, query, page)
  }


  componentDidMount(){
    this.searchJobs()
  }

  render(){
    if (this.state.jobs !== "Loading"){
      return(
        <div>
          <div className="section">
            <div className="title is-2">
              {this.state.jobSourceString}
            </div>
          </div>
          <div className="section">
            {console.log(this.state.jobs)}
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

export default JobsContainer
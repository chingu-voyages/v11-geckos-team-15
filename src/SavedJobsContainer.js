import React from "react"
import PropTypes from "prop-types"

class SavedJobsContainer extends React.Component {

  static propTypes = {
    jobSourceString: PropTypes.string,
    jobs: PropTypes.array,
    removeClickHandler: PropTypes.func,
  }
  
  render(){
        return(
          <div className="jobs">
            <div>
              <div className="title">
                {this.props.jobSourceString}
              </div>
            </div>
            <div >
              {
                this.props.jobs.map(job => {   
                  return (
                    <div className="job" key={job.id}>
                      <p><b>Title: </b>{job.title}</p>
                      <p><b>Location: </b>{job.location}</p>
                      <p><b>Description: </b>{job.description.slice(0, 100)+"..."}</p>
                      <p className="links-container"><a className="job-button" href={job.url} rel="noopener noreferrer" target="_blank">Link</a><span>  </span><a className="job-button" rel="noopener noreferrer" onClick={()=>{this.props.removeClickHandler(job)}} rel="noopener noreferrer" href="javascript:void(0)">Remove</a></p>
                      <br />
                    </div>
                  )
                })
              } 
            </div>
          </div> 
        )
  }

}

export default SavedJobsContainer
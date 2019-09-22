import React from "react"
import PropTypes from "prop-types"

class JobsContainer extends React.Component {

  static propTypes = {
    jobSourceString: PropTypes.string,
    jobs: PropTypes.array,
  }
  
  render(){
        return(
          <div>
            <div className="section">
              <div className="title is-2">
                {this.props.jobSourceString}
              </div>
            </div>
            <div className="section">
              {
                this.props.jobs.map(job => {
                  return (
                    <div key={job.id}>
                      <p><b>Title: </b>{job.title}</p>
                      <p><b>Location: </b>{job.location}</p>
                      <p><b>Description: </b>{job.description.slice(0, 100)+"..."}</p>
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

}

export default JobsContainer
import React from "react"
import PropTypes from "prop-types"

class JobsContainer extends React.Component {

  static propTypes = {
    jobSourceString: PropTypes.string,
    jobs: PropTypes.array,
    addClickHandler: PropTypes.func,
    loading: PropTypes.bool,
  }
  
  render(){
    let loadingValue = this.props.loading.toString()
    if (loadingValue === 'false'){
      loadingValue = ""
    }
    else {
      loadingValue = "Loading..."
    }
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
                      <p className="ellepsis" ><b>Description: </b>{job.description.slice(0, 100)+"..."}</p>
                      <p className="links-container"><a href={job.url} rel="noopener noreferrer" target="_blank">Link</a><span>  </span><a onClick={()=>{this.props.addClickHandler(job)}} rel="noopener noreferrer" href="javascript:void(0)" >Add</a></p>
                      <br />
                    </div>
                  )
                })
              } 
            </div>
            <div className="loading">
                {loadingValue}
              </div>
          </div> 
        )
  }

}

export default JobsContainer
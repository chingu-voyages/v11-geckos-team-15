import React from "react"
import PropTypes from "prop-types"
import "./App.sass"


class Search extends React.Component {

  static propTypes = {
    getJobs: PropTypes.func,
    getMoreJobs: PropTypes.func,
  }

  constructor(props){
    super(props)
    this.state ={
      fields: {
        keywords: "",
        location: "",
      }
    }
    this.onSearchChange = this.onSearchChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSearchChange(event){
    const fields = Object.assign({}, this.state.fields)
    fields[event.target.name] = event.target.value
    this.setState({ fields })
  }

  onSubmit(event){
    console.log("Submitted")
    this.props.getJobs(this.state.fields.location, this.state.fields.keywords)
    event.preventDefault()
  }

  render(){
    return(
      <div className="search">
        <form onSubmit={this.onSubmit}>
          <div className="container-flex search-container">
            <input 
              className="search-input"
              name="keywords"
              type="text" 
              placeholder="Keywords"
              onChange={this.onSearchChange}
            >    
            </input>
            <input 
              className="search-input"
              name="location"
              type="text" 
              placeholder="Location"
              onChange={this.onSearchChange}
            >  
            </input>
            <div className="container-flex buttons-container">
              <div type="submit" onClick={this.onSubmit} className="search-button">Submit</div>
              <div className="search-button" type="button" value="Load More" onClick={this.props.getMoreJobs}>Get More Results</div>  
            </div>
          </div>
        </form>
        <p className="main-title">Job Search Aggregator</p>
      </div>
    )
  }
}


export default Search
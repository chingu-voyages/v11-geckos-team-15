import React from "react"
import PropTypes from "prop-types"


class Search extends React.Component {

  static propTypes = {
    getJobs: PropTypes.func,
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
      <div>
        <form onSubmit={this.onSubmit}>
          <input 
            name="keywords"
            type="text" 
            placeholder="Keywords"
            onChange={this.onSearchChange}
          >    
          </input>
          <input 
            name="location"
            type="text" 
            placeholder="Location"
            onChange={this.onSearchChange}
          >  
          </input>
          <input type="submit" ></input>
        </form>
        
      </div>
    )
  }
}


export default Search
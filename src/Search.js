import React from "react"
import PropTypes from "prop-types"


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
      <div style={
        {
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100px",
          backgroundColor: "#F3F3F3",
        }
      }>
        <div style={{padding: "30px"}}>
        <form onSubmit={this.onSubmit}>
          <input 
            style={{width: "180px"}}
            className="input is-primary"
            name="keywords"
            type="text" 
            placeholder="Keywords"
            onChange={this.onSearchChange}
          >    
          </input>
          <input 
            style={{width: "180px"}}
            className="input is-primary"
            name="location"
            type="text" 
            placeholder="Location"
            onChange={this.onSearchChange}
          >  
          </input>
          <input style ={{marginLeft: "20px"}} type="submit" class="button"></input>
          <input  style ={{marginLeft: "10px"}} class="button" type="button" value="Load More" onClick={this.props.getMoreJobs}></input>
        </form>
        </div>
      </div>
    )
  }
}


export default Search
import React from "react"

class Search extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      keywords: "",
      location: "",
    }
    this.onSearchChange = this.onSearchChange.bind(this)
  }

  onSearchChange(event){
    let inputName = event.target.name
    this.setState({ inputName: event.target.value })
  }

  render(){
    return(
      <div>
        <form>
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
          <input type="submit"></input>
        </form>
        
      </div>
    )
  }
}


export default Search
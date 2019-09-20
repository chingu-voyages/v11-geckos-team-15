import React from "react"

class Search extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      fields: {
        keywords: "",
        location: "",
      }
    }
    this.onSearchChange = this.onSearchChange.bind(this)
  }

  onSearchChange(event){
    console.log(this.state.fields)
    const fields = Object.assign({}, this.state.fields)
    fields[event.target.name] = event.target.value
    this.setState({ fields })
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
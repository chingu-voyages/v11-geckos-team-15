import React from "react"
import "./App.css"
import GithubJobsContainer from "./GithubJobsContainer"
import JujuJobsContainer from "./JujuJobsContainer"
import AuthenticJobsContainer from "./AuthenticJobsContainer"



function App() {
  return (
    <div className="App">
      <div className="columns">
        <div className="column">
          <GithubJobsContainer />
        </div>  
        <div className="column">
          <JujuJobsContainer />
        </div>
        <div className="column">
          <AuthenticJobsContainer />
        </div>
      </div> 
    </div>
  );
}

export default App

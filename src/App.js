import React from "react"
import "./App.css"
import fetch from "node-fetch"

let searchResults = {}

let searchGithub = (location = "", query = "", page = 0) => {
  let url = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${query}&location=${location}&page=${page}`
  fetch(url)
  .then(result => result.json())
  .then(data => {
    searchResults.github = data
    console.log("Github jobs: " + searchResults.github.length)
  })
}

let searchAuthentic = (location = "", query = "", page = 0) => {
  query = query.replace(/\s+/g, " ").trim().split(" ").join(",")
  let url = `https://cors-anywhere.herokuapp.com/https://authenticjobs.com/api/?api_key=d6ff48adcf9b56967e2dbdded1d460c4&method=aj.jobs.search&format=json&location=${location}&page=${page}&keywords=${query}`
  fetch(url)
  .then(result => result.json())
  .then(data => {
    searchResults.authentic = data.listings.listing
    console.log("Authentic jobs: " + searchResults.authentic.length)
  })
}

let searchJuju = (location = "", query = "", page = 0) => {
  let jujuContainer = document.createElement("div")
  let url = `https://cors-anywhere.herokuapp.com/http://www.juju.com/jobs?k=${query}&l=${location}&r=20&page=${page}`
  return fetch(url)
  .then(result => result.text())
  .then(data => {
    jujuContainer.innerHTML = data
    let jobs = jujuContainer.querySelectorAll(".job")
    jobs = Array.prototype.slice.call(jobs)
    jobs = jobs.map(job => {
      return {
        url: job.querySelector(".result").href,
        title: job.querySelector(".result").innerText,
        description: job.querySelector(".description").innerText.replace(/[\.{3}]/g, "").replace(/\s\s+/g, " ").trim().replace(/more$/, ""),
      }
    })
    searchResults.juju = jobs
    console.log("Juju jobs: " + searchResults.juju.length)
  })
}

searchAuthentic("", "", 0)
searchGithub("", "", 0)
searchJuju("new york", "ruby", 0)


function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;

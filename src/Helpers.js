import fetch from "node-fetch"


let searchGithub = (location = "", query = "", page = 0) => {
  let url = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${query}&location=${location}&page=${page}`
  fetch(url)
  .then(result => result.json())
  .then(data => {
    this.setState({jobs: data})
  })
}

let searchAuthentic = (location = "", query = "", page = 0) => {
  query = query.replace(/\s+/g, " ").trim().split(" ").join(",")
  let url = `https://cors-anywhere.herokuapp.com/https://authenticjobs.com/api/?api_key=d6ff48adcf9b56967e2dbdded1d460c4&method=aj.jobs.search&format=json&location=${location}&page=${page}&keywords=${query}`
  fetch(url)
  .then(result => result.json())
  .then(data => {
    console.log("Authentic: "+ data.listings.listinglength)
    return data.listings.listing
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
    jobs = jobs.map((job, index) => {
      return {
        id: index,
        url: job.querySelector(".result").href,
        title: job.querySelector(".result").innerText,
        description: job.querySelector(".description").innerText.replace(/[\.{3}]/g, "").replace(/\s\s+/g, " ").trim().replace(/more$/, ""),
      }
    })
    console.log(jobs)
    return jobs
  })
}

export default {
  searchJuju: searchJuju,
  searchGithub: searchGithub,
  searchAuthentic: searchAuthentic,
}
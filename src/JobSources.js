import fetch from "node-fetch"


function searchGithub(location = "", query = "", page = 0) {
  this.setState({githubLoading: true})
  let url = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${query}&location=${location}&page=${page}`
  fetch(url)
    .then(result => result.json())
    .then(data => {
      let jobs = data.map((item)=> {
        let div = document.createElement("div")
        div.innerHTML = item.description
        let description = div.innerText
        return {
          title: item.title,
          location: item.location,
          url: item.url,
          description: description,
          id: item.id,
        }
      })
      this.setState({githubJobs: this.state.githubJobs.concat(jobs)})
    }).then(data =>{
      this.setState({githubLoading: false})
    })
}

function searchAuthentic (location = "", query = "", page = 0) {
  this.setState({authenticLoading: true})
  query = query.replace(/\s+/g, " ").trim().split(" ").join(",")
  let url = `https://cors-anywhere.herokuapp.com/https://authenticjobs.com/api/?api_key=d6ff48adcf9b56967e2dbdded1d460c4&method=aj.jobs.search&format=json&location=${location}&page=${page}&keywords=${query}`
  fetch(url)
    .then(result => result.json())
    .then(data => {
      let jobs = data.listings.listing.map((item) => {
        let div = document.createElement("div")
        div.innerHTML = item.description
        let description = div.innerText
        return {
          id: item.id,
          location: (item.company.location) ? item.company.location.name  : "",
          description: description,
          title: item.title,
          url: item.url,
        }
      })
      
      this.setState({authenticJobs: this.state.authenticJobs.concat(jobs)}) 
    }).then(date => {
      this.setState({authenticLoading: false})
    })
}

function searchJuju (location = "", query = "", page = 0) {
  this.setState({jujuLoading: true})
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
          id: index+job.querySelector(".result").href,
          url: job.querySelector(".result").href,
          title: job.querySelector(".result").innerText,
          location: job.querySelector(".company span").innerText.replace(/[\(\)]/g, ""),
          description: job.querySelector(".description").innerText.replace(/[\.{3}]/g, "").replace(/\s\s+/g, " ").trim().replace(/more$/, ""),
        }
      })
      this.setState({jujuJobs: this.state.jujuJobs.concat(jobs)})
    }).then(data =>{
      this.setState({jujuLoading: false})
    })
}

export default {
  searchJuju: searchJuju,
  searchGithub: searchGithub,
  searchAuthentic: searchAuthentic,
}

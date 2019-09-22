import fetch from "node-fetch"


function searchGithub(location = "", query = "", page = 0) {
  //console.log("location: "+location+ " query: " + query + " page:" + page)
  let url = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${query}&location=${location}&page=${page}`
  fetch(url)
    .then(result => result.json())
    .then(data => {
      //console.log(data)
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
    })
}

function searchAuthentic (location = "", query = "", page = 0) {
  console.log("Location: " + location + " query: " + query + " page: " + page)
  query = query.replace(/\s+/g, " ").trim().split(" ").join(",")
  let url = `https://cors-anywhere.herokuapp.com/https://authenticjobs.com/api/?api_key=d6ff48adcf9b56967e2dbdded1d460c4&method=aj.jobs.search&format=json&location=${location}&page=${page}&keywords=${query}`
  fetch(url)
    .then(result => result.json())
    .then(data => {
      //console.log(data.listings.listing)
      let jobs = data.listings.listing.map((item) => {
        let div = document.createElement("div")
        div.innerHTML = item.description
        let description = div.innerText
        //console.log((item.company.location) ? item.company.location.name  : "N/A")
        return {
          id: item.id,
          location: (item.company.location) ? item.company.location.name  : "",
          description: description,
          title: item.title,
          url: item.url,
        }
      })
      
      this.setState({authenticJobs: this.state.authenticJobs.concat(jobs)}) 
    })
}

function searchJuju (location = "", query = "", page = 0) {
  let jujuContainer = document.createElement("div")
  let url = `https://cors-anywhere.herokuapp.com/http://www.juju.com/jobs?k=${query}&l=${location}&r=20&page=${page}`
  return fetch(url)
    .then(result => result.text())
    .then(data => {
      jujuContainer.innerHTML = data
      let jobs = jujuContainer.querySelectorAll(".job")
      jobs = Array.prototype.slice.call(jobs)
      //console.log(jobs)
      jobs = jobs.map((job, index) => {
        //console.log(job.querySelector(".company span").innerText.replace(/[\(\)]/g, ""))
        return {
          id: index+job.querySelector(".result").href,
          url: job.querySelector(".result").href,
          title: job.querySelector(".result").innerText,
          location: job.querySelector(".company span").innerText.replace(/[\(\)]/g, ""),
          // eslint-disable-next-line no-useless-escape
          description: job.querySelector(".description").innerText.replace(/[\.{3}]/g, "").replace(/\s\s+/g, " ").trim().replace(/more$/, ""),
        }
      })
      this.setState({jujuJobs: this.state.jujuJobs.concat(jobs)})
    })
}

export default {
  searchJuju: searchJuju,
  searchGithub: searchGithub,
  searchAuthentic: searchAuthentic,
}

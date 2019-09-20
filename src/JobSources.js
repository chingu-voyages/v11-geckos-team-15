import fetch from "node-fetch"


function searchGithub(location = "", query = "", page = 0) {
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
          url: item.url,
          description: description,
          id: item.id,
        }
      })
      this.setState({jobs: jobs})
    })
}

function searchAuthentic (location = "", query = "", page = 0) {
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
          description: description,
          title: item.title,
          url: item.url,
        }
      })
      this.setState({jobs: jobs}) 
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
      jobs = jobs.map((job, index) => {
        return {
          id: index,
          url: job.querySelector(".result").href,
          title: job.querySelector(".result").innerText,
          // eslint-disable-next-line no-useless-escape
          description: job.querySelector(".description").innerText.replace(/[\.{3}]/g, "").replace(/\s\s+/g, " ").trim().replace(/more$/, ""),
        }
      })
      this.setState({jobs: jobs})
    })
}

export default {
  searchJuju: searchJuju,
  searchGithub: searchGithub,
  searchAuthentic: searchAuthentic,
}
(window["webpackJsonpchingu-app"]=window["webpackJsonpchingu-app"]||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){e.exports=a(18)},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(11),o=a.n(s),r=(a(17),a(2)),c=a(3),l=a(6),u=a(4),h=a(1),d=a(5),b=(a(10),function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.loading.toString();return t="false"===t?"":"Loading...",i.a.createElement("div",{className:"jobs"},i.a.createElement("div",{className:"title"},this.props.jobSourceString),i.a.createElement("div",null,this.props.jobs.map(function(t){return i.a.createElement("div",{className:"job ellipsis",key:t.id},i.a.createElement("p",null,i.a.createElement("b",null,"Title: "),t.title),i.a.createElement("p",null,i.a.createElement("b",null,"Location: "),t.location),i.a.createElement("p",null,i.a.createElement("b",null,"Description: "),t.description.slice(0,100)+"..."),i.a.createElement("p",{className:"links-container"},i.a.createElement("a",{className:"job-button",href:t.url,rel:"noopener noreferrer",target:"_blank"},"Link"),i.a.createElement("span",null,"  "),i.a.createElement("a",{className:"job-button",onClick:function(){e.props.addClickHandler(t)},rel:"noopener noreferrer",href:"javascript:void(0)"},"Add")),i.a.createElement("br",null))})),i.a.createElement("div",{className:"loading"},t))}}]),t}(i.a.Component)),m=a(8),p=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"jobs"},i.a.createElement("div",null,i.a.createElement("div",{className:"title"},this.props.jobSourceString)),i.a.createElement("div",null,this.props.jobs.map(function(t){var a;return i.a.createElement("div",{className:"job",key:t.id},i.a.createElement("p",null,i.a.createElement("b",null,"Title: "),t.title),i.a.createElement("p",null,i.a.createElement("b",null,"Location: "),t.location),i.a.createElement("p",null,i.a.createElement("b",null,"Description: "),t.description.slice(0,100)+"..."),i.a.createElement("p",{className:"links-container"},i.a.createElement("a",{className:"job-button",href:t.url,rel:"noopener noreferrer",target:"_blank"},"Link"),i.a.createElement("span",null,"  "),i.a.createElement("a",(a={className:"job-button",rel:"noopener noreferrer",onClick:function(){e.props.removeClickHandler(t)}},Object(m.a)(a,"rel","noopener noreferrer"),Object(m.a)(a,"href","javascript:void(0)"),a),"Remove")),i.a.createElement("br",null))})))}}]),t}(i.a.Component),j=a(7),v=a.n(j);var g={searchJuju:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this.setState({jujuLoading:!0});var i=document.createElement("div"),s="https://cors-anywhere.herokuapp.com/http://www.juju.com/jobs?k=".concat(a,"&l=").concat(t,"&r=20&page=").concat(n);return v()(s).then(function(e){return e.text()}).then(function(t){i.innerHTML=t;var a=i.querySelectorAll(".job");a=(a=Array.prototype.slice.call(a)).map(function(e,t){return{id:t+e.querySelector(".result").href,url:e.querySelector(".result").href,title:e.querySelector(".result").innerText,location:e.querySelector(".company span").innerText.replace(/[\(\)]/g,""),description:e.querySelector(".description").innerText.replace(/[\.{3}]/g,"").replace(/\s\s+/g," ").trim().replace(/more$/,"")}}),e.setState({jujuJobs:e.state.jujuJobs.concat(a)})}).then(function(t){e.setState({jujuLoading:!1})})},searchGithub:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this.setState({githubLoading:!0});var i="https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=".concat(a,"&location=").concat(t,"&page=").concat(n);v()(i).then(function(e){return e.json()}).then(function(t){var a=t.map(function(e){var t=document.createElement("div");t.innerHTML=e.description;var a=t.innerText;return{title:e.title,location:e.location,url:e.url,description:a,id:e.id}});e.setState({githubJobs:e.state.githubJobs.concat(a)})}).then(function(t){e.setState({githubLoading:!1})})},searchAuthentic:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this.setState({authenticLoading:!0}),a=a.replace(/\s+/g," ").trim().split(" ").join(",");var i="https://cors-anywhere.herokuapp.com/https://authenticjobs.com/api/?api_key=d6ff48adcf9b56967e2dbdded1d460c4&method=aj.jobs.search&format=json&location=".concat(t,"&page=").concat(n,"&keywords=").concat(a);v()(i).then(function(e){return e.json()}).then(function(t){var a=t.listings.listing.map(function(e){var t=document.createElement("div");t.innerHTML=e.description;var a=t.innerText;return{id:e.id,location:e.company.location?e.company.location.name:"",description:a,title:e.title,url:e.url}});e.setState({authenticJobs:e.state.authenticJobs.concat(a)})}).then(function(t){e.setState({authenticLoading:!1})})}},f=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={fields:{keywords:"",location:""}},a.onSearchChange=a.onSearchChange.bind(Object(h.a)(a)),a.onSubmit=a.onSubmit.bind(Object(h.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"onSearchChange",value:function(e){var t=Object.assign({},this.state.fields);t[e.target.name]=e.target.value,this.setState({fields:t})}},{key:"onSubmit",value:function(e){this.props.getJobs(this.state.fields.location,this.state.fields.keywords),e.preventDefault()}},{key:"render",value:function(){return i.a.createElement("div",{className:"search"},i.a.createElement("form",{className:"form",onSubmit:this.onSubmit},i.a.createElement("div",{className:"container-flex search-container"},i.a.createElement("input",{className:"search-input",name:"keywords",type:"text",placeholder:"Keywords",onChange:this.onSearchChange}),i.a.createElement("input",{className:"search-input",name:"location",type:"text",placeholder:"Location",onChange:this.onSearchChange}),i.a.createElement("div",{className:"container-flex buttons-container"},i.a.createElement("div",{type:"submit",onClick:this.onSubmit,className:"search-button"},"Submit"),i.a.createElement("div",{className:"search-button",type:"button",value:"Load More",onClick:this.props.getMoreJobs},"Get More Results")))),i.a.createElement("p",{className:"main-title"},"Job Search Aggregator"))}}]),t}(i.a.Component),S=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={githubJobs:[],jujuJobs:[],authenticJobs:[],githubLoading:!1,jujuLoading:!1,authenticLoading:!1,savedJobs:[],resultsLimit:10,githubIndex:1,jujuIndex:0,authenticIndex:1,keywords:"",location:"",searchInitiated:!1},a.getJobs=a.getJobs.bind(Object(h.a)(a)),a.getMoreJobs=a.getMoreJobs.bind(Object(h.a)(a)),a.searchGithub=g.searchGithub.bind(Object(h.a)(a)),a.searchJuju=g.searchJuju.bind(Object(h.a)(a)),a.searchAuthentic=g.searchAuthentic.bind(Object(h.a)(a)),a.addSavedJob=a.addSavedJob.bind(Object(h.a)(a)),a.removeSavedJob=a.removeSavedJob.bind(Object(h.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"getJobs",value:function(e,t){this.setState({searchInitiated:!0}),this.setState({resultsLimit:10}),this.setState({githubIndex:1}),this.setState({githubJobs:[]}),this.setState({jujuIndex:0}),this.setState({jujuJobs:[]}),this.setState({authenticJobs:[]}),this.setState({authenticIndex:1}),this.setState({keywords:t}),this.setState({location:e}),this.searchAuthentic(e,t,this.state.authenticIndex),this.searchJuju(e,t,this.state.jujuIndex),this.searchGithub(e,t,this.state.githubIndex)}},{key:"getMoreJobs",value:function(){this.state.searchInitiated&&(this.state.authenticJobs.length<this.state.resultsLimit+10&&(console.log(this.state.location),this.searchAuthentic(this.state.location,this.state.keywords,this.state.authenticIndex+1),this.setState({authenticIndex:this.state.authenticIndex+1})),this.state.jujuJobs.length<this.state.resultsLimit+10&&(this.searchJuju(this.state.location,this.state.keywords,this.state.jujuIndex+1),this.setState({jujuIndex:this.state.jujuIndex+1})),this.state.githubJobs.length<this.state.resultsLimit+10&&(this.searchGithub(this.state.location,this.state.keywords,this.state.githubIndex+1),this.setState({githubIndex:this.state.githubIndex+1})),this.setState({resultsLimit:this.state.resultsLimit+10}))}},{key:"addSavedJob",value:function(e){var t=this.state.savedJobs;t.includes(e)||t.push(e),this.setState({savedJobs:t})}},{key:"removeSavedJob",value:function(e){var t=this.state.savedJobs;t=t.filter(function(t){return e.id!==t.id}),this.setState({savedJobs:t})}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:""},i.a.createElement(f,{getJobs:this.getJobs,getMoreJobs:this.getMoreJobs})),i.a.createElement("div",{className:"main container-flex"},i.a.createElement("div",{className:"column"},i.a.createElement(b,{loading:this.state.githubLoading,addClickHandler:this.addSavedJob,jobSourceString:"GitHub Jobs",jobs:this.state.githubJobs.slice(0,this.state.resultsLimit)})),i.a.createElement("div",{className:"column"},i.a.createElement(b,{loading:this.state.authenticLoading,addClickHandler:this.addSavedJob,jobSourceString:"Authentic Jobs",jobs:this.state.authenticJobs.slice(0,this.state.resultsLimit)})),i.a.createElement("div",{className:"column"},i.a.createElement(b,{loading:this.state.jujuLoading,addClickHandler:this.addSavedJob,jobSourceString:"Juju Jobs",jobs:this.state.jujuJobs.slice(0,this.state.resultsLimit)})),i.a.createElement("div",{className:"column"},i.a.createElement(p,{removeClickHandler:this.removeSavedJob,jobSourceString:"Saved Jobs",jobs:this.state.savedJobs}))))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,1,2]]]);
//# sourceMappingURL=main.ee1bd048.chunk.js.map
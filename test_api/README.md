# Job API's

## [GitHub Jobs](https://jobs.github.com/api)

Question | Answer
--- | ---
Free/Open | Yes
HTTP | Yes
Auth | No 
Location | `Lat & Long` Number or `city` String 
Data Type | JSON or Markdown 

### Paths

- `https://jobs.github.com/positions.json?`
  - `GET` `/positions.json`: Returns a list of jobs matching the search criteria in the parameters,
- `https://jobs.github.com/positions/<ID>.json`
  - `GET` `/positions/ID.json`: Returns the information from the requested job by ID.

#### Data Format

```
[
  {
    "id": "66746c7b-7200-4b7b-825c-4f06d80032cf",
    "type": "Full Time",
    "url": "https://jobs.github.com/positions/66746c7b-7200-4b7b-825c-4f06d80032cf",
    "created_at": "Mon Sep 02 16:30:14 UTC 2019",
    "company": "NinthDecimal",
    "company_url": null,
    "location": "Mountain View, CA, US",
    "title": "Platform Engineer",
    "description": "<p>About NinthDecimal:</p>\n<p>NinthDecimal is the omni-channel marketing platform powered by location...",
    "how_to_apply": "<p><a href=\"https://jsco.re/332a6\">https://jsco.re/332a6</a></p>\n",
    "company_logo": null
  },
  ...
]
```

#### Parameters

- `description` — A search term, such as "ruby" or "java". This parameter is aliased to search.
- `location` — A city name, zip code, or other location search term.
- `lat` — A specific latitude. If used, you must also send long and must not send location.
- `long` — A specific longitude. If used, you must also send lat and must not send location.
- `full_time` — If you want to limit results to full time positions set this parameter to 'true'.

#### Example URLS

- `/positions.json?`
  - `https://jobs.github.com/positions.json?description=python&full_time=true&location=sf`
  - `https://jobs.github.com/positions.json?description=javascript&lat=37.3229978&long=-122.0321823`
  - `https://jobs.github.com/positions.json?description=rust&full_time=true`
- `/positions/<ID>.json`
  - `https://jobs.github.com/positions/17a8d28b-c9c0-4b5a-a0bb-4c75e4a41982.json`


### Notes

- How do we search for remove?
- `description` and `how_to_apply` are HTML DOM objects as strings
- `full_time` only works for True?



## [Indeed](https://opensource.indeedeng.io/api-documentation/): **Awaiting response/Key**

Question | Answer
--- | ---
Free/Open | Yes (free publisher account), Currently requesting a key for this project
HTTP | Yes
Auth | No 
Location | `Lat & Long` Number or `city` String 
Data Type | JSON or Markdown 


https://opensource.indeedeng.io/api-documentation/docs/supported-countries/


### [Authentic Jobs](https://authenticjobs.com/api/doc)

Question | Answer
--- | ---
Free/Open | Yes, key upon signup (with restrictions and rules)
HTTP | Yes
Auth | Yes 
Location | Text matching as String OR key match from route (see `aj.jobs.getLocations`)
Data Type | XML (default), JSON or PHP


### Endpoints

`https://authenticjobs.com/api/?api_key=<API KEY>`

Endpoints are controlled by the `category` parameter:

#### Data Endpoints

- Job Search: `aj.jobs.search`,
- Job Listing: `aj.jobs.get` (Only takes in an ID paramter),
- Company Listing: `aj.jobs.getCompanies`

#### Type Endpoints

- Job Types: `aj.types.getList`,
- Locations: `aj.jobs.getLocations`,
- Job Categories: `aj.categories.getList`

From Job Search
```
{
  "listings": {
    "listing": [
      {
        "id": "31607",
        "title": ".NET Developer",
        "description": "<p><p class=\"MsoNormal\" style=\"margin-bottom: .0001pt; line-height: normal; background: white;\"><span style=\"font-size: 12.0pt; font-family: 'Arial',sans-serif; mso-fareast-font-family: 'Times New Roman'; color: #666666;\">This is a full-time position that performs advanced professional information system tasks, under general supervision of the Manager of Web Operations. Duties include: system analysis and design functions and advanced programming tasks, as well as consulting with, assisting, and instructing functional users in the use of Information System applications...",
        "post_date": "2019-09-10 13:49:57",
        "relocation_assistance": 0,
        "telecommuting": 0,
        "category": {
          "id": "2",
          "name": "Back-end Engineering"
        },
        "type": {
          "id": "1",
          "name": "Full-time"
        },
        "company": {
          "id": "universityofwisconsinwhitewater",
          "name": "University of Wisconsin Whitewater",
          "url": "http://www.uww.edu/",
          "type": null,
          "location": {
              "id": "whitewaterwi",
              "name": "Whitewater, WI"
          },
          "logo": "https://d2fcz5no062gar.cloudfront.net/assets/images/defaults/company-blank.png",
          "tagline": "Inspire. Engage. Transform."
        },
        "keywords": "design,system,...",
        "apply_url": "https://www.uww.edu/employment/academic-staff-non-instructional",
        "url": "https://authenticjobs.com/jobs/31607/net-developer"
      },
      ...
    ],
    "total": 22,
    "perpage": 10,
    "page": 1,
    "pages": 3,
    "last_update": "2019-09-10T16:52:29-05:00"
  },
  "stat": "ok"
}
```

### Parameters

#### Generic

- `category` The id of a job category to limit to. See aj.categories.getList
- `type` The id of a job type to limit to. See aj.types.getList
- `sort` Accepted values are: date-posted-desc (the default) and date-posted-asc
- `company` Free-text matching against company names. Suggested values are the ids from aj.jobs.getCompanies
- `location` Free-text matching against company location names. Suggested values are the ids from aj.jobs.getLocation
- `telecommuting` Set to 1 if you only want telecommuting jobs
- `keywords` Keywords to look for in the title or description of the job posting. Separate multiple keywords with commas. Multiple keywords will be treated as an OR
- `begin_date` Unix timestamp. Listings posted before this time will not be returned
- `end_date` Unix timestamp. Listings posted after this time will not be returned
- `format`: Return format for the request. Put `json`.

#### Specific listings

- `page` The page of listings to return. Defaults to 1.
- `perpage` The number of listings per page. The default value is 10. The maximum value is 100.

### Notes

- Easy accessible Key (sign up and receive key),
- Well designed API (provides location and categories key search data routes),
- Global?


## [Careerjet](https://www.careerjet.com/partners/api/)

Currently supports:

- Java
- Perl
- PHP
- Python
- .NET 2.0
- Ruby
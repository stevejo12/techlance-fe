import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../../assets/data.json";
import { skillsFilterList } from "../../constants/filter";

import { FilterList } from "../../types/filter.type";

import "./Search.scss";

interface jobList {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}

const updateJobListBasedOnFilter = (
  filter: FilterList,
  jobLists: jobList[]
): jobList[] => {
  if (filter.skills.length <= 0) {
    return jobLists;
  }

  // filtering job based on language list
  const filteredJobList = jobLists.filter((job) => {
    // checking job.languages with the checked filter skills list
    const isExist = job.languages.some((language) =>
      filter.skills.includes(language.toLowerCase())
    );

    // should at least satisfy one of the languages ticked
    if (isExist) {
      return true;
    }

    return false;
  });

  return filteredJobList;
};

const Search = () => {
  const [jobLists, setJobLists] = useState<jobList[]>([]);
  const [filteredJobList, setFilteredJobList] = useState<jobList[]>([]);
  const [filterList, setFilterList] = useState<FilterList>({
    skills: []
  });

  useEffect(() => {
    if (jobLists.length > 0) {
      const jobList = updateJobListBasedOnFilter(filterList, jobLists);

      setFilteredJobList(jobList);
    }
  }, [filterList, jobLists]);

  const updateFilterCheckbox = (
    key: string,
    value: string,
    checked: boolean
  ) => {
    const filter = JSON.parse(JSON.stringify(filterList));

    if (checked) {
      if (Array.isArray(filter[key])) {
        filter[key].push(value);
      }
    } else {
      if (Array.isArray(filter[key])) {
        filter[key] = filter[key].filter((e: string) => e !== value);
      }
    }

    setFilterList(filter);
  };

  useEffect(() => {
    setJobLists(data);
    setFilteredJobList(data);

    // const regex = /\d[y|m|d]/;
    // const regex2 = /\d[d]/;
    // const regex3 = /\d[w]/;
    // const regex4 = /\d[y]/;
  }, []);

  return (
    <div className="search-container">
      <div className="search-filter">
        <span className="search-filter-header default-headerStyle">
          Filter By:
        </span>
        <hr />
        <div className="search-filter-section">
          <span className="search-filter-section-header default-headerStyle">
            Skills
          </span>
          <ul className="search-filter-section-options">
            {skillsFilterList.map((skill, key) => (
              <li key={key} className="search-filter-section-options-list">
                <input
                  type="checkbox"
                  name={skill.name}
                  value={skill.value}
                  onChange={(e) =>
                    updateFilterCheckbox(
                      "skills",
                      e.target.value,
                      e.target.checked
                    )
                  }
                  checked={filterList.skills.includes(skill.name)}
                />
                <label htmlFor={skill.name}>{skill.tag}</label>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="search-result">
        {filteredJobList.map((jobList, key) => (
          <div
            className={`search__jobList ${jobList.featured ? "highlight" : ""}`}
            key={key}
          >
            <div className="search__jobList-logo">
              <img src={jobList.logo} alt="company-logo" />
            </div>
            <div className="search__jobList-description">
              <div className="search__jobList-description-job">
                <span className="search__jobList-description-job-companyName">
                  {jobList.company}
                </span>
                {jobList.new && (
                  <span className="search__jobList-description-job-new">
                    NEW!
                  </span>
                )}
                {jobList.featured && (
                  <span className="search__jobList-description-job-featured">
                    FEATURED
                  </span>
                )}
              </div>
              <div className="search__jobList-description-position">
                {jobList.position}
              </div>
              <div className="search__jobList-description-listingDetail">
                {jobList.postedAt}
                {" \u2022 "}
                {jobList.contract}
                {" \u2022 "}
                {jobList.location}
              </div>
            </div>
            <div className="search__jobList-tag">
              <span className="search__jobList-tag-textContainer">
                {jobList.role}
              </span>
              <span className="search__jobList-tag-textContainer">
                {jobList.level}
              </span>
              {jobList.languages.map((language, key) => (
                <span key={key} className="search__jobList-tag-textContainer">
                  {language}
                </span>
              ))}
            </div>
          </div>
        ))}
        <Link to="/">Back to home</Link>
      </div>
    </div>
  );
};

export default Search;

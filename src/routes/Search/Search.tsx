import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../../assets/data.json";

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

const Search = () => {
  const [jobLists, setJobLists] = useState<jobList[]>([]);

  useEffect(() => {
    setJobLists(data);
  }, []);

  return (
    <div className="search">
      {jobLists.map((jobList, key) => (
        <div 
          className={`search__jobList ${jobList.featured ? "highlight" : ""}`} key={key}
        >
          <div className="search__jobList-logo">
            <img src={`${jobList.logo.replace("./", "")}`} alt="company-logo" />
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
  );
};

export default Search;

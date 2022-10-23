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
      {jobLists.map((jobList) => (
        <div className="search__jobList">{jobList.company}</div>
      ))}
      <Link to="/">Back to home</Link>
    </div>
  );
};

export default Search;

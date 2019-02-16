import * as React from 'react';
import { JobPagetTitleProps } from 'src/Models';

const JobsPageTitle = (props: JobPagetTitleProps) => {
  const headerText = () => {
    if(props.isSearching) return 'Searching...';
    if(props.hasJobs) return `${props.searchResultsCount} Jobs Found`;
    return "We're sorry but we found no results for your search.";
  }
  
  return (
    <div className={ !props.hasJobs ? 'jobs-header-wrapper no-results' : 'jobs-header-wrapper' }>
      <div className='latest'>{props.hasJobs ? 'Latest' : ''}</div>
      <h2 className='header-text' id='jobs'>
        {headerText()}
      </h2>
    </div>
  );
}

export default JobsPageTitle;
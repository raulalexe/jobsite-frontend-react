import * as React from 'react';
import { JobPagetTitleProps } from 'src/Models';

const JobsPageTitle = (props: JobPagetTitleProps) => {
  const headerText = () => {
    if(!props.hasFinishedSearching) return 'Searching...';
    if(props.hasJobs) return 'Jobs Found';
    return "We're sorry but we found no results for your search.";
  }
  
  return (
    <div className={ !props.hasJobs ? 'jobs-header-wrapper no-results' : 'jobs-header-wrapper' }>
      { props.hasJobs && <div className='latest'>Latest</div> }
      <h2 className='header-text'>
        {headerText()}
      </h2>
    </div>
  );
}

export default JobsPageTitle;
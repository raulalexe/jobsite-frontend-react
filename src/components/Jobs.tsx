import * as React from 'react';
import './Jobs.css';
import JobItem from './JobItem';
import { CircularProgress } from '@material-ui/core';
import { JobsProps } from 'src/Models';
import JobsPageTitle from './JobsPageTitle';
import ConditionalDisplay from './ConditionalDisplay';


const Jobs = (props: JobsProps) => {
  const hasJobs = props.jobsList && props.jobsList.length > 0;

  return (
    <div className='jobs-content-wrapper'>
      <JobsPageTitle hasJobs={hasJobs} hasFinishedSearching={props.jobsList ? true : false} />
      {
        hasJobs
        ?  props.jobsList.map((job: any) => {
          return <JobItem key={job._id} id={job._id} title={job.title} company={job.company} location={job.location} type={job.type}></JobItem>
        })
        : <ConditionalDisplay showCondition={!props.jobsList}>
            <div className='progress-spinner-wrapper'><CircularProgress className='progress-spinner'/></div>
          </ConditionalDisplay>
      }
    </div>
  );
}

export default Jobs;
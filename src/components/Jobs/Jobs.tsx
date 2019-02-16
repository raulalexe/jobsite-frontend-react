import * as React from 'react';
import './Jobs.css';
import JobItem from '../JobItem/JobItem';
import { CircularProgress } from '@material-ui/core';
import { JobsProps } from 'src/Models';
import JobsPageTitle from '../JobsPageTitle';
import ConditionalDisplay from '../ConditionalDisplay';
import Pagination from 'material-ui-flat-pagination';
import { DEFAULT_NUMBER_OR_SEARCH_RESULTS } from '../../Models';
import { scrollToHeaderTitle } from '../../utils';

const Jobs = (props: JobsProps) => {
  const hasJobs = props.jobsList && props.jobsList.length > 0 && !props.isSearching;
  const doChangePage = (offset: number) => {
    props.changePageFunc(offset); 
  }
  const scrollRef: any = React.createRef();

  return (
    <div className='jobs-content-wrapper' ref={scrollRef}>
      <JobsPageTitle hasJobs={hasJobs} isSearching={props.isSearching} searchResultsCount={props.searchResultsCount}/>
      {
        hasJobs
        ?  
        <div>
          <Pagination
            limit={DEFAULT_NUMBER_OR_SEARCH_RESULTS}
            offset={props.offset}
            total={props.searchResultsCount}
            onClick={(e, offset) => {doChangePage(offset)}}
            className='pagination'
            currentPageColor='primary'
            otherPageColor='secondary'
            size='large'
            reduced={true}
          />
          {
            props.jobsList.map((job: any) => {
              return <JobItem key={job._id} id={job._id} title={job.title} company={job.company} location={job.location} type={job.type}></JobItem>
            })
          }
          <Pagination
            limit={DEFAULT_NUMBER_OR_SEARCH_RESULTS}
            offset={props.offset}
            total={props.searchResultsCount}
            onClick={(e, offset) => {
              scrollToHeaderTitle();
              doChangePage(offset);
            }}
            className='pagination'
            currentPageColor='primary'
            otherPageColor='secondary'
            size='large'
            reduced={true}
          />
        </div>
        : <ConditionalDisplay showCondition={props.isSearching} className='fixed-height'>
            <div className='progress-spinner-wrapper'><CircularProgress className='progress-spinner' color='secondary'/></div>
          </ConditionalDisplay>
      }
    </div>
  );
}

export default Jobs;
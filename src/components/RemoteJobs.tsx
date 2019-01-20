import Jobs from './Jobs';
import * as React from 'react';
import { RemoteJobsProps } from '../Models';
import { useEffect } from 'react';

const RemoteJobs = (props: RemoteJobsProps) => {

  useEffect(() => {
    props.searchFunc('','Remote', '');
  }, []);

  return (
    <Jobs jobsList={props.jobsList}></Jobs>
  )
}

export default RemoteJobs;
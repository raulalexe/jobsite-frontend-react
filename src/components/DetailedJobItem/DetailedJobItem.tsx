import * as React from 'react';
import { Chip, CircularProgress, Button } from '@material-ui/core';
import { LocationOn, CalendarToday, Link as LinkIcon } from '@material-ui/icons';
import { useState, useEffect } from 'react';
import { DetailedJobItemModel } from '../../Models';
import { API_URL } from 'src/Models';
import './DetailedJobItem.css';
import { Link } from 'react-router-dom';
import { scrollToHeaderTitle } from 'src/utils';

const DetailedJobItem = (props: any) => {
  const [job, setJob] = useState({} as DetailedJobItemModel);

  useEffect(() => {
    (async () => {
      const resp = await fetch(`${API_URL}/job/${props.match.params.jobId}`);
      const jobData = await resp.json();
      setJob(jobData);
      scrollToHeaderTitle();
    })();
  }, [job.id]);

  return (
    <div className='job-page-wrapper' id='job-detailed-item'>
      { job.id
        ? (
          <div className='job-page'>
            <div className='job-header'>
              <h2 className='title'>{job.title}</h2>
            </div>

            <div className="job-meta">
              <div className="left">
                <h4 className="company grey emphasized">Company:</h4>
                <h4 className="company-name emphasized">{job.company}</h4>
              </div>

              <div className="right">
                { job.location 
                  ? <div className="job-location"><LocationOn />{job.location}</div>
                  : ''
                }
                <div className="job-date">
                  <CalendarToday /> <span>{new Date(job.postDate).toDateString()}</span>
                </div>  
                <div className="job-source">
                  <a href={job.url}>
                    <LinkIcon /><span className='blue'>{job.source}</span>
                  </a>
                </div>        
                <Chip label={job.type} className='type-label'/>
              </div>
            </div>

            <div className="job-description" dangerouslySetInnerHTML={{__html: job.description}}></div>

            <div className="buttons">
              <a href={job.url} target="blank">
                <Button variant="contained" color="secondary">
                  Apply
                </Button>
              </a>
              <Link to='/'>
                <Button variant="outlined" color="default">
                  Back to search
                </Button>
              </Link>
            </div>
          </div>
        ) : <div className='progress-spinner-wrapper'><CircularProgress className='progress-spinner'/></div>
      }
    </div>
  )
}

export default DetailedJobItem;
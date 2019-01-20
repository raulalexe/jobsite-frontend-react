import * as React from 'react';
import { Link } from 'react-router-dom';
import './JobItem.css';
import { LocationOn } from '@material-ui/icons';
import { Chip } from '@material-ui/core';
import { JobItemProps } from 'src/Models';


const JobItem = (props: JobItemProps) => {
  return(
    <Link className='job-item' to={`/jobs/${props.id}`}>
      <div className='left'>
        <h4 className="job-title">{props.title}</h4>
        <h5 className="job-company">{props.company}</h5>
      </div>
      <div className="right"> 
        <div className="job-location">
          { props.location 
            ? <span>
                <LocationOn />{props.location}
              </span>
            : <span>&nbsp;</span> 
          }
        </div>

        <Chip label={props.type} className='type-label'/>
      </div>
    </Link>
  );
}

export default JobItem;
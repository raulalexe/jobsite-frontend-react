import * as React from 'react';
import { ConditionalDisplayProps } from 'src/Models';

const ConditionalDisplay = (props: ConditionalDisplayProps) => {
  return (
    props.showCondition 
      ? <div className={props.className ? props.className : ''}>{props.children}</div>
      : null
  );
}

export default ConditionalDisplay;
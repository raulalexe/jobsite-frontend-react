import * as React from 'react';
import { ConditionalDisplayProps } from 'src/Models';

const ConditionalDisplay = (props: ConditionalDisplayProps) => {
  return (
    props.showCondition 
      ? <div>{props.children}</div>
      : null
  );
}

export default ConditionalDisplay;
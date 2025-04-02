import PropTypes from 'prop-types';
import * as motion from 'motion/react-client';

export function ConcordanceLine( { data, offset } ) {
  const pivot = Math.floor(data.length/2);

  const center = data[ pivot ];
  const left = data.slice( 0, pivot ).join(' ');
  const right = data.slice( -pivot ).join(' ');

  return <motion.div
            className="grid grid-cols-3 gap-1 w-full"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.4,
                delay: offset * 0.1,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}>
      <div key='pre'    className="text-right">{left}</div>
      <div key='center' className="text-center bg-yellow-800">{center}</div>
      <div key='post'   className="text-left">{right}</div>
    </motion.div>;
}

ConcordanceLine.propsTypes = {
  data: PropTypes.array,
  offset: PropTypes.number
};

ConcordanceLine.defaultProps = {
  data: [],
  offset: 0
};

export function ConcordanceList( { data, max } ) {
  const renderable = data.slice(0,max).map( (v,i) => <ConcordanceLine key={i} offset={i} data={v} /> );
  return <div className="grid grid-cols-1">{renderable}</div>;
}

ConcordanceList.propTypes = {
  data: PropTypes.array,
  max: PropTypes.number
};

ConcordanceList.defaultProps = {
  data: [],
  max: Infinity
};
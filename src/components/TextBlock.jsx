import PropTypes from 'prop-types';
import * as motion from 'motion/react-client';

export function TextBlock( {data, attrib, isQuote} ) {
  const attribution = (!attrib?"":<div className="text-right text-sm">{attrib}</div>)

  let extraClasses = "";
  if( isQuote )
    extraClasses += "italic";

  const _words = data.split(" ").map( (word, index) => <motion.span
    key={index}
    className={`p-0 m-0 ${extraClasses}`}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.4,
      delay: index * 0.05,
      scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
    }}>{word} </motion.span> );

  return <div className="border-l-8 border-l-green-500 italic pl-5 m-5 pl-auto pr-auto">
    {_words}
    {attribution}
  </div>;
}

TextBlock.propTypes = {
  data: PropTypes.string,
  attrib: PropTypes.string,
  isQuote: PropTypes.bool
};

TextBlock.defaultProps = {
  data: "No Text...",
  attrib: null,
  isQuote: false
};
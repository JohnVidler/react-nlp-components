import PropTypes from 'prop-types';
import * as motion from 'motion/react-client';

export function ValueToken({ text, value, index }) {
    if( value > 1 )
        value = 1;
    if( value < 0 )
        value = 0;
    return <motion.div
        className="p-0 grid columns-1 text-center"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
            duration: 0.4,
            delay: index * 0.05,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}>
        <Token text={text} />
        <div className="" style={{height: "1rem", overflow: "hidden"}}>
            <div className="border-t-white align-baseline bg-gray-500 relative text-xs" style={{borderTopWidth: '1px', top: `${value}rem`, height: '2rem'}}></div>
            <div className='relative text-xs text-transparent hover:text-white' style={{top: "-2rem"}}>{value.toFixed(2)}</div>
        </div>
    </motion.div>;
}
ValueToken.propTypes = {
    text: PropTypes.string,
    value: PropTypes.number,
    index: PropTypes.number
};

ValueToken.defaultProps = {
    text: "NOTXT",
    value: 0.5,
    index: 0
};
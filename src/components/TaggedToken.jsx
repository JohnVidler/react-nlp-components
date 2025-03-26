import PropTypes from 'prop-types';
import { Token } from './Tokens/Token';

export function TaggedToken({ text, tag, color, inline, index }) {
    if( inline ) {
        return <div className="p-0 flex flex-row text-center rounded-md" style={{backgroundColor: color}}>
            <Token text={text} />
            <div className='inline-block p-2'>{tag}</div>
        </div>;
    }

    return <div className="p-0 grid columns-1 text-center">
        <Token text={text} />
        <div className='rounded-md text-sm p-0 m-0 border-l-2 border-r-2' style={{
            height: "1rem",
            lineHeight: "1rem",
            borderColor: color,
            overflow: "hidden"
        }}>{tag}</div>
    </div>
}

TaggedToken.propTypes = {
    text: PropTypes.string,
    tag: PropTypes.string,
    color: PropTypes.string,
    inline: PropTypes.bool,
    index: PropTypes.number
};

TaggedToken.defaultProps = {
    text: "NOTXT",
    tag: "NOTAG",
    color: "#FF0000",
    inline: false,
    index: 0
};

import PropTypes from 'prop-types';

export function Token( { text } ) {
    return <div className="p-0 pr-1">{text}</div>
}

Token.propTypes = {
    text: PropTypes.string
};

Token.defaultProps = {
    text: "NOTXT"
};
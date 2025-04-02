import PropTypes from 'prop-types';
import { Token } from './Token';
import { ValueToken } from './ValueToken';
import { TaggedToken } from './TaggedToken';

export function AnnotatedParagraph({ data, inline }) {

    const mappedData = data.map( (token) => { 
        return {
            "text": token,
            "type": "value",
            "value": 0.5-Math.random()
        };
    } )
    .map( (token, index) => {
        if( typeof(token) === "object" ) {
            switch( token.type ){
                case "value":
                    return <ValueToken key={index} text={token.text} value={token.value} index={index} />;
                case "tag":
                    return <TaggedToken key={index} text={token.text} tag={token.tag} color={token.color} inline={inline} index={index} />;
                default:
                    return <div>BADTYPE: {token.type}</div>
            }
        }
        return <Token key={index} text={token} />;
    });
    
    return <div className="flex flex-row flex-wrap justify-start w-fill">{mappedData}</div>;
}

AnnotatedParagraph.propTypes = {
    data: PropTypes.array,
    inline: PropTypes.bool
}

AnnotatedParagraph.defaultProps = {
    data: [],
    inline: false
}
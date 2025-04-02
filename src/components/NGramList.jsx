import * as motion from 'motion/react-client';

export function NGram( props ) {
  const data = props.data || [];
  const offset = props.offset || 0;

  const renderable = data.map( (v,i) => <div className="join-item border border-white p-2 badge-outline">{v}</div> )

  return <motion.div
          className="join mr-1"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
              duration: 0.4,
              delay: offset * 0.05,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}>
            {renderable}
          </motion.div>;
}

export function NGramList( props ) {
  const max = props.max || null;
  let data = props.data || [];

  if( max )
    data = data.slice( 0, max );

  const renderable = data.map( (v,i) => <NGram key={i} offset={i} data={v} /> );

  return (<div className="flex flex-col place-items-center items-center w-auto h-auto bg-darken p-3 flex-shrink">
    <div className="flex flex-row flex-wrap gap-3 place-items-center">{renderable}</div>
  </div>)
}
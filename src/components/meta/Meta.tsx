
export type MetaProps = {
    app: string,
    cdn: string,
    framework: string,
    shared?: string[],
    dispatch?: string[],
    listen?: string[]
}

export const Meta = ({ app, cdn, framework, shared = ['N/A'], dispatch = ['N/A'], listen = ['N/A'] }: MetaProps) => {
    return (
      <section id="xray" className="py-8">
        <ul className="code flex flex-col flex-start text-left leading-8 text-white">
          <li>APP: <span className="tag">{app}</span></li>
          <li>CDN_LOCATION: <span className="tag">{cdn}</span></li>
          <li>FRAMEWORK: <span className="tag">{framework}</span></li>
          <li>SHARED_RESOURCES: {shared.map(val => <span className="tag">{val}</span>)}</li>
          <li>EVENTS:DISPATCHED = {dispatch.map(val => <span className="tag">{val}</span>)}</li>
          <li>EVENTS:SUBSCRIBED = {listen.map(val => <span className="tag mfe-blue">{val}</span>)}</li>
        </ul>
      </section>
    )
} 

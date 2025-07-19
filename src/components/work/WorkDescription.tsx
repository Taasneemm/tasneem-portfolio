interface Props {
    roles: string[];
    timeline: string[];
    frontend?: string[];
    backend?: string[];
  }
  
  export default function WorkDescription({
    roles,
    timeline,
    frontend,
    backend,
  }: Props) {
    return (
      <div className="grid grid-cols-2 gap-8 md:flex md:flex-row justify-center md:justify-between md:gap-24">
        {/* Role */}
        <div className="flex flex-col gap-2 max-md:w-[148px]">
          <p className="label text-neutral-600 dark:text-neutral-400">ROLE</p>
          <div>
            {roles.map((text, idx) => (
              <p
                key={idx}
                className="b1 font-medium text-neutral-900 dark:text-neutral-100"
              >
                {text}
              </p>
            ))}
          </div>
        </div>
  
        {/* Timeline */}
        <div className="flex flex-col gap-2 max-md:w-[148px]">
          <p className="label text-neutral-600 dark:text-neutral-400">TIMELINE</p>
          <div>
            {timeline.map((text, idx) => (
              <p
                key={idx}
                className="b1 font-medium text-neutral-900 dark:text-neutral-100"
              >
                {text}
              </p>
            ))}
          </div>
        </div>
  
        {/* Frontend */}
        {frontend && (
          <div className="flex flex-col gap-2 max-md:w-[148px]">
          <p className="label text-neutral-600 dark:text-neutral-400">FRONTEND</p>
          <div>
            {frontend.map((text, idx) => (
              <p
                key={idx}
                className="b1 font-medium text-neutral-900 dark:text-neutral-100"
              >
                {text}
              </p>
            ))}
          </div>
          </div>
        )}
        
  
        {/* Backend */}
        {backend && ( 
          <div className="flex flex-col gap-2 max-md:w-[148px]">
          <p className="label text-neutral-600 dark:text-neutral-400">BACKEND</p>
          <div>
            {backend.map((text, idx) => (
              <p
                key={idx}
                className="b1 font-medium text-neutral-900 dark:text-neutral-100"
              >
                {text}
              </p>
            ))}
          </div>
          </div>
        )}
      </div>
    );
  }
  
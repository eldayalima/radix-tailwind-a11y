import React from 'react';
import * as Progress from '@radix-ui/react-progress';

export default function CoProgressBar({progressNumber=66}) {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(progressNumber), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Progress.Root
      className="relative overflow-hidden bg-[#F5F7FA] rounded-full w-9/12 h-[8px] content-center"
      style={{
        // Fix overflow clipping in Safari
        // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
        transform: 'translateZ(0)',
      }}
      value={progress}
      aria-valuetext={`${progressNumber}% 6 hours remaining`}
      aria-label='work progress'
    >
      <Progress.Indicator
        className="bg-[#DA8678] w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
    </Progress.Root>
  );
}


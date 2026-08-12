import { useInView } from 'react-intersection-observer';

export function useScrollAnimation(options = {}) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    ...options,
  });

  return {
    ref,
    className: inView ? 'animate-visible' : '',
    inView,
  };
}

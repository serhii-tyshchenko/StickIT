import { useState, useCallback } from 'react';

const useToggle = (initialValue = false) => {
  const [state, setState] = useState(initialValue);

  const toggle = useCallback(() => setState((current) => !current), [setState]);

  return [state, toggle];
};

export default useToggle;

import { useContext, useMemo } from 'react';
import { Store } from 'store';

import dictionary from 'localization';

const useLocalization = () => {
  const { language } = useContext(Store);

  return useMemo(() => dictionary[language], [language]);
};

export default useLocalization;

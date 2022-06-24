import { FC } from 'react';
import Error from './components/Error';
import Loading from './components/Loading';
import NoDataView from './components/NoDataView';

import { AsyncArrayWrapperTypes } from './types/AsyncArrayWrapperTypes';

export const AsyncArrayWrapper: FC<AsyncArrayWrapperTypes> = ({
  loadingView = Loading,
  errorView = Error,
  noDataView = NoDataView,
  children,
  result,
}) => {
  const { isLoading, isError, dataArray } = result;

  if (isLoading) {
    return <>{loadingView}</>;
  }

  if (isError) {
    return <>{errorView}</>;
  }

  if (!dataArray || dataArray.length === 0) {
    return <>{noDataView}</>;
  } else {
    return <>{children(dataArray)}</>;
  }
};

import { ReactNode } from 'react';
import { DataArrayTypes } from './DataArrayTypes';

export type AsyncArrayWrapperTypes = {
  children(dataArray: []): ReactNode;
  result: DataArrayTypes;
  loadingView?: ReactNode;
  errorView?: ReactNode;
  noDataView?: ReactNode;
};

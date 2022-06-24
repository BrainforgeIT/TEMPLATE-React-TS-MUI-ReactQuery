import axios from 'axios';
import { useQuery } from 'react-query';
import { DataArrayTypes } from '../../../features/AsyncArrayWrapper/types/DataArrayTypes';

export const useCourses = (): DataArrayTypes => {
  const { isLoading, isError, data } = useQuery('courses', () =>
    // TODO: change the dummy url
    axios.get('https://jsonplaceholder.typicode.com/posts'),
  );

  return { isLoading, isError, dataArray: data?.data };
};

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchPost = (postId) => {
  return axios.get(`http://localhost:3004/posts`);
};

export const usePostQuery = (postId) => {
  return useQuery({
    queryKey: ['posts', postId],
    queryFn: () => fetchPost(postId),
    retry: 1,
    // staleTime: 5000,
    select: (data) => {
      return data.data;
    },
    // enabled: false,
    // gcTime: 5000,
    // refetchInterval: 3000,
    // refetchOnMount: false,
    // refetchOnWindowFocus: true,
  });
};

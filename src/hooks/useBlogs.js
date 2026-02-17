// src/hooks/useBlogs.js
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchBlogs = async () => {
  const { data } = await axios.get(`${import.meta.env.VITE_ADMINACC_BLOGS_URL}/api/blogs`);
  return data;
};

export const useBlogs = () => {
  return useQuery({
    queryKey: ['blogs'],
    queryFn: fetchBlogs,
    staleTime: 1000 * 60 * 5, // 5 minutes
    cacheTime: 1000 * 60 * 10, // 10 minutes
    retry: 2,
    refetchOnWindowFocus: false,
  });
};

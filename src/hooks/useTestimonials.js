import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchTestimonials = async () => {
  const { data } = await axios.get(
    `${import.meta.env.VITE_ADMINACC_TESTIMONIAL_URL}/api/testimonials`
  );
  return data;
};

export const useTestimonials = () => {
  return useQuery({
    queryKey: ['testimonials'],
    queryFn: fetchTestimonials,
    staleTime: 1000 * 60 * 5, // 5 minutes
    cacheTime: 1000 * 60 * 10, // 10 minutes
    retry: 2,
    refetchOnWindowFocus: false,
  });
};

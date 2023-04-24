import useSwr from 'swr'
import fetcher from '@/lib/fetcher';
const useFavorite= () => {
    const { data, error, isLoading } = useSwr('/api/favorites', fetcher, { 
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
     });
    return {
      data,
      error,
      isLoading
    }
  };
  
  export default useFavorite;
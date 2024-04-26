import axios from 'axios';
import './App.css';
import { usePostQuery } from './hooks/usePosts';
import { useQueries } from '@tanstack/react-query';
function App() {
  // const { isLoading, data, isError, error, refetch } = usePostQuery(1);

  // if (isLoading) {
  //   return <h1>Loading...</h1>;
  // }
  // if (isError) {
  //   return <h1>{error.message}</h1>;
  // }

  const ids = [1, 2];
  const fetchPostDetail = (id) => {
    return axios.get(`http://localhost:3004/posts/${id}`);
  };

  const results = useQueries({
    queries: ids.map((id) => {
      return {
        queryKey: ['posts', id],
        queryFn: () => fetchPostDetail(id),
      };
    }),
    combine: (results) => {
      return {
        data: results.map((result) => result.data),
      };
    },
  });

  console.log('rrrr', results);

  return (
    <>
      {/* <div className=''>
        {data?.map((item) => (
          <div key={item.id}>{item.title}</div>
        ))}
        <button onClick={refetch}>버튼</button>
      </div> */}
    </>
  );
}

export default App;

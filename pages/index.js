import Image from 'next/image'
import { useEffect, useState } from 'react';
import DocsLayout from '../layouts/DocsLayout';
import homeService from '../services/homeService';
function Home() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  const _getHome = async () => {
    setLoading(true)
    try {
      const resp = await homeService.getHome();
      setData(resp.data.articles)
    } catch (error) {
      console.log(error);
    }
    setLoading(false)
  }

  useEffect(() => {
    _getHome()
  }, [])

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {(data || []).map((item) =>
        <>
          <h6 className='font-bold'>title:</h6>
          <div>
            {item.title}
          </div>
        </>
      )
      }
    </>
  );
}

// Home.Layout = DocsLayout;
export default Home

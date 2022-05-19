import { useState, useEffect } from "react"

export default function CustomHook() {
  const [loading, response] = useFetch('https://api.github.com/users/maateusilva')

  if (loading) {
    return <h1>Loading...</h1>
  }


  return (
    <div>
      {JSON.stringify(response)}
    </div>
  )
}

function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    (async () => {
      const resp = await fetch(url);
      const json = await resp.json();
      setLoading(false);
      setResponse(json)
    })()
  }, [url]);

  return [loading, response]
}
export const headers = {
  Authorization: `Bearer ${process.env.API_KEY}`,
}
export async function getMovies() {
  const res = await fetch(`${process.env.API_URL}/movie`, {
    cache: 'no-store',
    headers: headers
  });

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  const data = await res.json();
  console.log(data)
  return data.docs;
}
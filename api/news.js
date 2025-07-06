export default async function handler(req, res) {
  const { category = 'general', page = 1, pageSize = 9 } = req.query;
  const apiKey = process.env.NEWS_API_KEY; // your env variable on server

  if (!apiKey) {
    return res.status(500).json({ error: "API key missing" });
  }

  const url = `https://newsapi.org/v2/top-headlines?category=${category}&page=${page}&pageSize=${pageSize}&apiKey=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

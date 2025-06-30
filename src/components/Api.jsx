import React, { useState, useEffect } from "react";
import Card from "./Card";
import Button from "./Button";

const ApiExample = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?q=${search}&_page=${page}&_limit=10`
        );
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [page, search]);

  return (
    <Card className="space-y-4">
      <h2 className="text-xl font-bold">Posts from API</h2>
      
      <div className="flex space-x-2">
        <input
          type="text"
          placeholder="Search posts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-grow p-2 border rounded"
        />
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <ul className="space-y-2">
        {posts.map((post) => (
          <li key={post.id} className="p-2 border rounded">
            <h3 className="font-bold">{post.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{post.body}</p>
          </li>
        ))}
      </ul>

      <div className="flex justify-between">
        <Button
          disabled={page === 1}
          onClick={() => setPage((prev) => Math.max(1, prev - 1))}
        >
          Previous
        </Button>
        <span>Page {page}</span>
        <Button onClick={() => setPage((prev) => prev + 1)}>Next</Button>
      </div>
    </Card>
  );
};

export default ApiExample;
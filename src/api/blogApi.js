export const getAllBlogs = async () => {
  const res = await fetch(`${import.meta.env.VITE_APP_API_BASE_URL}/blogs`);
  return res.json();
};

export const createBlog = async (data) => {
  const res = await fetch(`${import.meta.env.VITE_APP_API_BASE_URL}/blogs`, {
    method: 'POST',
    body: data
  });
  return res.json();
};

export const deleteBlog = async (id) => {
  const res = await fetch(`${import.meta.env.VITE_APP_API_BASE_URL}/blogs/${id}`, {
    method: 'DELETE'
  });
  return res.json();
};

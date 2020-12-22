export default function fetchImages(query, page) {
  const baseURL =
    "https://pixabay.com/api/?image_type=photo&orientation=horizontal";
  const key = "18918317-3c4f84cb36b89de6c3fd9619e";
  return fetch(
    `${baseURL}&q=${query}&page=${page}&per_page=12&key=${key}`
  ).then((response) => response.json());
}

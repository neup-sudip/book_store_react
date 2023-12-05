import { getApi } from "../utils/axios";

export const getBooks = async (query, page) => {
  return getApi(`/books?query=${query}&page=${page}`)
    .then((res) => res?.data)
    .catch(() => null);
};

export const getSingleBook = async (slug) => {
  return getApi(`/books/${slug}`)
    .then((res) => res?.data)
    .catch(() => null);
};

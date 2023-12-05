import { useQuery } from "@tanstack/react-query";
import { getBooks } from "../../apis/queryApi";
import { Link, useSearchParams } from "react-router-dom";

export const QueryBookList = () => {
  const [searchQuery, setSearchQuery] = useSearchParams();

  const { data, error, isPending } = useQuery({
    queryKey: [`bookspage`, { id: searchQuery.get("page") || 1 }],
    queryFn: () => getBooks("", searchQuery.get("page") || 1),
  });

  // call this from anywhere with key to refetch
  // queryClient.refetchQueries({ queryKey: ["bookspage", { id: "2" }] });

  if (error) {
    console.log(error);
    return <h1>Error .......</h1>;
  }

  if (isPending) {
    return <h1>Loading ........</h1>;
  }

  return (
    <div>
      {data?.data?.books?.map((book, idx) => (
        <h1 key={idx}>{book?.title}</h1>
      ))}

      <Link to="/testbook?page=1" className="btn btn-primary">
        1
      </Link>

      <Link to="/testbook?page=2" className="btn btn-primary">
        2
      </Link>
    </div>
  );
};

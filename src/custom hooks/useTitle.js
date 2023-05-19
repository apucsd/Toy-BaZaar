import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Toy BaZaar | ${title}`;
  }, [title]);
};
export default useTitle;

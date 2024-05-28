import Pagination from "./components/Pagination";

export default function Home() {
  return <Pagination itemCount={20} pageSize={10} currentPage={1} />;
}

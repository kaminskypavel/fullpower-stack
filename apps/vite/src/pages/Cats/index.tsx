import { trpc } from "../../services/trpc";

function CatImage() {
  const { data } = trpc.cat.useQuery({ text: "hello" });
  if (!data) return <div>Loading...</div>;
  const { url } = data ?? {};
  return (
    <div className="flex flex-col items-center justify-center">
      <small>
        {JSON.stringify(data)} {url}
      </small>
      <img src={`https://cataas.com/${url}`} />
    </div>
  );
}

export default CatImage;

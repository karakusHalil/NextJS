export default async function CatchAllPage({
  params,
}: {
  params: Promise<{ page: string[] }>;
}) {
  const { page } = await params;
  const AllCatchPage = page ?? [];
  return (
    <div className="bg-blue-200 p-4">
      Segments: {AllCatchPage.join(" / ")}
    </div>
  );
}

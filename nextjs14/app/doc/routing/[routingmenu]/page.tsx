export default async function RoutingMenu({
  params,
}: {
  params: Promise<{ routingmenu: string }>;
}) {
  const { routingmenu } = await params;
  return (
    <>
      <div className="bg-green-200">Routing Menu Page : {routingmenu}</div>
    </>
  );
}

export default function productLayoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  function getRandomInt(count: number) {
    return Math.floor(Math.random() * count);
  }

  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error("errrrrrrrrrrrrrrrrrrr  loading products ");
  }
  

  return (
    <>
      {children}
      <h2>Features Products</h2>
    </>
  );
}

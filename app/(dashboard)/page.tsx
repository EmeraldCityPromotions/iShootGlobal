import Image from "next/image";

export default async function HomePage() {
  return (
    <main className="flex flex-1 flex-col gap-4 bg-zinc-950 p-4 text-lg">
      <h1 className="font-bold text-4xl text-gray-300">October Contest</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 30 }).map((_, idx) => (
          <div
            key={idx}
            className="relative aspect-square animate-in transition-transform duration-300 hover:scale-105"
          >
            <Image
              src={`https://picsum.photos/id/${idx}/420`}
              alt={`Contest entry ${idx}`}
              className="rounded-lg"
              height={420}
              width={420}
            />
          </div>
        ))}
      </div>
    </main>
  );
}

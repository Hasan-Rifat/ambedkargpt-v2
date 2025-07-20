import Sidebar from "./_components/SideBar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-[#F2F6FF]">
      <div className="flex gap-4">
        <Sidebar />
        <div className=" p-4">{children}</div>
      </div>
    </main>
  );
}

import AdminNav from "@/components/admin/AdminNav";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex">
      <AdminNav />
      <section className="flex-1 p-6 md:p-10">{children}</section>
    </main>
  );
}

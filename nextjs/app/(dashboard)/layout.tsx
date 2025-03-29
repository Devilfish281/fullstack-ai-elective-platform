export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* Include shared UI here e.g. a header or sidebar */}
      {/* TODO: Add a sidebar to the left*/}

      {children}
    </div>
  );
}

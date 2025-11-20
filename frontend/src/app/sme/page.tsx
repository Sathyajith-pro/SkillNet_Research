import DashboardLayout from "@/components/DashboardLayout";

export default function SmeDashboard() {
  return (
    <DashboardLayout
      title="SME Dashboard"
      panelName="My Projects"
      info={{
        Name: "Acme SME",
        Email: "contact@acme.com",
        Sector: "Tech Consulting",
        "Active Projects": 2,
      }}
      formFields={[
        { name: "name", label: "Project Name" },
        { name: "skills", label: "Required Skills" },
        { name: "deadline", label: "Deadline", type: "date" },
      ]}
    />
  );
}

import DashboardLayout from "@/components/DashboardLayout";

export default function CompanyDashboard() {
  return (
    <DashboardLayout
      title="Company Dashboard"
      panelName="Jobs"
      info={{
        Name: "TechCorp Ltd.",
        Email: "hr@techcorp.com",
        Industry: "Software",
        "Open Positions": 3,
      }}
      formFields={[
        { name: "name", label: "Job Name" },
        { name: "skills", label: "Required Skills" },
        { name: "expLevel", label: "Experience Level" },
      ]}
    />
  );
}

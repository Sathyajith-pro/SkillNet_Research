"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  Button,
  Avatar,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import Link from "next/link";

export default function StudentProfilePage() {
  const [studentInfo, setStudentInfo] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    major: "Computer Science",
    year: "3rd Year",
    avatar: "https://i.pravatar.cc/150?img=3",
  });
  const [openEdit, setOpenEdit] = useState(false);

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold">Profile</h1>
          <Link href="/student">
            <a className="text-blue-600 hover:underline">← Back to Dashboard</a>
          </Link>
        </div>
        <Card>
          <CardContent className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <Avatar src={studentInfo.avatar} sx={{ width: 80, height: 80 }} />
              <div>
                <Typography variant="h5">{studentInfo.name}</Typography>
                <Typography variant="body1">{studentInfo.email}</Typography>
                <Typography variant="body2">
                  {studentInfo.major} - {studentInfo.year}
                </Typography>
              </div>
            </div>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setOpenEdit(true)}
            >
              Edit Profile
            </Button>
          </CardContent>
        </Card>

        <Dialog open={openEdit} onClose={() => setOpenEdit(false)}>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogContent className="space-y-4">
            <TextField
              label="Name"
              fullWidth
              value={studentInfo.name}
              onChange={(e) =>
                setStudentInfo({ ...studentInfo, name: e.target.value })
              }
            />
            <TextField
              label="Email"
              fullWidth
              value={studentInfo.email}
              onChange={(e) =>
                setStudentInfo({ ...studentInfo, email: e.target.value })
              }
            />
            <TextField
              label="Major"
              fullWidth
              value={studentInfo.major}
              onChange={(e) =>
                setStudentInfo({ ...studentInfo, major: e.target.value })
              }
            />
            <TextField
              label="Year"
              fullWidth
              value={studentInfo.year}
              onChange={(e) =>
                setStudentInfo({ ...studentInfo, year: e.target.value })
              }
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenEdit(false)}>Cancel</Button>
            <Button variant="contained" onClick={() => setOpenEdit(false)}>
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </main>
  );
}

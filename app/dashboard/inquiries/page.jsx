"use client";

import { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc, query, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MessageSquare, Trash2, Loader2, Mail, Phone, Building, Calendar } from "lucide-react";
import { Label } from "@/components/ui/label";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function InquiriesPage() {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [deleteDialog, setDeleteDialog] = useState({ open: false, id: null });

  useEffect(() => {
    fetchInquiries();
  }, []);

  const fetchInquiries = async () => {
    try {
      const q = query(collection(db, "inquiries"), orderBy("createdAt", "desc"));
      const snapshot = await getDocs(q);
      const inquiriesData = snapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
          createdAt: data.createdAt?.toDate?.() || new Date(),
        };
      });
      setInquiries(inquiriesData);
    } catch (error) {
      console.error("Error fetching inquiries:", error);
      toast.error("Failed to fetch inquiries");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, "inquiries", deleteDialog.id));
      toast.success("Inquiry deleted successfully");
      setDeleteDialog({ open: false, id: null });
      fetchInquiries();
    } catch (error) {
      console.error("Error deleting inquiry:", error);
      toast.error("Failed to delete inquiry");
    }
  };

  const formatDate = (date) => {
    if (!date) return "N/A";
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  if (loading) {
    return (
      <div className="p-6 lg:p-8 flex items-center justify-center min-h-[400px]">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="p-6 lg:p-8 space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent flex items-center gap-3">
          <MessageSquare className="w-8 h-8 text-primary" />
          Inquiries Management
        </h1>
        <p className="text-foreground/60">View and manage customer inquiries</p>
      </div>

      {/* Inquiries Table */}
      <Card className="border-border/50 bg-background/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>All Inquiries</CardTitle>
          <CardDescription>{inquiries.length} inquiries found</CardDescription>
        </CardHeader>
        <CardContent>
          {inquiries.length === 0 ? (
            <div className="text-center py-12 text-foreground/60">
              <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>No inquiries found.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Service</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {inquiries.map((inquiry) => (
                    <TableRow key={inquiry.id}>
                      <TableCell className="font-medium">{inquiry.name || "N/A"}</TableCell>
                      <TableCell>
                        <a
                          href={`mailto:${inquiry.email}`}
                          className="text-primary hover:underline"
                        >
                          {inquiry.email || "N/A"}
                        </a>
                      </TableCell>
                      <TableCell>
                        <span className="text-sm text-foreground/70">
                          {inquiry.service || "N/A"}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2 text-sm text-foreground/70">
                          <Calendar className="w-4 h-4" />
                          {formatDate(inquiry.createdAt)}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => setSelectedInquiry(inquiry)}
                              >
                                View Details
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[600px]">
                              <DialogHeader>
                                <DialogTitle>Inquiry Details</DialogTitle>
                                <DialogDescription>
                                  Full information about this inquiry
                                </DialogDescription>
                              </DialogHeader>
                              {selectedInquiry && (
                                <div className="space-y-4">
                                  <div className="grid grid-cols-2 gap-4">
                                    <div>
                                      <Label className="text-xs text-foreground/60">Name</Label>
                                      <p className="font-medium">{selectedInquiry.name || "N/A"}</p>
                                    </div>
                                    <div>
                                      <Label className="text-xs text-foreground/60">Email</Label>
                                      <a
                                        href={`mailto:${selectedInquiry.email}`}
                                        className="text-primary hover:underline block"
                                      >
                                        {selectedInquiry.email || "N/A"}
                                      </a>
                                    </div>
                                  </div>
                                  <div className="grid grid-cols-2 gap-4">
                                    <div>
                                      <Label className="text-xs text-foreground/60">Phone</Label>
                                      <a
                                        href={`tel:${selectedInquiry.phone}`}
                                        className="text-primary hover:underline block"
                                      >
                                        {selectedInquiry.phone || "N/A"}
                                      </a>
                                    </div>
                                    <div>
                                      <Label className="text-xs text-foreground/60">Company</Label>
                                      <p className="font-medium">
                                        {selectedInquiry.company || "N/A"}
                                      </p>
                                    </div>
                                  </div>
                                  <div className="grid grid-cols-2 gap-4">
                                    <div>
                                      <Label className="text-xs text-foreground/60">Service</Label>
                                      <p className="font-medium">
                                        {selectedInquiry.service || "N/A"}
                                      </p>
                                    </div>
                                    <div>
                                      <Label className="text-xs text-foreground/60">Budget</Label>
                                      <p className="font-medium">
                                        {selectedInquiry.budget || "N/A"}
                                      </p>
                                    </div>
                                  </div>
                                  <div>
                                    <Label className="text-xs text-foreground/60">Message</Label>
                                    <p className="mt-1 text-sm bg-muted/50 p-3 rounded-lg">
                                      {selectedInquiry.message || "No message"}
                                    </p>
                                  </div>
                                  <div>
                                    <Label className="text-xs text-foreground/60">Date</Label>
                                    <p className="font-medium">
                                      {formatDate(selectedInquiry.createdAt)}
                                    </p>
                                  </div>
                                </div>
                              )}
                            </DialogContent>
                          </Dialog>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => setDeleteDialog({ open: true, id: inquiry.id })}
                            className="hover:bg-red-500/10 hover:border-red-500/50 hover:text-red-500"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteDialog.open} onOpenChange={(open) => setDeleteDialog({ open, id: null })}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the inquiry.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-red-500 hover:bg-red-600"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}


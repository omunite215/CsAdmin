import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Pencil, Trash } from "lucide-react";
import { Button } from "../ui/button";
const TableComponent = () => {
  return (
    <Table>
      <TableCaption>A list of Invites Sent to New Account Users.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>First Name</TableHead>
          <TableHead>Last Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Update</TableHead>
          <TableHead>Delete</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">James</TableCell>
          <TableCell>Bond</TableCell>
          <TableCell>james.bond@gmail.com</TableCell>
          <TableCell>
            <Button size="icon" variant="outline">
              <Pencil />
            </Button>
          </TableCell>
          <TableCell>
            <Button size="icon" variant="destructive">
              <Trash />
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default TableComponent;

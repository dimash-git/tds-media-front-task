import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Input } from "./ui/input";

export const TableRowSkeleton = () => {
  return (
    <TableRow className="animate-pulse">
      {Array.from({ length: 6 }).map((item, idx) => (
        <TableCell key={idx}>
          <div className="h-6 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </TableCell>
      ))}
    </TableRow>
  );
};

export const TableSkeleton = () => {
  return (
    <>
      <div className="grid grid-cols-4 items-center py-2 gap-4">
        <Input placeholder="Filter names..." className="max-w-sm" />
        <Input placeholder="Filter emails..." className="max-w-sm" />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="px-4">Entry</TableHead>
            <TableHead className="px-4">Name</TableHead>
            <TableHead className="px-4">Email</TableHead>
            <TableHead className="px-4">Phone</TableHead>
            <TableHead className="px-4">Gender</TableHead>
            <TableHead className="px-4">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRowSkeleton />
          <TableRowSkeleton />
          <TableRowSkeleton />
        </TableBody>
      </Table>
    </>
  );
};

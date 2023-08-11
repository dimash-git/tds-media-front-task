"use client";

import { Button } from "@/components/ui/button";

import Link from "next/link";
import React, { useEffect } from "react";
import DataTable from "./data-table";
import { columns } from "./columns";

import useContactsStore from "@/store/contactsStore";
import useHasHydrated from "@/hooks/useHasHydrated";
import { TableSkeleton } from "@/components/table-skeleton";

const Index = () => {
  const hasHydrated = useHasHydrated();
  const [contacts, getContacts] = useContactsStore((state) => [
    state.contacts,
    state.getContacts,
  ]);
  useEffect(() => {
    getContacts();
  }, [getContacts]);
  return (
    <div className="mt-8">
      <Link href="/new-contact">
        <Button>Add contact</Button>
      </Link>
      <div className="mt-8">
        {hasHydrated ? (
          <DataTable columns={columns} data={contacts} />
        ) : (
          <TableSkeleton />
        )}
      </div>
    </div>
  );
};

export default Index;

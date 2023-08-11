"use client";

import axios from "axios";
import { useEffect, useState } from "react";

const useContacts = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setIsLoading] = useState<boolean>(true);

  const fetchContacts = async () => {
    try {
      const { data } = await axios.get("/api/contacts");
      setContacts(data.contacts);
    } catch (error) {
      throw new Error(`${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  const refreshContacts = async () => {
    await fetchContacts();
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return { contacts, refreshContacts, loading };
};

export default useContacts;

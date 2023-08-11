import axios from "axios";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface ContactsState {
  contacts: Contact[];
  getContacts: () => void;
  deleteContact: ($id: string) => Promise<boolean | undefined>;
}

const useContactsStore = create<ContactsState>()(
  persist(
    (set) => ({
      contacts: [],
      getContacts: async () => {
        try {
          const { data } = await axios.get("/api/contacts");
          const { contacts } = data;
          set({ contacts });
        } catch (error) {
          console.error("Error getting contacts:", error);
        }
      },
      deleteContact: async ($id: string) => {
        try {
          const response = await axios.post("/api/del-contact", {
            $id,
          });
          if (response.status === 200) {
            set((state) => ({
              contacts: state.contacts.filter((contact) => contact.$id !== $id),
            }));
            return true;
          }
        } catch (error) {
          console.error("Error deleting contact:", error);
        }
      },
    }),
    {
      name: "contacts-storage", // name of the item in the storage
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

export default useContactsStore;

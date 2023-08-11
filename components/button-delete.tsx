import axios from "axios";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";
import useContactsStore from "@/store/contactsStore";

const ButtonDelete = function ButtonDelete({ $id }: { $id: string }) {
  const { toast } = useToast();
  const [deleteContact] = useContactsStore((state) => [state.deleteContact]);

  const onDelete = async ($id: string) => {
    const isDeleted = await deleteContact($id);
    console.log(isDeleted);
    if (!isDeleted) {
      toast({
        title: "Error",
        description: "Something went wrong while deleting. Please try again",
        variant: "destructive",
      });
    }
    toast({
      title: "Success",
      description: "Contact was successfully deleted!",
      variant: "success",
    });
  };
  return (
    <Button onClick={() => onDelete($id)} variant="destructive">
      Delete
    </Button>
  );
};

export default ButtonDelete;

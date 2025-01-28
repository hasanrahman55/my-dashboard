import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";

import CreateProduct from "./create-product";
import { DialogClose } from "@radix-ui/react-dialog";

function AddButton() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button>Add Product</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create product</DialogTitle>
        </DialogHeader>

        <CreateProduct />

        <DialogFooter>
          <DialogClose asChild>
            <Button type="submit">Save </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default AddButton;

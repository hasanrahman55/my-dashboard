"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";

import CreateProduct from "./create-product";

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
      </DialogContent>
    </Dialog>
  );
}

export default AddButton;

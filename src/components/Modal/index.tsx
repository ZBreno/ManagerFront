"use client";
import { Button, Modal } from "@mui/material";
import { useState } from "react";

interface ModalFormProps {
  hide: boolean;
  children?: React.ReactNode;
}

export default function ModalForm({ hide, children }: ModalFormProps) {
  const [open, setOpen] = useState(hide);

  return (
    <Modal open={open} onClose={() => setOpen(!open)} aria-labelledby="title">
      <div className="bg-white w-[400px] -translate-x-1/2 -translate-y-2/4 absolute top-[50%] left-[50%] p-4">
        <h2 id="title">Text in a child modal</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <Button onClick={() => setOpen(!open)}>Close Child Modal</Button>
      </div>
    </Modal>
  );
}

import {
  AlertDialog,
  AlertDialogContent,
} from "@/app/_components/ui/alert-dialog";
import { useState } from "react";

interface Props {
  open: boolean;
  setOpen: Function;
}
export function UserType({ open, setOpen }: Props) {
  const [type, setType] = useState<"USER" | "BARBER">("USER");

  return (
    <AlertDialog open={open} onOpenChange={() => setOpen(!open)}>
      <AlertDialogContent className="w-fit flex flex-col items-center rounded-lg">
        <div className="text-center py-2">
          <p className="font-medium">Definir Usuário</p>
          <span className="text-sm text-gray text-nowrap">
            Defina seu tipo de Usuário
          </span>
        </div>

        <div className="flex items-center justify-center gap-2 w-full">
          <div className="flex items-center gap-8 text-gray">
            <button
              onClick={() => setType("USER")}
              className={`${
                type == "USER" && "text-white border-b"
              } hover:text-white border-orange hover:border-b transition-all duration-300 p-1`}
            >
              Sou cliente
            </button>
            <button
              onClick={() => setType("BARBER")}
              className={`${
                type == "BARBER" && "text-white border-b"
              } hover:text-white border-orange hover:border-b transition-all duration-300 p-1`}
            >
              Sou cabeleireiro
            </button>
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}

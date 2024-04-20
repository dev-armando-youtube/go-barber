import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
} from "@/app/_components/ui/alert-dialog";
import { CheckCircle } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

interface Props {
  open: boolean;
  setOpen: Function;
}
export function ReservationConfirm({ open, setOpen }: Props) {
  const navigate = useRouter();
  return (
    <AlertDialog open={open} onOpenChange={() => setOpen(!open)}>
      <AlertDialogContent className="w-fit flex flex-col items-center rounded-lg">
        <CheckCircle className="text-done" size={60} weight="fill" />
        <div className="text-center py-2">
          <p className="font-medium">Agendamento Efetuado!</p>
          <span className="text-sm text-gray text-nowrap">
            Sua reserva foi agendada com sucesso.
          </span>
        </div>
        <AlertDialogAction
          onClick={() => navigate.push("/home")}
          className="bg-done hover:bg-done/80 w-full"
        >
          Fechar
        </AlertDialogAction>
      </AlertDialogContent>
    </AlertDialog>
  );
}

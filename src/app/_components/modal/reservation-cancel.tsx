import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
} from "@/app/_components/ui/alert-dialog";

interface Props {
  open: boolean;
  setOpen: Function;
}
export function ReservationCancel({ open, setOpen }: Props) {
  return (
    <AlertDialog open={open} onOpenChange={() => setOpen(!open)}>
      <AlertDialogContent className="w-fit flex flex-col items-center rounded-lg">
        <div className="text-center py-2">
          <p className="font-medium">Cancelar agendamento</p>
          <span className="text-sm text-gray text-nowrap">
            Deseja mesmo cancelar o agendamento?
          </span>
        </div>

        <div className="flex items-center justify-center gap-2 w-full">
          <AlertDialogCancel className="bg-black-medium hover:bg-black-medium/80 hover:text-white w-full m-0 border-0">
            Cancelar
          </AlertDialogCancel>

          <AlertDialogAction className="bg-error hover:bg-error/80 w-full">
            Confirmar
          </AlertDialogAction>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}

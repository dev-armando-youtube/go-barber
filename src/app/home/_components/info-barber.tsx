import { X } from "@phosphor-icons/react";
import Select from "react-select";
import { Formik, Form, Field, FieldProps } from "formik";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
} from "@/app/_components/ui/drawer";
import { Button } from "@/app/_components/ui/button";
import { Api } from "@/api";

interface Props {
  openInfoBarber: boolean;
  setOpenInfoBarber: (value: boolean) => void;
}
export function InfoBarber({ openInfoBarber, setOpenInfoBarber }: Props) {
  const options = [
    { value: "barba", label: "Barba" },
    { value: "cabelo", label: "Cabelo" },
  ];

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      backgroundColor: "#232129",
      height: "48px",
      borderRadius: "0.5rem",
      borderColor: "transparent",
    }),
    menu: (provided: any) => ({
      ...provided,
      backgroundColor: "#232129",
      color: "gray",
    }),
    multiValue: (provided: any) => ({
      ...provided,
      backgroundColor: "#232129",
    }),
    multiValueLabel: (provided: any) => ({
      ...provided,
      color: "#fff",
    }),
  };

  const initialValues = {
    services: [],
    days: "",
    hours: "",
  };

  const handleSubmit = async (values: any) => {
    await Api.post("/barbers/edit", values);
    console.log("Valores submetidos:", values);
  };

  return (
    <Drawer open={openInfoBarber} onOpenChange={setOpenInfoBarber}>
      <DrawerContent>
        <header className="p-5 flex items-center justify-between">
          <span className="font-bold text-lg">Informações da Reserva</span>
          <DrawerClose className="bg-transparent shadow-none hover:bg-transparent p-2">
            <X size={20} />
          </DrawerClose>
        </header>

        <div className="w-full h-[1px] bg-black-medium" />

        <section className="p-5">
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {({ setFieldValue }) => (
              <Form className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <span className="text-white">Serviços</span>
                  <Field name="services">
                    {({ field }: FieldProps) => (
                      <Select
                        {...field}
                        options={options}
                        styles={customStyles}
                        classNamePrefix="react-select"
                        placeholder="Barba, Cabelo..."
                        isMulti
                        onChange={(selectedOption) =>
                          setFieldValue("services", selectedOption)
                        }
                      />
                    )}
                  </Field>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-white">Dias de atendimento</span>
                  <Field
                    name="days"
                    type="text"
                    className="bg-inputs h-12 px-4 text-gray rounded-lg"
                    placeholder="Segunda à Sexta"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-white">Horários de atendimento</span>
                  <Field
                    name="hours"
                    type="text"
                    className="bg-inputs h-12 px-4 text-gray rounded-lg"
                    placeholder="08:00 às 18:00"
                  />
                </div>

                <div className="pt-5">
                  <Button
                    type="submit"
                    className="bg-done hover:bg-done/80 h-9 w-full rounded-lg hover:opacity-80 transition-all duration-300"
                  >
                    Atualizar
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </section>
      </DrawerContent>
    </Drawer>
  );
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Phone, Mail } from "lucide-react";
import Button from "./Button";
import Input from "./Input";

export function AccountTabs() {
  return (
    <Tabs defaultValue="phone
    " className="w-full">
      <TabsList variant="line" className="w-full">
        <TabsTrigger value="phone" className="flex items-center gap-2 w-full">
          <Phone /> <span>Celular</span>
        </TabsTrigger>
        <TabsTrigger value="email" className="flex items-center gap-2">
          <Mail /> <span>Email</span>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="phone">
        <form className="flex flex-col items-center justify-center gap-2 py-10">
          <h2 className="text-lg font-semibold text-indigo-800">Escribe tu Celular</h2>
          <p className=" text-sm font-light text-neutral-700 text-pretty text-center mb-5">Solo validaremos tus datos por motivos de seguridad</p>
          {/* Input Group */}
          <Input icon="phone" placeholder="Ingresa tu número de celular" variant="number" />
          <div className="mt-4 w-full sm:w-1/2 flex">
            <Button>Continuar</Button>
          </div>
        </form>
      </TabsContent>
      <TabsContent value="email">
        <form className="flex flex-col items-center justify-center gap-2 py-10">
          <h2 className="text-lg font-semibold text-indigo-800">Escribe tu Email</h2>
          <p className=" text-sm font-light text-neutral-700 text-pretty text-center mb-5">Solo validaremos tus datos por motivos de seguridad</p>
          {/* Input Group */}
          <Input isInvalid={true} icon="email" placeholder="Ingresa tu dirección de email" variant="email" />
          {/* Buton continuar */}
          <div className="mt-4 w-full sm:w-1/2">
            <Button>Continuar</Button>
          </div>
        </form>
      </TabsContent>
    </Tabs>
  )
}
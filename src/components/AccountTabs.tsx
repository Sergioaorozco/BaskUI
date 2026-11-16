import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Phone, Mail } from "lucide-react";
import Button from "./Button";
import Input from "./Input";
import React from "react";
import { useNavigate } from "react-router-dom";

export function AccountTabs() {
  const navigate = useNavigate();
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phoneError, setPhoneError] = React.useState(false);
  const [emailError, setEmailError] = React.useState(false);

  function submitEmail(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) {
      setEmailError(true);
      return;
    }

    setEmailError(false);
    // Success then navigate to OTP page
    navigate("/account/verify", { state: { email } });
  }

  function submitPhone(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // TODO: Prepare only numbers for payload
    const phoneValue = phone.replace(/\D/g, "");
    if (!phoneValue.trim() || phoneValue.length < 10) {
      setPhoneError(true);
      return;
    }

    setPhoneError(false);
        // Success then navigate to OTP page
    navigate("/account/verify", { state: { phone } });
  }

  return (
    <Tabs defaultValue="phone" className="w-full">
      <TabsList variant="line" className="w-full">
        <TabsTrigger value="phone" className="flex items-center gap-2 w-full">
          <Phone /> <span>Celular</span>
        </TabsTrigger>
        <TabsTrigger value="email" className="flex items-center gap-2">
          <Mail /> <span>Email</span>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="phone">
        <form onSubmit={submitPhone} className="flex flex-col items-center justify-center gap-2 py-10">
          <h2 className="text-lg font-semibold text-indigo-800">Escribe tu Celular</h2>
          <p className=" text-sm font-light text-neutral-700 text-pretty text-center mb-5">Solo validaremos tus datos por motivos de seguridad</p>
          {/* Input Group */}
          <Input
            value={phone}
            onChange={(event) => {
              setPhone(event.target.value);
              if (phoneError) setPhoneError(false);
            }}
            onInvalid={() => setPhoneError(true)}
            isInvalid={phoneError}
            placeholder="Ingresa tu número de celular"
            variant="tel"
          />
          <div className="mt-4 w-full sm:w-1/2 flex justify-center">
            <Button type="submit">Continuar</Button>
          </div>
        </form>
      </TabsContent>
      <TabsContent value="email">
        <form onSubmit={submitEmail} className="flex flex-col items-center justify-center gap-2 py-10">
          <h2 className="text-lg font-semibold text-indigo-800">Escribe tu Email</h2>
          <p className=" text-sm font-light text-neutral-700 text-pretty text-center mb-5">Solo validaremos tus datos por motivos de seguridad</p>
          {/* Input Group */}
          <Input
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              if (emailError) setEmailError(false);
            }}
            onInvalid={() => setEmailError(true)}
            isInvalid={emailError}
            placeholder="Ingresa tu dirección de email"
            variant="email"
          />
          {/* Buton continuar */}
          <div className="mt-4 w-full sm:w-1/2 flex justify-center">
            <Button type="submit">Continuar</Button>
          </div>
        </form>
      </TabsContent>
    </Tabs>
  );
}
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"

import { useNavigate } from "react-router-dom";
import { REGEXP_ONLY_DIGITS } from "input-otp"
import Button from "./Button"
import { ShieldKeyholeIcon, RefreshCwIcon } from 'lucide-react';
import React from "react";

export default function OTP() {
  const navigate = useNavigate();
  const [ OTPValue, setOTPValue ] = React.useState("");
  const [ OTPInvalid, setOTPInvalid ] = React.useState(false);

  function onSubmitOTP(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if(!OTPValue) {
      setOTPInvalid(true)
      return;
    }

    if(OTPValue !== '450056') {
      setOTPInvalid(true)
      return;
    }

    navigate('/account/validate')

  }

  return (
    <main className="dom-wrapper mx-auto px-5">
      <ShieldKeyholeIcon className={`mx-auto my-5 ${OTPInvalid ? "text-red-600" : "text-indigo-800"}`} size={200} strokeWidth={1} />
      <form action="" onSubmit={onSubmitOTP} className="flex flex-col w-full items-center gap-4">
        <div className="">
          <InputOTP
            maxLength={6}
            pattern={REGEXP_ONLY_DIGITS}
            onChange={(value) => {
              setOTPValue(value)
              if(OTPInvalid) setOTPInvalid(false)
            }}
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} aria-invalid={OTPInvalid} />
              <InputOTPSlot index={1} aria-invalid={OTPInvalid} />
              <InputOTPSlot index={2} aria-invalid={OTPInvalid} />
              <InputOTPSlot index={3} aria-invalid={OTPInvalid} />
              <InputOTPSlot index={4} aria-invalid={OTPInvalid} />
              <InputOTPSlot index={5} aria-invalid={OTPInvalid} />
            </InputOTPGroup>
          </InputOTP>
        </div>
        <article className="w-full sm:w-1/2 flex flex-col gap-2 items-center">
            {OTPInvalid && (
              <p className="text-red-700 text-sm">Código OTP incorrecto, </p>
            )}
          <p className="text-sm text-indigo-900 text-center mb-6">Recibirás un código de 6 dígitos, a través de tu correo o celular.</p>
          <Button variant="link">
            <div className="flex items-center gap-2 justify-center">
              <RefreshCwIcon className="size-4" />
              <span>Reenviar Código</span>
            </div>
          </Button>
          <Button type="submit">Verificar OTP</Button>
        </article>
      </form>
    </main >
  )
}
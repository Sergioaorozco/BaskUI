import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"

import { REGEXP_ONLY_DIGITS } from "input-otp"
import Button from "./Button"

export default function OTP() {

  function onSubmitOTP(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log('TEST');
  }

  return (
    <>
    {/* TODO: Add Icon */}
      <form action="" onSubmit={onSubmitOTP} className="dom-wrapper mx-auto px-5 flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col items-center justify-center gap-4">
          <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>
        <article className="w-full sm:w-1/2 flex flex-col gap-2 items-center">
          <p className="text-sm text-indigo-900 text-center">Recibiras un código de 6 dígitos, a través de tu correo o celular.</p>
          <Button type="submit">Verificar OTP</Button>
          <Button variant="link">Reenviar Código</Button>
        </article>
      </form>
    </>
  )
}
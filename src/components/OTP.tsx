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
      <span className="w-full sm:w-1/2">
        <Button type="submit">Verificar OTP</Button>
      </span>
    </form>
  )
}
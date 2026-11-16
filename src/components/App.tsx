import Button from "@/components/Button"
import { Link, Route, Routes, useNavigate } from "react-router-dom"
import { ChevronLeft, ShieldCheckIcon } from "lucide-react";
import { AccountTabs } from "@/components/AccountTabs";
import OTP from "@/components/OTP";



function Home() {
  return (
    <main className="bg-linear-to-b from-white from-40% to-purple-300 h-dvh w-full">
      <section className="dom-wrapper mx-auto px-5 flex items-center flex-col justify-around gap-2 h-full">
        <img
          srcSet="
              /assets/bask_logo_300.png 300w
              /assets/bask_logo_700.png 700w
            "
          src="/assets/bask_logo_300.png"
          sizes="(min-width: 640px) 50vw, 100vw"
          alt="Bask Logo"
        />
        <div className="w-full sm:w-1/2 flex justify-center">
          <Button to="/account/link">Crear Reporte</Button>
        </div>
      </section>
    </main>
  )
}

function LinkAccount() {
  return (
    <main className="bg-linear-to-b from-white from-40% to-purple-300 h-dvh w-full flex items-center flex-col gap-2">
      <section className="dom-wrapper mx-auto w-full px-5">
        <nav className="flex justify-center w-full items-center py-8 relative">
          <Link to="/" className="text-indigo-500 hover:text-indigo-700 font-bold absolute left-0 flex gap-1">
            <ChevronLeft /><span className="hidden sm:block">Atrás</span>
          </Link>
          <h1 className="font-semibold text-center text-2xl text-indigo-800">Valida tu cuenta</h1>
        </nav>
      </section>
      <section className="dom-wrapper mx-auto w-full px-5">
        <AccountTabs />
      </section>
    </main>
  )
}

function VerifyAccount() {
  const navigate = useNavigate();
  return (
    <main className="bg-linear-to-b from-white from-40% to-purple-300 h-dvh w-full flex items-center flex-col gap-2">
      <section className="dom-wrapper mx-auto w-full px-5">
        <nav className="flex justify-center w-full items-center py-8 relative">
          <button onClick={() => navigate(-1)} className="text-indigo-500 hover:text-indigo-700 font-bold absolute left-0 flex gap-1">
            <ChevronLeft /><span className="hidden sm:block">Atrás</span>
          </button>
          <h1 className="font-semibold text-center text-2xl text-indigo-800">Verifica tu Cuenta</h1>
        </nav>
        <article>
          <OTP />
        </article>
      </section>
    </main>
  )
}

function ValidateAccount() {
  return (
    <main className="bg-linear-to-b from-white from-40% to-emerald-100 h-dvh w-full flex items-center place-content-center flex-col gap-2">
      <div className="flex flex-col gap-10 items-center">
        <div>
        <ShieldCheckIcon className="text-emerald-600" fill="var(--color-emerald-100)" size={200} strokeWidth={1} />
        <h1 className="font-semibold text-center text-2xl text-emerald-800">Validación Exitosa</h1>
        </div>
        <div className="flex gap-2 items-baseline">
          <input id="report-validate" type="checkbox" />
          <label htmlFor="report-validate" className="flex flex-col">
            <p className="text-neutral-900">Deseo recibir actualización de los reportes</p>
            <p className="text-xs text-muted-foreground">Acepto el tratamiento de los datos proporcionados</p>
          </label>
        </div>
        <Button type="submit">Comenzar</Button>
      </div>
    </main>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/account/link" element={<LinkAccount />}></Route>
      <Route path="/account/verify" element={<VerifyAccount />}></Route>
      <Route path="/account/validate" element={<ValidateAccount />}></Route>
    </Routes>
  )
}

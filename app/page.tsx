import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
export default function Home() {
  return (
    <>
      <p>Primer paso instalar react-icons </p>
      <p>Segundo paso crear el header del sitio</p>
      <p>Instalar next-auth </p>
    </>
  );
}

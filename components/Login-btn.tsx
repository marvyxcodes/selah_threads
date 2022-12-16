import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

//    <button onClick={() => signIn()}>

export default function LoginBtn() {
  const { data: session } = useSession() as any;
  if (session) {
    return (
      <>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      <Link href="/auth/signin">
        <Image
          className="nav-icon"
          src="/userIcon.svg"
          alt="User account"
          width={35}
          height={35}
        />
      </Link>
    </>
  );
}

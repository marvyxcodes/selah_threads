import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

//    <button onClick={() => signIn()}>

export default function LoginBtn() {
  const { data: session } = useSession() as any;
  if (session) {
    return (
      <>
        <button onClick={() => signOut()}>
          <Image
            className="nav-icon"
            src="/logout.svg"
            width={40}
            height={40}
            alt="Sign out"
          />
        </button>
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
          width={40}
          height={40}
        />
      </Link>
    </>
  );
}

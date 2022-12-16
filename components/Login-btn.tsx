import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

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
      <button onClick={() => signIn()}>
        <Image
          className="nav-icon"
          src="/userIcon.svg"
          alt="User account"
          width={35}
          height={35}
        />
      </button>
    </>
  );
}

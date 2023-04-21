import { useAppSelector } from "@/hooks/useAppSelector"
import { useRouter } from "next/router";
import { useEffect } from "react";

interface LayoutProps {
  children: React.ReactNode;
  isPublic?: boolean;
}

export function Layout({ children, isPublic = true }: LayoutProps) {
  const user = useAppSelector((state) => state.user)
  const router = useRouter()

  useEffect(() => {
    if (!user.username && !isPublic) {
      router.push('/')
    }
  }, [user, isPublic])


  return (
    <main>
      {children}
    </main>
  )
}
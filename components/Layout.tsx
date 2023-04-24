import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector"
import { useAuth } from "@/hooks/useAuth";
import { setUsername } from "@/redux/slices/userSlice";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
  isPublic?: boolean;
}

export function Layout({ children, isPublic = true }: LayoutProps) {
  const user = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch()
  const router = useRouter()
  const storedUsername = useRef('')
  const { retrieveSession } = useAuth()

  useEffect(() => {
    const usernameFromLS = retrieveSession()
    storedUsername.current = usernameFromLS || ''

    if (usernameFromLS) {
      dispatch(setUsername(usernameFromLS))
    }
  }, [dispatch])

  useEffect(() => {
    if (!storedUsername.current && !user.username && !isPublic) {
      router.push('/')
    }
  }, [user, isPublic, storedUsername])


  return (
    <main>
      {children}
    </main>
  )
}
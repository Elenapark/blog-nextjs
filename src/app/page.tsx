import Image from "next/image"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <main className="text-3xl text-orange-400 underline">Hello, world.</main>
  )
}

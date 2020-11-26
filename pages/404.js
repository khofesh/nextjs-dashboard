import Link from "next/link";

export default function custom404() {
  return (
    <>
      <div class="h-screen w-screen bg-blue-600 flex justify-center content-center flex-wrap">
        <p class="font-sans text-white error-text">404</p>
      </div>

      <div class="absolute w-screen bottom-0 mb-6 text-white text-center font-sans text-xl">
        <span class="opacity-50">Take me back to </span>
        <Link href="/" class="border-b">
          Home
        </Link>
      </div>
    </>
  );
}

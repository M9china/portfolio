export default function About() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          {`Hi, I'm Nqobile Mvundlela, a passionate software developer with a love
          for creating innovative solutions. With experience in various
          programming languages and frameworks, I enjoy building projects that
          make a difference. When I'm not coding, you can find me exploring new
          technologies or contributing to open-source projects.`}
        </p>
      </main>
    </div>
  );
}

import { ModeToggle } from '#/components/mode-toggle';

export default function Home() {
  return (
    <main className=" mx-auto flex min-h-screen flex-col justify-center">
      <div className=" min-h-screen ">
        <ModeToggle />
      </div>
      <div className=" h-screen"></div>
      
    </main>
  );
}

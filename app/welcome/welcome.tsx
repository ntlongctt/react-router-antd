import logoDark from './logo-dark.svg';
import logoLight from './logo-light.svg';

export function Welcome() {
  return (
    <main className="flex items-center justify-center py-16 min-h-screen bg-background">
      <div className="flex-1 flex flex-col items-center gap-8 min-h-0 container px-4">
        <header className="flex flex-col items-center gap-6">
          <div className="w-[500px] max-w-[100vw] p-4">
            <img src={logoLight} alt="React Router" className="block w-full dark:hidden" />
            <img src={logoDark} alt="React Router" className="hidden w-full dark:block" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Welcome to React Router
          </h1>
        </header>
      </div>
    </main>
  );
}

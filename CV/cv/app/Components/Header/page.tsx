import Link from "next/link";

export default function Header() {
  const navLinks = [
    { name: "Dashboard", href: "/" },
    { name: "Curriculum Vitae / Japanese CV", href: "/pages/NihonCV" },
    { name: "Resume", href: "/pages/Resume" },
    { name: "Cover Letter", href: "/pages/CoverLetter" },
    { name: "Portfolio", href: "/pages/Portfolio" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b-2 border-gray-900 ">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        {/*  Name Section */}
        <div className="font-bold tracking-tighter text-lg uppercase">
          Kazi Rabit <span className="font-light text-gray-500">Jahir</span>
        </div>

        {/* Navigation*/}
        <nav>
          <ul className="flex items-center space-x-1 md:space-x-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="px-3 py-2 text-xs md:text-sm font-medium uppercase tracking-widest text-gray-600 hover:text-black hover:bg-gray-100 transition-all rounded"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

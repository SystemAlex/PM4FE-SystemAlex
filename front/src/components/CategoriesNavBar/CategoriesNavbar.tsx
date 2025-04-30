"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React, { useState, useEffect } from 'react';
import { categories } from "@/interfaces/Category";

const CategoryNavBar: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const currentCategory = categories.find(
    (category) => pathname === `/category/${category.id}`
  );

  const displayText = currentCategory ? currentCategory.name : 'Categories';

  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [pathname]);

  return (
    <nav className="w-full bg-primary-dark relative">
      <div className="sm:hidden p-4 flex items-center justify-between">
        <button
          onClick={toggleMenu}
          className="text-primary-light focus:outline-none flex items-center"
          type="button"
          aria-label={isOpen ? `Cerrar menú ${displayText}` : `Abrir menú ${displayText}`}
        >
          <svg
            className="h-6 w-6 fill-current mr-2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 0 1 1.414 1.414l-4.828 4.829z"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"
              />
            )}
          </svg>
          <span>{displayText}</span>
        </button>
        {isOpen && (
          <ul className="absolute top-full left-0 w-full bg-primary-dark shadow-md z-10">
            {categories.map(({ id, name }) => (
              <li key={id}>
                <Link
                  href={`/category/${id}`}
                  className={`block px-4 py-2 text-primary-light hover:text-primary-dark hover:bg-primary ${
                    pathname === `/category/${id}` ? 'font-bold bg-primary' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      <ul className="hidden sm:flex wrapper justify-center items-center flex-wrap space-x-3 text-lg">
        {categories.map(({ id, name }) => (
          <li key={id}>
            <Link
              href={`/category/${id}`}
              className={`px-1 text-primary-light hover:text-primary-dark hover:bg-primary block ${
                pathname === `/category/${id}` ? 'font-bold bg-primary' : ''
              }`}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CategoryNavBar;
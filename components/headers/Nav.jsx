"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import Image from "next/image";
import {
  blockItems,
  blogItems,
  demos,
  docsPages,
  otherPages,
  projectPages,
} from "@/data/menu";
import { usePathname } from "next/navigation";
// !text-[var(--current-color)]
export default function Nav({ color = "#fab758" }) {
  useEffect(() => {
    // Dynamically import Bootstrap
    import("bootstrap").then((Bootstrap) => {
      const CLASS_NAME = "has-child-dropdown-show";

      // Save the original toggle function
      const originalToggle = Bootstrap.Dropdown.prototype.toggle;

      // Override the toggle function
      Bootstrap.Dropdown.prototype.toggle = function () {
        // Remove the CLASS_NAME from all dropdowns
        document.querySelectorAll("." + CLASS_NAME).forEach(function (e) {
          e.classList.remove(CLASS_NAME);
        });

        // Traverse up through the closest dropdown parents
        let dd = this._element
          .closest(".dropdown")
          .parentNode.closest(".dropdown");
        for (; dd && dd !== document; dd = dd.parentNode.closest(".dropdown")) {
          dd.classList.add(CLASS_NAME);
        }

        // Call the original toggle function
        return originalToggle.call(this);
      };

      // Add event listeners for hide.bs.dropdown to remove the CLASS_NAME
      document.querySelectorAll(".dropdown").forEach(function (dd) {
        dd.addEventListener("hide.bs.dropdown", function (e) {
          if (this.classList.contains(CLASS_NAME)) {
            this.classList.remove(CLASS_NAME);
            e.preventDefault();
          }
          e.stopPropagation();
        });
      });
    });

    // Optional cleanup function for any potential side effects
    return () => {
      // Cleanup code here (if needed)
    };
  }, []);

  const pathname = usePathname();

  const getActiveParent = (menuLinks) => {
    return menuLinks.find((parent) => {
      if (parent.links) {
        return parent.links.some((link) => link.href === pathname);
      }
      return parent.href === pathname;
    });
  };

  return (
    <ul className="navbar-nav" style={{ "--current-color": color }}>
      <li className="nav-item dropdown">
        <a
          className={`nav-link !text-[.85rem] !tracking-[normal] hover:!text-[var(--current-color)] after:!text-[var(--current-color)] `}
          href="/historia"
        >
          Historia
        </a>
      </li>
      <li className="nav-item dropdown">
        <a
          className={`nav-link !text-[.85rem] !tracking-[normal] hover:!text-[var(--current-color)] after:!text-[var(--current-color)]`}
          href="/equipo"
        >
          Equipo
        </a>
      </li>
      <li className="nav-item dropdown">
        <a
          className={`nav-link !text-[.85rem] !tracking-[normal] hover:!text-[var(--current-color)] after:!text-[var(--current-color)]`}
          href="/eventos"
        >
          Eventos
        </a>
      </li>
    </ul>
  );
}

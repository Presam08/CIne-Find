import React from "react";

export default function Footer() {
  return (
    <footer className="mt-xl border-t border-outline-variant px-margin-mobile py-md md:px-margin-desktop">
      <div className="mx-auto flex max-w-7xl flex-col gap-sm text-secondary/45 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-headline-sm font-bold text-primary">CineFind</p>
          <p className="font-geist text-metadata-sm">© 2024 CineFind. All rights reserved.</p>
        </div>
        <div className="flex gap-md font-geist text-body-md">
          <span>Terms of Service</span>
          <span>Privacy Policy</span>
          <span>Contact Support</span>
        </div>
      </div>
    </footer>
  );
}

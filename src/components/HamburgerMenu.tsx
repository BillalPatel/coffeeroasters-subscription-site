export function HamburgerMenu() {
  return (
    <div
      className="hamburger-menu-container | absolute w-11/12 top-20 text-center z-50 h-screen"
      style={{
        background:
          "linear-gradient(180deg, rgba(254, 252, 247, 0.95) 0%, #FEFCF7 100%);",
      }}
    >
      <ul className="flex flex-col space-y-6 font-fraunces text-2xl mt-12">
        <li>Home</li>
        <li>About Us</li>
        <li>Create Your Plan</li>
      </ul>
    </div>
  );
}

// background: linear-gradient(180deg, rgba(254, 252, 247, 0.50) 0%, #FEFCF7 100%);

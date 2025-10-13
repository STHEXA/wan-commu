import Image from "next/image";
import Link from "next/link";

const navList = [
  {
    label: "犬種一覧",
    url: "/dog-list",
  },
  {},
];

export default function Header() {
  return (
    <div className="w-[80%] px-10 py-[5px] bg-white rounded-[60px] flex items-center justify-between shadow-2xl shadow-black">
      <Link href="/" className="w-[100px] h-[50px] inline-block">
        <Image
          src="/images/logo.png"
          alt="ロゴ"
          width={100}
          height={50}
          className="w-full h-full object-contain"
        />
      </Link>
      <div>
        <nav>
          <ul>
            <li>
              <Link href="/dog-list">犬種一覧</Link>
            </li>
            <li></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

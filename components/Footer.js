import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-footer text-white pt-16 pb-8">
      <div className="container1">
        {/* Main links grid */}
        <div className="flex flex-col md:flex-row justify-between gap-16 flex-wrap md:flex-nowrap mb-8">
          {/* AVMC Logo and Social */}
          <div className="flex flex-col gap-4">
            <div className="mb-10">
              <Image
                src={"/footer-logo.png"}
                alt="logo"
                width={230}
                height={59}
              />
            </div>
            <div className="text-white">
              <p className="mb-6 txt1">FOLLOW US:</p>
              <div className="flex gap-4 items-center">
                {/* Using Unicode characters for social icons */}
                <Link
                  href={"#"}
                  className="text-lg hover:scale-200 transition-all duration-300"
                >
                  <Linkedin size={25} />
                </Link>{" "}
                {/* LinkedIn */}
                <Link
                  href={"#"}
                  className="text-lg hover:scale-200 transition-all duration-300"
                >
                  <Youtube size={25} />
                </Link>{" "}
                {/* Some icon */}
                <Link
                  href={"#"}
                  className="text-lg hover:scale-200 transition-all duration-300"
                >
                  <Instagram size={20} />
                </Link>{" "}
                {/* Some icon */}
                <Link
                  href={"#"}
                  className="text-lg hover:scale-200 transition-all duration-300"
                >
                  <Facebook size={20} />
                </Link>{" "}
                {/* Facebook */}
              </div>
            </div>
          </div>

          <div>
            <ul className="space-y-3 txt1">
              <li>
                <Link href="#" className="hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Programs & Admissions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Academics
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Hospital Services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Research
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  IQAC
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Student Corner
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <ul className="space-y-3 txt1">
              <li>
                <Link href="#" className="hover:text-primary">
                  Feedback
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Grievance Redressal
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Internal Complaints Committee
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  University Guidelines for ICC
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  ICC - To register online complaints email to
                </Link>
              </li>
              <li>
                <Link href="mailto:icc@avmc.edu.in" className="hover:underline">
                  icc@avmc.edu.in
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Committees
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Tobacco free Education Institution
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Conflict of Interest Declaration
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  GoI Guidelines for TEFI
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h3 className="font-bold text-xl mb-4">
              National Helplines for Mental Health & De-addiction
            </h3>
            <ul className="space-y-3 txt1">
              <li>
                <span className="font-medium">14446</span> - National
                De-addiction Helpline: <br />
                Confidential counseling (D&SJE).
              </li>
              <li>
                <span className="font-medium">14416</span> - Tele-MANAS: Free
                mental health support (MoHFW).
              </li>
              <li>
                <span className="font-medium">1933</span> - MANAS: Report
                drug-related activities anonymously (MHA & NCB).
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-300 pt-6 flex flex-col md:flex-row justify-between gap-4">
          <p className="txt1">
            © 2025 Aarupadai Veedu Medical College & Hospital
          </p>
          <div className="flex gap-4 txt1">
            <Link href="#" className="hover:text-primary">
              Site Map
            </Link>
            <Link href="#" className="hover:text-primary">
              Terms of Use
            </Link>
            <Link href="#" className="hover:text-primary">
              Privacy Policy
            </Link>
          </div>
          <p className="txt1">Designed by Tectra Technologies</p>
        </div>
      </div>
    </footer>
  );
}

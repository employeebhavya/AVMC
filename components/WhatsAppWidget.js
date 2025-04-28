"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function WhatsAppWidget() {
  const [isHovered, setIsHovered] = useState(false);

  // Replace with your actual WhatsApp number and message
  const phoneNumber = "1234567890";
  const defaultMessage = "Hello! I have a question about your services.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    defaultMessage
  )}`;

  return (
    <div className="fixed left-6 bottom-6 z-50">
      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative">
          {/* WhatsApp bubble */}
          <div className="bg-[#25D366] w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300">
            <MessageCircle className="w-7 h-7 text-white" />
          </div>

          {/* Tooltip */}
          {isHovered && (
            <div className="absolute left-16 bottom-1/2 transform translate-y-1/2 bg-white text-gray-800 px-3 py-2 rounded-lg shadow-md whitespace-nowrap text-sm font-medium">
              Chat with us on WhatsApp
              <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-r-4 border-r-white"></div>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}

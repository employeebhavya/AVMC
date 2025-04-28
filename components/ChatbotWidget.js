"use client";

import { Bot, MessageSquare, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hello! I'm AVMC's virtual assistant. How can I help you today?",
      sender: "bot",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef(null);

  // AVMC-specific questions
  const sampleQuestions = [
    "What courses does AVMC offer?",
    "How do I apply for admission?",
    "What are the college timings?",
    "Where is AVMC located?",
    "What facilities are available?",
    "How to contact the administration?",
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;

    const userMessage = { text: inputValue, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    setTimeout(() => {
      const botResponse = generateBotResponse(inputValue);
      setMessages((prev) => [...prev, { text: botResponse, sender: "bot" }]);
    }, 800);
  };

  const handleQuickQuestion = (question) => {
    setInputValue(question);
  };

  const generateBotResponse = (userInput) => {
    const input = userInput.toLowerCase();

    if (input.includes("course") || input.includes("program")) {
      return "AVMC offers undergraduate and postgraduate programs in Arts, Science, and Commerce. You can find detailed information about all courses on our Academics page.";
    } else if (input.includes("admission") || input.includes("apply")) {
      return "Admission process typically starts in May each year. You need to submit your application form along with required documents. Visit our Admissions page for detailed instructions.";
    } else if (
      input.includes("timing") ||
      input.includes("hour") ||
      input.includes("time")
    ) {
      return "The college timings are from 9:00 AM to 4:00 PM, Monday to Friday. Library remains open until 6:00 PM on weekdays.";
    } else if (
      input.includes("location") ||
      input.includes("address") ||
      input.includes("where")
    ) {
      return "AVMC is located at: Aruna Vidhya Mandir Campus, College Road, Near Bus Stand, Virudhunagar - 626001, Tamil Nadu, India";
    } else if (
      input.includes("facility") ||
      input.includes("lab") ||
      input.includes("library")
    ) {
      return "AVMC provides excellent facilities including well-equipped labs, a central library, sports complex, auditorium, and hostel accommodation for students.";
    } else if (
      input.includes("contact") ||
      input.includes("phone") ||
      input.includes("email")
    ) {
      return "You can contact AVMC at:\nPhone: +91-4562-123456\nEmail: info@avmc.edu.in\nFor department-specific contacts, please visit our Contact Us page.";
    } else if (input.includes("hello") || input.includes("hi")) {
      return "Hello! Welcome to Aruna Vidhya Mandir College. How can I assist you today?";
    } else {
      return "Thank you for your question. For more specific inquiries, please visit our website or contact our administration office. Is there anything else I can help you with?";
    }
  };

  return (
    <div className="fixed right-6 bottom-6 z-50">
      {isOpen ? (
        <div className="w-96 h-[500px] bg-white rounded-lg shadow-xl flex flex-col border border-gray-200 overflow-hidden">
          <div className="bg-blue-800 text-white p-3 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Bot className="w-5 h-5" />
              <h3 className="font-semibold">AVMC Assistant</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-3 flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    message.sender === "user"
                      ? "bg-blue-800 text-white rounded-br-none"
                      : "bg-white text-gray-800 border border-gray-200 rounded-bl-none"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="px-3 pt-2 pb-1 bg-gray-100 border-t border-gray-200">
            <div className="text-xs text-gray-500 mb-1">
              Quick questions about AVMC:
            </div>
            <div className="flex flex-wrap gap-2">
              {sampleQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickQuestion(question)}
                  className="text-xs bg-white text-blue-800 px-2 py-1 rounded border border-blue-200 hover:bg-blue-50 transition"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          <div className="p-3 border-t border-gray-200 bg-white">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Ask about AVMC..."
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                onClick={handleSendMessage}
                className="bg-blue-800 text-white rounded-lg px-4 py-2 hover:bg-blue-900 transition flex items-center justify-center"
              >
                <MessageSquare className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-800 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Bot className="w-7 h-7 text-white" />
        </button>
      )}
    </div>
  );
}

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm the Robotics Club assistant. Ask me anything about our club, events, projects, or how to join!",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Show chatbot after page scroll
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Animate chat opening/closing
  useEffect(() => {
    if (chatContainerRef.current) {
      if (isOpen) {
        gsap.fromTo(
          chatContainerRef.current,
          { scale: 0, opacity: 0, transformOrigin: "bottom right" },
          { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(1.7)" }
        );
      }
    }
  }, [isOpen]);

  const predefinedResponses = {
    greetings: [
      "hello", "hi", "hey", "good morning", "good evening", "namaste"
    ],
    about: [
      "about", "what is", "tell me about", "robotics club", "manit", "club"
    ],
    events: [
      "events", "competition", "robomax", "automax", "workshop", "activities"
    ],
    joining: [
      "join", "how to join", "membership", "register", "become member", "selection process", "rounds", "qualify", "interview", "hr"
    ],
    projects: [
      "projects", "robots", "what do you build", "work", "research"
    ],
    contact: [
      "contact", "reach", "phone", "email", "address", "location"
    ],
    team: [
      "team", "members", "faculty", "coordinators", "who runs"
    ],
    prizes: [
      "prizes", "awards", "rewards", "prize collection", "what can i win", "competitions prizes"
    ],
    skills: [
      "skills", "requirements", "what skills", "programming", "technical", "prerequisites"
    ],
    fees: [
      "fees", "cost", "money", "payment", "charges", "registration fee"
    ]
  };

  const responses = {
    greetings: [
      "Hello! Welcome to MANIT Robotics Club! How can I help you today?",
      "Hi there! I'm here to answer all your questions about our robotics club!",
      "Hey! Great to see you interested in robotics. What would you like to know?"
    ],
    about: [
      "🤖 MANIT Robotics Club is the premier technology club at Maulana Azad National Institute of Technology, Bhopal. We focus on robotics, AI, automation, and cutting-edge technology projects. Our club provides hands-on experience with real-world applications!",
      "We're a community of passionate engineers and tech enthusiasts who build amazing robots, participate in national competitions, and conduct workshops to spread robotics knowledge across the campus!"
    ],
    events: [
      "🎯 We organize amazing events like:\n\n• RoboMAX - Our flagship robotics competition\n• AutoMAX - Autonomous vehicle challenge\n• Technical workshops\n• Guest lectures by industry experts\n• Project exhibitions\n\nCheck our events section for upcoming activities!",
      "Our events are designed to challenge your technical skills and creativity. From beginner-friendly workshops to advanced competitions, we have something for everyone!"
    ],
    joining: [
      "🚀 To join MANIT Robotics Club:\n\n1. Attend our recruitment drives (usually at semester start)\n2. Fill the membership form\n3. Participate in our orientation session\n4. Start working on projects with senior mentors\n\nNo prior robotics experience required - just passion to learn!",
      "We welcome students from all branches! Our club provides complete training from basics to advanced robotics. Contact us through the contact section for more details!"
    ],
    projects: [
      "🔧 Our projects include:\n\n• Autonomous robots\n• Line following bots\n• Gesture-controlled vehicles\n• IoT-based automation\n• AI and ML applications\n• Drone technology\n• Industrial automation systems",
      "We work on both academic and industry-relevant projects. Members get hands-on experience with microcontrollers, sensors, programming, and mechanical design!"
    ],
    contact: [
      "📞 Contact MANIT Robotics Club:\n\n📧 Email: robotics@manit.ac.in\n📱 Phone: +91-XXXXXXXXXX\n📍 Location: MANIT Bhopal, MP\n\nYou can also reach us through the contact form on our website!",
      "Feel free to visit our lab or contact our coordinators. We're always happy to welcome new members and answer your questions!"
    ],
    team: [
      "👥 Our team consists of:\n\n• Faculty Coordinators\n• Student Coordinators\n• Core Team Members\n• Active Club Members\n\nCheck our Team section to meet our amazing coordinators and members who make everything possible!",
      "We have an experienced team of faculty advisors and passionate student leaders who guide club activities and mentor new members."
    ],
    default: [
      "That's an interesting question! For specific details, I'd recommend contacting our team directly or visiting our contact section.",
      "I'd love to help with that! You can find more information on our website or reach out to our coordinators for detailed answers.",
      "Great question! For the most accurate and up-to-date information, please contact our club coordinators through the contact form.",
      "Thanks for asking! While I cover the basics, our team members can provide more detailed information. Feel free to reach out!"
    ]
  };

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    for (const [category, keywords] of Object.entries(predefinedResponses)) {
      if (keywords.some(keyword => message.includes(keyword))) {
        const categoryResponses = responses[category as keyof typeof responses];
        return categoryResponses[Math.floor(Math.random() * categoryResponses.length)];
      }
    }
    
    return responses.default[Math.floor(Math.random() * responses.default.length)];
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot thinking time
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        isBot: true,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div
          ref={chatContainerRef}
          className="mb-4 w-80 h-96 bg-[#0F1A35]/95 backdrop-blur-md rounded-2xl border border-[#9CF185]/30 shadow-2xl flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#9CF185] to-[#60BE58] p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-lg">
                🤖
              </div>
              <div>
                <h3 className="text-[#0F1A35] font-bold text-sm">Club Assistant</h3>
                <p className="text-[#0F1A35]/70 text-xs">Always here to help!</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#0F1A35] hover:bg-white/20 rounded-full p-1 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg text-sm ${
                    message.isBot
                      ? "bg-white/10 text-white border border-white/20"
                      : "bg-[#9CF185] text-[#0F1A35] font-medium"
                  }`}
                >
                  <p className="whitespace-pre-line">{message.text}</p>
                  <p className={`text-xs mt-1 ${message.isBot ? "text-gray-400" : "text-[#0F1A35]/70"}`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/10 text-white border border-white/20 p-3 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-[#9CF185] rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-[#9CF185] rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-[#9CF185] rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/20">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about the club..."
                className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-[#9CF185]"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="bg-[#9CF185] text-[#0F1A35] px-3 py-2 rounded-lg hover:bg-[#9CF185]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-[#9CF185] to-[#60BE58] text-[#0F1A35] p-4 rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 flex items-center justify-center group relative"
      >
        {!isOpen ? (
          <>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
            </svg>
            {/* Notification dot */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div>
          </>
        ) : (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        )}
      </button>
    </div>
  );
}

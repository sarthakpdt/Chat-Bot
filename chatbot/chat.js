// ==========================================================
// SIMPLE GEMINI CHATBOT
// Bas apni Gemini API key .env file me daalo aur "npm start" chalao.
// Terminal me sawaal poocho, Gemini jawab dega.
// ==========================================================

// dotenv .env file ke andar likhi cheezein (jaise API key) load karta hai
// taaki humein key seedhe code me hardcode na karni pade
import "dotenv/config";

// Google ka official SDK jo Gemini API se baat karta hai
import { GoogleGenAI } from "@google/genai";

// Ye package terminal me user se input (question) lene ke liye hai
import readlineSync from "readline-sync";

// ------------------------------------------------------------
// STEP 1: Check karo ki .env file me API key hai ya nahi
// ------------------------------------------------------------
if (!process.env.GEMINI_API_KEY) {
  console.error(
    "\n❌ GEMINI_API_KEY nahi mili.\n" +
      "1. .env.example file ko .env naam se copy karo\n" +
      "2. .env file kholo aur apni Gemini API key paste karo\n"
  );
  process.exit(1); // key nahi hai to yahin ruk jao
}

// ------------------------------------------------------------
// STEP 2: Gemini client banao apni API key ke saath
// ------------------------------------------------------------
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// ------------------------------------------------------------
// STEP 3: Ek "chat session" banao jo purani baatcheet yaad rakhega
// ------------------------------------------------------------
const chat = ai.chats.create({
  // gemini-2.5-flash-lite abhi (2026) free-tier ka best/current model hai
  // (purana gemini-2.0-flash Google ne band kar diya hai, isliye use mat karna)
  model: "gemini-2.5-flash-lite",
  history: [], // shuru me koi purani history nahi
});

// ------------------------------------------------------------
// STEP 4: Loop chalao — sawaal pucho, jawab dikhao, phir se pucho
// ------------------------------------------------------------
async function main() {
  // terminal me user se sawaal pucho
  const userQuestion = readlineSync.question("\nAsk me anything --> ");

  // "exit" likhne par program band ho jayega
  if (userQuestion.toLowerCase() === "exit") {
    console.log("Bye!");
    process.exit(0);
  }

  try {
    // Gemini ko sawaal bhejo aur jawab ka wait karo
    const response = await chat.sendMessage({ message: userQuestion });

    // jawab print karo
    console.log("\n" + response.text);
  } catch (error) {
    // agar kuch galat hua (jaise galat key, ya internet issue), to error dikhao
    console.error("\n❌ Error aaya:", error.message);
  }

  // dubara sawaal poochne ke liye function ko phir se call karo
  main();
}

// program yahin se shuru hota hai
main();

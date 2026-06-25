"use client";

import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { api } from "@/services/api";
import toast from "react-hot-toast";

export default function AIPage() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [sources, setSources] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  async function askAI() {
    if (!question.trim()) {
      toast.error("Please enter a question.");
      return;
    }

    try {
      setLoading(true);
      setAnswer("");
      setSources([]);

      const res = await api.post("/ai/ask", {
        question,
      });

      setAnswer(res.data.answer);
      setSources(res.data.sources || []);
    } catch (error: any) {
      console.error(error);

      if (error.response?.status === 429) {
        toast.error(
          "AI is temporarily busy (free Gemini quota). Please wait a few seconds and try again."
        );
      } else {
        toast.error(
          error.response?.data?.error ||
            "AI service is temporarily unavailable."
        );
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold">
        AI Learning Assistant 🤖
      </h1>

      <p className="text-gray-500 mt-2">
        Ask questions from your course material.
      </p>

      <div className="bg-white rounded-xl shadow p-6 mt-8">
        <textarea
          value={question}
          placeholder="Ask your doubt..."
          className="border rounded-xl p-4 w-full h-32"
          onChange={(e) => setQuestion(e.target.value)}
        />

        <button
          onClick={askAI}
          disabled={loading}
          className="bg-black text-white px-6 py-2 rounded-lg mt-4 disabled:opacity-50"
        >
          {loading ? "Thinking..." : "Ask AI"}
        </button>

        {loading && (
          <div className="mt-6 rounded-xl border border-blue-200 bg-blue-50 p-4">
            <p className="font-semibold text-blue-700">
              🤖 ScholarFlow AI is thinking...
            </p>

            <p className="text-sm text-blue-600 mt-2">
              Since this project is deployed using free cloud services,
              the first response may take 10–30 seconds while the server,
              database, and AI service wake up. Thank you for your patience.
            </p>
          </div>
        )}
      </div>

      {answer && (
        <div className="bg-white rounded-xl shadow p-6 mt-8">
          <h2 className="font-bold text-xl">
            Answer
          </h2>

          <p className="mt-4 leading-7 whitespace-pre-wrap">
            {answer}
          </p>
        </div>
      )}

      {sources.length > 0 && (
        <div className="mt-8">
          <h2 className="font-bold text-xl">
            Course References
          </h2>

          <div className="grid gap-4 mt-4">
            {sources.map((s) => (
              <div
                key={s.id}
                className="bg-white border rounded-xl p-4"
              >
                <p>{s.content}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}

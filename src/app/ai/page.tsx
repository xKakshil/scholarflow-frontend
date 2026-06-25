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

    setLoading(true);
    setAnswer("");
    setSources([]);

    const maxRetries = 3;

    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      try {
        const res = await api.post("/ai/ask", {
          question,
        });

        setAnswer(res.data.answer);
        setSources(res.data.sources || []);

        setLoading(false);
        return;
      } catch (error: any) {
        if (attempt < maxRetries) {
          console.log(
            `Retry ${attempt + 1} of ${maxRetries}...`
          );

          await new Promise((resolve) =>
            setTimeout(resolve, 5000)
          );

          continue;
        }

        if (error.response?.status === 429) {
          toast.error(
            "Gemini AI is busy because of free-tier limits. Please wait a little and try again."
          );
        } else {
          toast.error(
            error.response?.data?.error ||
              "AI service is temporarily unavailable."
          );
        }
      }
    }

    setLoading(false);
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
          disabled={loading}
          onClick={askAI}
          className="bg-black text-white px-6 py-2 rounded-lg mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Thinking..." : "Ask AI"}
        </button>

        {loading && (
          <div className="mt-6 rounded-xl border border-blue-200 bg-blue-50 p-5">
            <div className="flex items-start gap-4">
              <div className="h-6 w-6 animate-spin rounded-full border-2 border-blue-600 border-t-transparent mt-1"></div>

              <div>
                <p className="font-semibold text-blue-700">
                  🤖 ScholarFlow AI is preparing your answer...
                </p>

                <p className="text-sm text-blue-600 mt-2 leading-6">
                  ScholarFlow is hosted on free cloud services.
                  <br />
                  The AI server, database and Gemini API may take
                  <strong> 30–60 seconds </strong>
                  to wake up after being idle.
                  <br />
                  Please keep this page open while your answer is generated.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {answer && (
        <div className="bg-white rounded-xl shadow p-6 mt-8">
          <h2 className="text-xl font-bold">
            Answer
          </h2>

          <p className="mt-4 whitespace-pre-wrap leading-8">
            {answer}
          </p>
        </div>
      )}

      {sources.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-bold">
            Course References
          </h2>

          <div className="grid gap-4 mt-4">
            {sources.map((source) => (
              <div
                key={source.id}
                className="rounded-xl border bg-white p-4"
              >
                <p className="leading-7">
                  {source.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}

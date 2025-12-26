import React, { useEffect, useState } from "react";
import SideBar from "./admin-panel/SideBar";
import { Plus, Trash2, Send } from "lucide-react";
import { questionAPI, patientQuestionAPI } from "../services/api";

const AddQA = () => {
  const [questions, setQuestions] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // -------- FORM STATE --------
  const [questionText, setQuestionText] = useState("");
  const [questionWeight, setQuestionWeight] = useState(4);

  const [options, setOptions] = useState([
    { label: "A", text: "", weight: 4 },
    { label: "B", text: "", weight: 3 },
    { label: "C", text: "", weight: 2 },
    { label: "D", text: "", weight: 1 },
  ]);

  const [selectedPatientId, setSelectedPatientId] = useState("");

  // -------- FETCH QUESTIONS --------
  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const res = await questionAPI.getAll();
      setQuestions(res.data.map(q => ({ ...q, isSelected: false })));
    } catch (err) {
      console.error("Failed to fetch questions", err);
    }
  };

  // -------- ADD QUESTION --------
  const handleSaveQuestion = async () => {
    if (!questionText.trim()) return alert("Question text is required");

    try {
      await questionAPI.create({
        question_text: questionText,
        question_weight: questionWeight,
        options: options.map(o => ({
          label: o.label,
          text: o.text,
          option_weight: o.weight,
        })),
      });

      // reset
      setQuestionText("");
      setQuestionWeight(4);
      setOptions([
        { label: "A", text: "", weight: 4 },
        { label: "B", text: "", weight: 3 },
        { label: "C", text: "", weight: 2 },
        { label: "D", text: "", weight: 1 },
      ]);

      setShowModal(false);
      fetchQuestions();
    } catch (err) {
      console.error("Error saving question", err);
      alert("Failed to save question");
    }
  };

  // -------- SELECT QUESTION --------
  const toggleSelect = (id) => {
    setQuestions(prev =>
      prev.map(q =>
        q.id === id ? { ...q, isSelected: !q.isSelected } : q
      )
    );
  };

  // -------- DELETE QUESTION --------
  const deleteQuestion = async (id) => {
    if (!window.confirm("Delete this question?")) return;

    try {
      await questionAPI.delete(id);
      fetchQuestions();
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  // -------- SEND QUESTIONS TO PATIENT --------
  const sendToPatient = async () => {
    const selectedIds = questions
      .filter(q => q.isSelected)
      .map(q => q.id);

    if (!selectedPatientId)
      return alert("Please select a patient");

    if (selectedIds.length === 0)
      return alert("Select at least one question");

    try {
      await patientQuestionAPI.send({
        patient_id: selectedPatientId,
        question_ids: selectedIds,
      });

      alert("Questions sent successfully");

      setQuestions(prev =>
        prev.map(q => ({ ...q, isSelected: false }))
      );
    } catch (err) {
      console.error("Send failed", err);
      alert("Failed to send questions");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <SideBar />

      <div className="flex-1 ml-64 p-8">
        <h1 className="text-2xl font-bold mb-6">Add & Send Questions</h1>

        {/* ACTION BAR */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setShowModal(true)}
            className="px-4 py-2 bg-yellow-400 rounded flex items-center gap-2"
          >
            <Plus size={18} /> Add Question
          </button>

          <select
            value={selectedPatientId}
            onChange={(e) => setSelectedPatientId(e.target.value)}
            className="border rounded px-3 py-2"
          >
            <option value="">Select Patient</option>
            <option value="1">Patient 1</option>
            <option value="2">Patient 2</option>
          </select>

          <button
            onClick={sendToPatient}
            className="px-4 py-2 bg-indigo-600 text-white rounded flex items-center gap-2"
          >
            <Send size={18} /> Send Selected
          </button>
        </div>

        {/* QUESTIONS LIST */}
        <div className="space-y-4">
          {questions.map((q) => (
            <div
              key={q.id}
              className={`p-6 bg-white rounded border ${
                q.isSelected ? "border-green-500" : "border-gray-200"
              }`}
            >
              <div className="flex justify-between">
                <div>
                  <h3 className="font-semibold">{q.question_text}</h3>
                  <p className="text-sm text-gray-500">
                    Question Weight: {q.question_weight}
                  </p>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => toggleSelect(q.id)}
                    className={`px-3 py-1 rounded ${
                      q.isSelected
                        ? "bg-green-500 text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    +
                  </button>

                  <button
                    onClick={() => deleteQuestion(q.id)}
                    className="p-2 text-red-500"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>

              <ul className="mt-3 grid grid-cols-2 gap-2 text-sm">
                {q.options?.map((o) => (
                  <li key={o.id}>
                    {o.option_label}. {o.option_text} (Weight: {o.option_weight})
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded w-full max-w-lg">
            <h2 className="text-lg font-bold mb-4">Add Question</h2>

            <input
              className="w-full border p-2 mb-3"
              placeholder="Question text"
              value={questionText}
              onChange={(e) => setQuestionText(e.target.value)}
            />

            <input
              type="number"
              min="1"
              className="w-full border p-2 mb-4"
              placeholder="Question Weight (Max Marks)"
              value={questionWeight}
              onChange={(e) => setQuestionWeight(Number(e.target.value))}
            />

            {options.map((opt, i) => (
              <div key={i} className="flex gap-3 mb-2">
                <input
                  className="flex-1 border p-2"
                  placeholder={`Option ${opt.label}`}
                  value={opt.text}
                  onChange={(e) => {
                    const copy = [...options];
                    copy[i].text = e.target.value;
                    setOptions(copy);
                  }}
                />

                <input
                  type="number"
                  min="0"
                  className="w-24 border p-2"
                  placeholder="Weight"
                  value={opt.weight}
                  onChange={(e) => {
                    const copy = [...options];
                    copy[i].weight = Number(e.target.value);
                    setOptions(copy);
                  }}
                />
              </div>
            ))}

            <div className="flex justify-end gap-3 mt-4">
              <button onClick={() => setShowModal(false)}>Cancel</button>
              <button
                onClick={handleSaveQuestion}
                className="px-4 py-2 bg-yellow-400 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddQA;

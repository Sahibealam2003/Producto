import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const AddComment = () => {
  //  states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);


  const { id } = useParams();
  const nav = useNavigate();

  // custom submit
  const handleSubmit = () => {
  
    if (!name || !email || !comment) {
      toast.error("Please fill in all fields ❌");
      return;
    }

    setSubmitted(true);

    
    setName("");
    setEmail("");
    setComment("");
    setRating(0);

    toast.success("Comment added Successfully 😊");

    
    nav("/product/" + id);
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6 mt-6">
      <h2 className="text-2xl  font-bold text-gray-800 mb-4">Add a Comment</h2>

      
      {submitted && (
        <p className="text-green-600 mb-4">
          ✅ Comment submitted successfully!
        </p>
      )}

      <div className="flex flex-col gap-4">
        {/* Name Input */}
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 rounded-lg p-2"
        />

        {/* Email Input */}
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 rounded-lg p-2"
        />

        {/* Comment Textarea */}
        <textarea
          placeholder="Write your comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 min-h-[100px]"
        />

        {/* Rating System */}
        <div className="flex items-center gap-2">
          <span className=" text-gray-700 font-medium">Rating:</span>
          {[0, 1, 2, 3, 4, 5].map((num) => (
            <button
              type="button"
              key={num}
              onClick={() => setRating(num)} // set rating on click
              className={`cursor-pointer px-2 py-1 rounded-lg border ${
                rating === num
                  ? "bg-yellow-400 text-white border-yellow-500"
                  : "bg-gray-100 text-gray-700 border-gray-300"
              }`}
            >
              {num}
            </button>
          ))}
        </div>

        
        <button
          onClick={handleSubmit}
          className="cursor-pointer bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Submit Comment
        </button>
      </div>
    </div>
  );
};

export default AddComment;

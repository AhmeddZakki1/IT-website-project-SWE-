function getAnswer() {
  let q = document.getElementById("Question").value.toLowerCase();
  let answerBox = document.getElementById("answerBox");

  let faq = [
    {
      keywords: ["types", "cars", "offer", "what"],
      answer: "We offer new, used, luxury, and budget-friendly cars."
    },
    {
      keywords: ["price", "negotiable"],
      answer: "Yes, some prices are negotiable depending on the car."
    },
    {
      keywords: ["installment", "payment", "plan"],
      answer: "Yes, we offer flexible installment plans."
    },
    {
      keywords: ["test", "drive"],
      answer: "Yes, you can test drive most cars before buying."
    }
  ];

  let found = false;

  for (let i = 0; i < faq.length; i++) {
    for (let j = 0; j < faq[i].keywords.length; j++) {
      if (q.includes(faq[i].keywords[j])) {
        answerBox.innerHTML = faq[i].answer;
        found = true;
        break;
      }
    }
  }

  if (!found) {
    answerBox.innerHTML = "Sorry, I don't have an answer for this question.";
  }
}
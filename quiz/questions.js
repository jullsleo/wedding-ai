/* =============================================================
   BRIDE OR GROOM?  —  QUESTIONS  (3 rounds)
   -------------------------------------------------------------
   Edit this file, then refresh the quiz page. Changes appear instantly.

   Each round has:
     type:       "bg" (Bride/Groom)  or  "mc" (Multiple choice)
     name:       shown as the round title
     subtitle:   small line under the title
     askSeconds: how long guests have to answer each question

   Bride/Groom questions:  answer = "B" (Bride) or "G" (Groom)
   Multiple choice:        options = [...],  correct = index (0 = first option)
   ============================================================= */

const QUIZ = {
  title:     "Bride or Groom?",
  couple:    "Julia & Artem",
  brideName: "Bride",
  groomName: "Groom",

  rounds: [
    /* ---------- ROUND 1 — Bride or Groom (5s each) ---------- */
    {
      type: "bg",
      name: "Round 1",
      subtitle: "Bride or Groom?",
      askSeconds: 5,
      questions: [
        { q: "Who was more talkative when they first met?", answer: "G" },
        { q: "Who researches for three hours before buying a lightbulb?", answer: "G" },
        { q: "Who has more open tabs in the browser?", answer: "G" },
        { q: "Who is the secret gymnast in the relationship and could do a split?", answer: "G" },
        { q: "Who confidently presses \"depart\" then asks which way to turn?", answer: "G" },
        { q: "Who would last longer without their phone?", answer: "G" },
        { q: "Who names the houseplants?", answer: "B" },
        { q: "Who talks to every dog like it's a person?", answer: "B" },
      ],
    },

    /* ---------- ROUND 2 — Bride or Groom (5s each) ---------- */
    {
      type: "bg",
      name: "Round 2",
      subtitle: "Bride or Groom?",
      askSeconds: 5,
      questions: [
        { q: "Who has watched the same comfort show 7 times?", answer: "B" },
        { q: "Who's the fierce competitor that absolutely refuses to lose?", answer: "B" },
        { q: "Who says \"I told you so\"?", answer: "G" },
        { q: "Who keeps more \"I'll use it someday\" stuff?", answer: "G" },
        { q: "Who's more likely to eat the last slice and deny it?", answer: "B" },
        { q: "Who \"just has a bite\" of dessert and finishes the whole thing?", answer: "B" },
        { q: "Who goes in for milk and comes out with $80 of \"essentials\"?", answer: "B" },
        { q: "Who's the human GPS for \"where did I leave my…\"?", answer: "B" },
      ],
    },

    /* ---------- ROUND 3 — Multiple choice (15s each) ---------- */
    {
      type: "mc",
      name: "Round 3",
      subtitle: "Multiple Choice",
      askSeconds: 15,
      questions: [
        {
          q: "Where did the couple first meet?",
          options: ["In a café", "On the stairs from the sea to campus", "At a house party", "In university"],
          correct: 1,
        },
        {
          q: "What culinary masterpiece did the bride once serve the groom?",
          options: ["Soup with vermicelli", "Pasta baked into one solid brick", "Scrambled eggs with shells", "Rice that became glue"],
          correct: 1,
        },
        {
          q: "What did the groom do that got the bride fined in her student dorm?",
          options: ["Broke her window sneaking in", "Flooded the bathroom", "Turned off the fire alarm", "Threw a party without permission"],
          correct: 2,
        },
        {
          q: "How did the groom propose?",
          options: ["Surprise flash mob 💃", "Hidden ring in a dessert 🍮", "Quietly by the sea at sunset", "In front of both families"],
          correct: 2,
        },
        {
          q: "How did the couple's first birthday celebration together end?",
          options: ["The cake caught fire 🔥", "They got locked out", "Neighbours pelted them with eggs for being too loud", "The police knocked"],
          correct: 2,
        },
        {
          q: "What cake did the bride make for the groom's birthday?",
          options: ["A giant donut tower 🍩", "A sushi cake 🍣", "A burger cake 🍔", "A cake shaped like his car"],
          correct: 2,
        },
      ],
    },
  ],
};

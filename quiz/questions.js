/* =============================================================
   BRIDE OR GROOM?  —  QUESTION LIST
   -------------------------------------------------------------
   This is the ONLY file you need to edit to change the quiz.
   Save it, then refresh the quiz page — changes appear instantly.

   HOW TO EDIT
   -----------
   • Each question lives inside a category group below.
   • "q"      = the question text.
   • "answer" = the correct answer:  "B" = Bride,  "G" = Groom.
                Leave it as ""  if you haven't decided yet
                (the screen will show a "your call" reveal).
   • "twist"  = true  marks a tricky "gotcha" question — guests
                usually guess these WRONG, so the reveal gets a
                little extra fanfare. Remove the line if not a twist.

   • To ADD a question:    copy a line and change the text.
   • To REMOVE a question: delete its line.
   • To ADD a category:    copy a whole { category … } block.
   • To REORDER:           drag lines/blocks up or down.

   Tip: keep each question on its own line and mind the commas.
   ============================================================= */

const QUIZ = {
  title:     "Bride or Groom?",
  couple:    "Julia & Artem",
  brideName: "Bride",
  groomName: "Groom",
  brideInitial: "J",
  groomInitial: "A",

  groups: [
    {
      category: "Mornings & Sleep",
      emoji: "😴",
      questions: [
        { q: "Who is always running late?",                 answer: "G" },
        { q: "Who wakes up earlier in the morning?",         answer: "B" },
        { q: "Who hits snooze the most times?",              answer: "B" },
        { q: "Who falls asleep first during a movie?",       answer: "G" },
        { q: "Who makes the coffee or tea for the other one?", answer: "G" },
      ],
    },
    {
      category: "Phone & Tech",
      emoji: "📱",
      questions: [
        { q: "Who spends more time on their phone?",                         answer: "B" },
        { q: "Who has more open tabs in the browser?",                       answer: "G" },
        { q: "Who has more screenshots they'll never look at again?",        answer: "B" },
        { q: "Who has more random photos of food in their camera roll?",     answer: "B" },
        { q: "Who watches more videos at 2x speed?",                         answer: "G" },
        { q: "Who has a \"favorites\" playlist of 4 songs on repeat for 3 years?", answer: "G" },
        { q: "Who has the most wholesome YouTube recommendations?",          answer: "B" },
        { q: "Who has watched the same comfort show 7 times?",               answer: "B" },
      ],
    },
    {
      category: "Social & Personality",
      emoji: "🗣️",
      questions: [
        { q: "Who talks more to strangers?",                                          answer: "G" },
        { q: "Who's the loud one you can hear from across the room?",                  answer: "B", twist: true },
        { q: "Who tells the longer stories?",                                         answer: "G" },
        { q: "Who's the fierce competitor that absolutely refuses to lose?",          answer: "B", twist: true },
        { q: "Who replies to texts faster?",                                          answer: "B" },
        { q: "Who's the daredevil — first to say \"let's do it\" to anything risky?", answer: "B", twist: true },
        { q: "Who googles the answer mid-argument to prove a point?",                 answer: "G" },
        { q: "Who takes longer to actually leave after saying \"okay, let's go\"?",   answer: "B" },
        { q: "Who says \"I told you so\"?",                                           answer: "G" },
        { q: "Who waves back at someone who was actually waving at the person behind them?", answer: "G" },
        { q: "Who gives the warmest hellos and goodbyes?",                            answer: "B" },
        { q: "Who remembers everyone's name at the party?",                           answer: "G" },
      ],
    },
    {
      category: "Food & Household",
      emoji: "🍴",
      questions: [
        { q: "Who controls the thermostat?",                                       answer: "G" },
        { q: "Who's the real chef of the house, doing most of the cooking and baking?", answer: "G", twist: true },
        { q: "Who keeps more \"I'll use it someday\" stuff?",                      answer: "B" },
        { q: "Who's more likely to eat the last slice and deny it?",               answer: "G" },
        { q: "Who eats more?",                                                     answer: "G" },
        { q: "Who watches the recipe video but will never, ever make it?",         answer: "B" },
        { q: "Who says \"I'm not hungry\" then eats half your plate?",             answer: "B" },
        { q: "Who \"just has a bite\" of dessert and finishes the whole thing?",   answer: "G" },
        { q: "Who saves the best bite for the other person?",                      answer: "B" },
        { q: "Who finishes their meal and then eyes the other's plate?",           answer: "G" },
      ],
    },
    {
      category: "Out & About",
      emoji: "🛒",
      questions: [
        { q: "Who goes in for milk and comes out with $80 of \"essentials\"?", answer: "B" },
        { q: "Who pushes the shopping cart like it's a Formula 1 race?",       answer: "G" },
        { q: "Who confidently presses \"depart\" then asks which way to turn?", answer: "G" },
        { q: "Who's dressed and waiting by the door 30 minutes early?",        answer: "B" },
      ],
    },
    {
      category: "Everyday Heroes & Brain Quirks",
      emoji: "🦸",
      questions: [
        { q: "Who's the official spider-relocation officer?",                       answer: "G" },
        { q: "Who untangles every charger, necklace, and pair of headphones?",      answer: "B" },
        { q: "Who remembers song lyrics but not why they walked into the room?",    answer: "B" },
        { q: "Who's the human GPS for \"where did I leave my…\"?",                   answer: "G" },
      ],
    },
    {
      category: "Soft & Sweet",
      emoji: "🥰",
      questions: [
        { q: "Who talks to every dog like it's a person?",                       answer: "B" },
        { q: "Who waves at babies in the supermarket?",                          answer: "B" },
        { q: "Who names the houseplants?",                                       answer: "B" },
        { q: "Who took 200 photos on the trip — and 198 were of the other person?", answer: "G" },
        { q: "Who'll cry happy tears during the speeches?",                      answer: "B" },
      ],
    },
  ],
};

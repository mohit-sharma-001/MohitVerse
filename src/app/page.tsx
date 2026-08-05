"use client";

import WelcomeScreen from "@/components/WelcomeScreen";

export default function Home() {
  /**
   * Called when the visitor clicks "Let's Get Started".
   * The transition into the Intro section will be defined here later —
   * for now this is an intentional stub.
   */
  function onEnterClick() {
    // TODO: trigger scroll / transition into the Intro section
    console.log("[MOHITVERSE] onEnterClick fired — Intro section coming soon.");
  }

  return (
    <main>
      <WelcomeScreen onEnterClick={onEnterClick} />
    </main>
  );
}

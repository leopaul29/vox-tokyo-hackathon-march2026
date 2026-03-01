# 🍱 VOX-MESHI (ヴォックス飯)

### *Your AI Omotenashi Guide for Authentic Japanese Dining*

**VOX-MESHI** is an empathetic, real-time Voice AI agent designed to bridge the gap between international tourists and local Japanese eateries. It transforms the intimidating "Kanji wall" of traditional Izakayas into an interactive, personalized, and educational dining experience.

---

## 🌟 The Problem

* **Language Barrier:** Local restaurants often use handwritten or stylized Kanji menus that standard OCR cannot parse.
* **Dietary Restrictions:** Tourists with allergies or specific diets (Vegan, Halal) often struggle to communicate safely.
* **Cultural Gap:** Visitors want to be polite but don't know the proper phrases or etiquette (Gochisousama, etc.).

## ✨ Key Features

* **Dynamic Menu Scoring:** Using mocked Vision-to-JSON data, the AI analyzes the menu and ranks dishes based on user preferences (e.g., "I love spicy food but no pork").
* **Dual-Mode Audio:**
* **Earbud Mode (Private):** Whispers cultural tips and ingredients directly to the user.
* **Speaker Mode (Public):** Uses **MiniMax** for natural, polite Japanese speech to assist in ordering.


* **Vibe-Coding UI:** A modern, card-based interface built with **TRAE** that highlights safety tags (Vegan, GF, Spicy) and hides irrelevant options.
* **Language Shadowing:** Helps users practice their Japanese pronunciation by repeating phrases before speaking to the waiter.

---

## 🛠️ Tech Stack

* **Orchestration:** [TEN Framework](https://www.google.com/search?q=https://github.com/ten-framework) (Graph-based AI agent)
* **Real-time Voice:** [Agora SD-RTN](https://www.agora.io/) (Ultra-low latency)
* **Speech Synthesis:** [MiniMax](https://www.minimaxi.com/en) (Expressive, natural Japanese TTS)
* **IDE:** [TRAE](https://www.trae.ai/) (AI-native development)
* **LLM:** GPT-4o / Gemini 1.5 (Reasoning & Scoring logic)

---

## 🚀 Quick Start (Development)

### Prerequisites

* Docker & Docker Compose
* Agora App ID & Certificate
* MiniMax / OpenAI API Keys

### Installation

1. **Clone & Setup:**
```bash
git clone <your-repo-url>
cd vox-meshi/ai_agents
cp .env.example .env

```


2. **Configure Variables:** Fill in your API keys in the `.env` file.
3. **Launch the TEN Environment:**
```bash
docker compose up -d
docker exec -it ten_agent_dev bash

```


4. **Run the Agent:**
```bash
cd agents/examples/voice-assistant-realtime
task install
task run

```


5. **Access the Designer:** Open `http://localhost:49483` to view the agent graph.

---

## 🎨 System Architecture (The "Graph")

VOX-MESHI operates on a specialized TEN Graph:

1. **STT (Deepgram):** Captures user intent in English/Japanese.
2. **Controller (LLM):** Processes the `mock_menu.json` + User Profile + Context.
3. **TTS (MiniMax):** Generates high-fidelity, emotionally aware responses.
4. **UI Bridge:** Updates the "Dynamic Menu Cards" based on the LLM's scoring.

---

## 🌍 Social Impact

* **Sustainable Tourism:** Directs traffic to small, family-owned businesses that lack English support.
* **Cultural Preservation:** Encourages tourists to learn and use Japanese, fostering mutual respect.
* **Inclusivity:** Empowers travelers with dietary restrictions to eat safely in traditional settings.

---

## 🏆 Hackathon Details

* **Event:** VOX TOKYO: A Voice AI Hackathon for Social Impact
* **Location:** Kawasaki, Japan

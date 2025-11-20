'use server';

import { generateBonusContent } from '@/ai/flows/generate-bonus-content';
import { gamesList } from '@/lib/content';

export async function generateIdeasAction(): Promise<{ ideas: string[] } | { error: string }> {
  try {
    const result = await generateBonusContent({
      gameTitles: gamesList.slice(0, 5), // Use a subset of games for the demo
      ageRange: "4-10 anos",
    });
    
    if (result && result.bonusContentIdeas) {
      return { ideas: result.bonusContentIdeas };
    } else {
      return { error: 'Não foi possível gerar novas ideias no momento.' };
    }
  } catch (e) {
    console.error(e);
    return { error: 'Ocorreu um erro ao se comunicar com a IA.' };
  }
}

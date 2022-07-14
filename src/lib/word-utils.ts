import { Word } from "../types/word"

export const sanitizeWord = (word: string): string => {
	return word.replace(/[ .:/\\#?<>\[\]{}|]/g, '_')
}

export const getWordLink = (word: Word): string => {
	return `/${encodeURIComponent(sanitizeWord(word.Name))}`
}
